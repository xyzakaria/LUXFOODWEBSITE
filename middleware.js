import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { createIntlMiddleware } from 'next-intl/server'

const locales = ['en', 'fr', 'ar', 'tr']
const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale: 'fr',
  localePrefix: 'as-needed'
})

export default async function middleware(req: NextRequest) {
  const res = intlMiddleware(req)
  
  // Pour la prise en charge RTL (Right-to-Left) pour l'arabe
  if (req.nextUrl.locale === 'ar') {
    res.headers.set('direction', 'rtl')
    res.headers.set('lang', 'ar')
  }
  
  return res
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
}