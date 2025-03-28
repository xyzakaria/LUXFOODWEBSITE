const testimonials = [
    {
      id: 1,
      name: "Sophie Martin",
      role: "Chef Cuisinière",
      content: "Les produits LuxFood ont transformé ma cuisine. La qualité est exceptionnelle et les saveurs authentiques.",
      rating: 5
    },
    {
      id: 2,
      name: "Ahmed Benali",
      role: "Restaurateur",
      content: "Mes clients adorent les épices que je me procure chez LuxFood. Un fournisseur fiable et de qualité.",
      rating: 4
    },
    {
      id: 3,
      name: "Élodie Petit",
      role: "Food Blogger",
      content: "Je recommande vivement LuxFood pour découvrir les véritables saveurs du Moyen-Orient.",
      rating: 5
    }
  ];
  
  export default function Testimonials() {
    return (
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Ce que disent nos clients</h2>
            <p className="text-gray-600 mt-2">Découvrez les expériences de nos clients satisfaits</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }