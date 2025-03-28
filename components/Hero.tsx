import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen max-h-[800px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), url('/hero-banner.jpg')" }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
          Saveurs Authentiques du Moyen-Orient
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fadeIn delay-100">
          Découvrez des produits d'exception sélectionnés avec soin
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn delay-200">
          <Link
            href="/produits"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-colors"
          >
            Explorer nos produits
          </Link>
          <Link
            href="/a-propos"
            className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-full font-medium transition-colors"
          >
            Notre histoire
          </Link>
        </div>
      </div>
    </section>
  );
}