import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "LuxFood – Boutique de saveurs",
  description: "Boutique en ligne spécialisée dans les produits du Moyen‑Orient.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
<<<<<<< HEAD
      <body className="antialiased">
        {children}
=======
      <body className="antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-16 md:pt-20"> {/* Added padding to account for fixed header */}
          {children}
        </main>
        <Footer />
>>>>>>> parent of 21cc5a5 (support product et layout de langues)
      </body>
    </html>
  );
}