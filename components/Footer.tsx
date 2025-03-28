import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h4 className="font-bold mb-2">Service Client</h4>
          <ul>
            <li><Link href="/contact"><a className="hover:underline">Contact</a></Link></li>
            <li><Link href="/a-propos"><a className="hover:underline">À propos</a></Link></li>
            <li><Link href="/faq"><a className="hover:underline">FAQ</a></Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Mon Compte</h4>
          <ul>
            <li><Link href="/login"><a className="hover:underline">Se connecter</a></Link></li>
            <li><Link href="/register"><a className="hover:underline">S'inscrire</a></Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">À Propos</h4>
          <ul>
            <li><Link href="/a-propos"><a className="hover:underline">Notre Histoire</a></Link></li>
            <li><Link href="/catalogue"><a className="hover:underline" target="_blank">Catalogue</a></Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Contact</h4>
          <ul>
            <li>LuxFood SARL</li>
            <li>123 Rue de l'Exemple</li>
            <li>75000 Paris, France</li>
            <li>Tél : <a href="tel:+33123456789" className="hover:underline">+33 1 23 45 67 89</a></li>
            <li>Email : <a href="mailto:contact@luxfood.fr" className="hover:underline">contact@luxfood.fr</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-sm">
        © 2025 LuxFood - Tous droits réservés
      </div>
    </footer>
  );
}
