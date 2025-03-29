import ProductGrid from '@/components/ProductGrid'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

export default function ProductsPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('products')

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {t('title')}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </div>
      
      <section className="mb-16">
        <ProductGrid 
          title={t('featured_products')}
          subtitle={t('discover_our_selection')}
        />
      </section>

      <section className="bg-gray-50 py-12 rounded-xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            {t('trending')}
          </h2>
          <p className="text-gray-600 mt-2">
            {t('explore_popular_items')}
          </p>
        </div>
        {/* Add trending products component or integration here */}
      </section>
    </main>
  )
}