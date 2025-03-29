import createMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'

export default createMiddleware({
  // Liste de vos locales
  locales: ['fr', 'en', 'ar', 'tr'],
  
  // Locale par défaut
  defaultLocale: 'fr',
  
  // Configuration optionnelle :
  localePrefix: 'as-needed', // Préfixe seulement pour les locales non-défaut
  localeDetection: true      // Détection automatique
})

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
}