import Hero from '@/components/Hero'
import TrendingProducts from '@/components/TrendingProducts'
import FeaturedCategories from '@/components/FeaturedCategories'
import ProductGrid from '@/components/ProductGrid'
import Testimonials from '@/components/Testimonials'
import Newsletter from '@/components/Newsletter'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('home')
  
  return (
    <div className="space-y-20 py-8">
      {/* Hero Section */}
      <section className="relative">
        <Hero />
      </section>

      {/* Trending Products */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('trending_products')}
        </h2>
        <TrendingProducts />
      </section>

      {/* Featured Categories */}
      <section className="container mx-auto px-4">
        <FeaturedCategories />
      </section>

      {/* Product Grid */}
      <section className="container mx-auto px-4">
        <ProductGrid 
          title={t('featured_products')}
          subtitle={t('discover_our_selection')}
        />
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <Testimonials />
      </section>

      {/* Newsletter */}
      <section className="bg-blue-600 text-white py-16">
        <Newsletter />
      </section>
    </div>
  )
}