'use client'
import { useState } from "react";

type Product = {
  id: number;
  name: string;
  image: string;
  price?: number;
  description?: string;
};

const products: Product[] = [
  { 
    id: 1, 
    name: "Huile d'Olive Premium", 
    image: "/produit1.jpg",
    price: 24.99,
    description: "Huile d'olive extra vierge de première pression à froid"
  },
  // Add other products with similar structure
];

export default function ProductGrid() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="p-4">
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

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">{product.name}</h3>
              {product.price && (
                <p className="text-blue-600 font-medium mt-2">
                  {product.price.toFixed(2)}€
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}