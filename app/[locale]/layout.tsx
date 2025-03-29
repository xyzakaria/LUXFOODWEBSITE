import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { ReactNode } from 'react'
import { unstable_setRequestLocale } from 'next-intl/server'

type Props = {
  children: ReactNode
  params: { locale: string }
}

// Liste des langues supportées
const locales = ['fr', 'en', 'ar', 'tr']

export default async function LocaleLayout({
  children,
  params: { locale }
}: Props) {
  // Validation de la locale
  if (!locales.includes(locale as any)) notFound()

  // Configuration pour le rendu côté serveur
  unstable_setRequestLocale(locale)

  // Chargement des traductions
  let messages
  try {
    messages = (await import(`../../locales/${locale}/common.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <NextIntlClientProvider 
      locale={locale} 
      messages={messages}
      timeZone="Europe/Paris"
    >
      {/* Structure de base avec header/footer */}
      <div className="min-h-screen flex flex-col">
        {children}
      </div>
    </NextIntlClientProvider>
  )
}