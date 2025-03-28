import Link from "next/link";

const categories = [
  { id: 1, name: "Huiles d'Olive", image: "/category-oil.jpg", link: "/categories/huiles" },
  { id: 2, name: "Épices", image: "/category-spices.jpg", link: "/categories/epices" },
  { id: 3, name: "Pâtisseries", image: "/category-pastries.jpg", link: "/categories/patisseries" },
  { id: 4, name: "Cafés", image: "/category-coffee.jpg", link: "/categories/cafes" },
];

export default function FeaturedCategories() {
  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Nos Catégories</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Explorez nos sélections soigneusement choisies
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {categories.map((category) => (
          <Link 
            key={category.id} 
            href={category.link}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold text-center px-2 group-hover:text-blue-300 transition-colors">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}