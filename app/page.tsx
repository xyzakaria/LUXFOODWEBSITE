import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, ShoppingCart } from "lucide-react";

const products = [
  { id: 1, name: "Produit 1", image: "https://via.placeholder.com/300x200" },
  { id: 2, name: "Produit 2", image: "https://via.placeholder.com/300x200" },
  { id: 3, name: "Produit 3", image: "https://via.placeholder.com/300x200" },
  { id: 4, name: "Produit 4", image: "https://via.placeholder.com/300x200" },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">All4Trade Clone</h1>
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5" />
          <ShoppingCart className="w-5 h-5" />
        </div>
      </header>
      
      {/* Hero Section */}
      <div className="w-full h-64 bg-cover bg-center flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundImage: "url('https://via.placeholder.com/1200x400')" }}>
        Bienvenue sur notre boutique
      </div>

      {/* Recherche */}
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex items-center border rounded-lg p-2 bg-white shadow-sm">
          <Search className="w-5 h-5 mr-2 text-gray-500" />
          <Input
            placeholder="Rechercher un produit..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border-none focus:ring-0"
          />
        </div>
      </div>
      
      {/* Produits */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="bg-white shadow rounded-lg overflow-hidden">
            <CardContent className="p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <p className="mt-2 font-semibold text-gray-800">{product.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-8">
        © 2025 All4Trade Clone - Tous droits réservés
      </footer>
    </div>
  );
}
