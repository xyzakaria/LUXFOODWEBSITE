import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="w-full h-64 bg-cover bg-center flex items-center justify-center text-white text-center"
      style={{ backgroundImage: "url('/hero-banner.jpg')" }}
    >
      <div>
        <h1 className="text-3xl md:text-5xl font-bold">
          Le spécialiste des saveurs du Moyen‑Orient
        </h1>
        <p className="mt-4 text-lg md:text-2xl">Découvrez nos produits uniques</p>
        <div className="mt-6 flex justify-center space-x-4">
          <Link href="/produits">
            <a className="px-6 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition">
              Voir nos produits
            </a>
          </Link>
          <Link href="/a-propos">
            <a className="px-6 py-2 bg-white text-blue-600 rounded-full hover:bg-gray-200 transition">
              Lire notre histoire
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
