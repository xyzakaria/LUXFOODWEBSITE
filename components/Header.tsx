'use client'
import Link from "next/link";
import { useState } from "react";
import { Search, ShoppingCart } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      {/* Logo */}
      <Link legacyBehavior href="/">
        <a className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 mr-2" />
          <span className="text-xl font-bold text-gray-800">LuxFood</span>
        </a>
      </Link >

      {/* Navigation principale */}
      <nav className="hidden md:flex space-x-6">
        <Link legacyBehavior href="/produits"><a className="text-gray-700 hover:text-gray-900">Produits</a></Link>
        <Link legacyBehavior href="/a-propos"><a className="text-gray-700 hover:text-gray-900">À propos</a></Link>
        <Link legacyBehavior href="/contact"><a className="text-gray-700 hover:text-gray-900">Contact</a></Link>
      </nav>

      {/* Icônes et barre de recherche */}
      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Rechercher..."
            className="border rounded-full pl-10 pr-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
        </div>
        <ShoppingCart className="w-6 h-6 text-gray-700" />

        {/* Bouton menu mobile */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow md:hidden p-4">
          <nav className="flex flex-col space-y-2">
            <Link legacyBehavior href="/produits"><a className="text-gray-700 hover:text-gray-900">Produits</a></Link>
            <Link legacyBehavior href="/a-propos"><a className="text-gray-700 hover:text-gray-900">À propos</a></Link>
            <Link legacyBehavior href="/contact"><a className="text-gray-700 hover:text-gray-900">Contact</a></Link>
            <div className="mt-2 relative">
              <input
                type="text"
                placeholder="Rechercher..."
                className="border rounded-full pl-10 pr-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
