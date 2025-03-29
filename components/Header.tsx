'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const t = useTranslations('header')
  const locale = useLocale()

  return (
    <header className="fixed w-full z-50 bg-white shadow-md py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo - Visible sur tous les appareils */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <img src="/logo.png" alt="LuxFood" className="h-8 w-auto" />
            <span className="text-xl font-bold text-gray-800 hidden sm:block">LuxFood</span>
          </Link>

          {/* Navigation Desktop - Caché sur mobile */}
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

          {/* Section droite (icônes + menu mobile) */}
          <div className="flex items-center space-x-4">
            {/* Sélecteur de langue */}
            <LanguageSwitcher />

            {/* Barre de recherche - Desktop seulement */}
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder={t('search')}
                className="border border-gray-200 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
              />
            </div>

            {/* Icône compte */}
            <Link href={`/${locale}/account`} className="p-2 text-gray-700 hover:text-blue-600 transition-colors hidden md:block">
              <User className="w-5 h-5" />
            </Link>

            {/* Icône panier */}
            <Link href={`/${locale}/cart`} className="p-2 text-gray-700 hover:text-blue-600 transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>

            {/* Bouton menu mobile - Visible seulement sur mobile */}
            <button 
              className="md:hidden p-2 text-gray-700 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile - S'affiche quand menuOpen = true */}
        {menuOpen && (
          <div className="md:hidden bg-white py-4 border-t mt-2">
            <div className="flex flex-col space-y-4 px-4">
              {/* Barre de recherche mobile */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder={t('search')}
                  className="w-full border border-gray-200 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Liens navigation mobile */}
              <Link 
                href={`/${locale}/products`}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {t('products')}
              </Link>
              <Link 
                href={`/${locale}/categories`}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {t('categories')}
              </Link>
              <Link 
                href={`/${locale}/about`}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {t('about')}
              </Link>
              <Link 
                href={`/${locale}/contact`}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {t('contact')}
              </Link>

              {/* Liens compte mobile */}
              <div className="border-t border-gray-200 pt-2 mt-2">
                <Link 
                  href={`/${locale}/account`}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium flex items-center space-x-2"
                  onClick={() => setMenuOpen(false)}
                >
                  <User className="w-5 h-5" />
                  <span>{t('account')}</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}