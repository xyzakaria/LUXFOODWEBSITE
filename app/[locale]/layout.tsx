import { NextIntlClientProvider } from 'next-intl'
import { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

type Props = {
  children: ReactNode
  params: { locale: string }
}

const locales = ['fr', 'en', 'ar', 'tr']

export default async function LocaleLayout({
  children,
  params: { locale }
}: Props) {
  if (!locales.includes(locale)) notFound()

  let messages
  try {
    messages = (await import(`../../locales/${locale}/common.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow pt-20 pb-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <NextIntlClientProvider locale={locale} messages={messages}>
              {children}
            </NextIntlClientProvider>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  )
}

export const generateStaticParams = () => {
  return locales.map((locale) => ({ locale }))
}