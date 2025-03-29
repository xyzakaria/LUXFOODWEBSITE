'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <header 
      className="fixed w-full z-50 bg-white shadow-md"
      style={{ height: headerHeight.mobile }}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
=======
    <header className="fixed w-full z-50 bg-white shadow-md py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo - Visible sur tous les appareils */}
>>>>>>> parent of 669c5d3 (problesmes on regle ca plus tard)
          <Link href={`/${locale}`} className="flex items-center space-x-2">
=======
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
>>>>>>> parent of 21cc5a5 (support product et layout de langues)
            <img src="/logo.png" alt="LuxFood" className="h-8 w-auto" />
            <span className="text-xl font-bold text-gray-800 hidden sm:block">LuxFood</span>
          </Link>

<<<<<<< HEAD
<<<<<<< HEAD
          {/* Navigation Desktop */}
=======
          {/* Desktop Navigation */}
>>>>>>> parent of 21cc5a5 (support product et layout de langues)
=======
          {/* Navigation Desktop - Caché sur mobile */}
>>>>>>> parent of 669c5d3 (problesmes on regle ca plus tard)
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/produits" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Produits
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Catégories
            </Link>
            <Link href="/a-propos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              À propos
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </Link>
          </nav>

<<<<<<< HEAD
<<<<<<< HEAD
          {/* Right Section */}
=======
          {/* Section droite (icônes + menu mobile) */}
>>>>>>> parent of 669c5d3 (problesmes on regle ca plus tard)
          <div className="flex items-center space-x-4">
            {/* Sélecteur de langue */}
            <LanguageSwitcher />
<<<<<<< HEAD
            
=======
          {/* Icons and Search */}
          <div className="flex items-center space-x-4">
>>>>>>> parent of 21cc5a5 (support product et layout de langues)
=======

            {/* Barre de recherche - Desktop seulement */}
>>>>>>> parent of 669c5d3 (problesmes on regle ca plus tard)
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Rechercher..."
                className="border border-gray-200 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
              />
            </div>

<<<<<<< HEAD
<<<<<<< HEAD
=======
            {/* Icône compte */}
>>>>>>> parent of 669c5d3 (problesmes on regle ca plus tard)
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

<<<<<<< HEAD
=======
            <div className="flex space-x-3">
              <Link href="/compte" className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
                <User className="w-5 h-5" />
              </Link>
              <Link href="/panier" className="p-2 text-gray-700 hover:text-blue-600 transition-colors relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
>>>>>>> parent of 21cc5a5 (support product et layout de langues)
=======
            {/* Bouton menu mobile - Visible seulement sur mobile */}
>>>>>>> parent of 669c5d3 (problesmes on regle ca plus tard)
            <button 
              className="md:hidden p-2 text-gray-700 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Mobile Menu */}
=======
        {/* Menu Mobile - S'affiche quand menuOpen = true */}
>>>>>>> parent of 669c5d3 (problesmes on regle ca plus tard)
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
=======
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 pt-2 pb-6 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full border border-gray-200 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <nav className="flex flex-col space-y-2">
              <Link 
                href="/produits" 
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Produits
              </Link>
              <Link 
                href="/categories" 
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Catégories
              </Link>
              <Link 
                href="/a-propos" 
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
                onClick={() => setMenuOpen(false)}
              >
                À propos
              </Link>
              <Link 
                href="/contact" 
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="border-t border-gray-200 pt-2 mt-2">
                <Link 
                  href="/compte" 
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium flex items-center space-x-2"
                  onClick={() => setMenuOpen(false)}
                >
                  <User className="w-5 h-5" />
                  <span>Mon compte</span>
                </Link>
                <Link 
                  href="/panier" 
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium flex items-center space-x-2"
                  onClick={() => setMenuOpen(false)}
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Panier (3)</span>
                </Link>
              </div>
            </nav>
>>>>>>> parent of 21cc5a5 (support product et layout de langues)
          </div>
        </div>
      )}
    </header>
  );
}