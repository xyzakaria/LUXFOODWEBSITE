'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'

const headerHeight = {
  mobile: '5rem',
  desktop: '4.5rem'
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const t = useTranslations('header')
  const locale = useLocale()

  return (
    <header 
      className="fixed w-full z-50 bg-white shadow-md"
      style={{ height: headerHeight.mobile }}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <img src="/logo.png" alt="LuxFood" className="h-8 w-auto" />
            <span className="text-xl font-bold text-gray-800 hidden sm:block">LuxFood</span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href={`/${locale}/products`} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              {t('products')}
            </Link>
            <Link href={`/${locale}/categories`} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              {t('categories')}
            </Link>
            <Link href={`/${locale}/about`} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              {t('about')}
            </Link>
            <Link href={`/${locale}/contact`} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              {t('contact')}
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder={t('search')}
                className="border border-gray-200 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
              />
            </div>

            <Link href={`/${locale}/account`} className="p-2 text-gray-700 hover:text-blue-600 transition-colors hidden md:block">
              <User className="w-5 h-5" />
            </Link>

            <Link href={`/${locale}/cart`} className="p-2 text-gray-700 hover:text-blue-600 transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>

            <button 
              className="md:hidden p-2 text-gray-700 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white py-4 border-t absolute left-0 right-0 shadow-lg">
            <div className="container mx-auto px-4">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder={t('search')}
                  className="w-full border border-gray-200 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <nav className="flex flex-col space-y-2">
                <Link href={`/${locale}/products`} className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium">
                  {t('products')}
                </Link>
                {/* ... autres liens mobile ... */}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}