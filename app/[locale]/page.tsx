import Hero from "@/components/Hero";
import TrendingProducts from "@/components/TrendingProducts";
import FeaturedCategories from "@/components/FeaturedCategories";
import ProductGrid from "@/components/ProductGrid";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      <Hero />
      <TrendingProducts />
      <FeaturedCategories />
      <ProductGrid 
        title="Nos Produits Phares"
        subtitle="Découvrez nos meilleures ventes"
      />
      <Testimonials />
      <Newsletter />
    </div>
  );
}