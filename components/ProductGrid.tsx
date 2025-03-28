import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card"; // Vous pouvez adapter ou créer vos propres composants Card

// Exemple de données produits
const products = [
  { id: 1, name: "Produit 1", image: "/produit1.jpg" },
  { id: 2, name: "Produit 2", image: "/produit2.jpg" },
  { id: 3, name: "Produit 3", image: "/produit3.jpg" },
  { id: 4, name: "Produit 4", image: "/produit4.jpg" },
];

export default function ProductGrid() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="p-4">
      {/* Barre de recherche */}
      <div className="max-w-4xl mx-auto mb-6">
        <div className="flex items-center border rounded-lg p-2 bg-white shadow-sm">
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border-none focus:ring-0"
          />
        </div>
      </div>

      {/* Grille de produits */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow rounded-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <p className="font-semibold text-gray-800">{product.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
