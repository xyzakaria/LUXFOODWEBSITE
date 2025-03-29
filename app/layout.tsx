import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LuxFood',
  description: 'Boutique de produits alimentaires de luxe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}