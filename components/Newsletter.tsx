export default function Newsletter() {
    return (
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Restez informé</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Abonnez-vous à notre newsletter pour recevoir nos offres spéciales et les dernières nouveautés
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none text-gray-800"
              required
            />
            <button
              type="submit"
              className="bg-blue-800 hover:bg-blue-900 px-6 py-3 rounded-r-lg font-medium transition-colors"
            >
              S'abonner
            </button>
          </form>
        </div>
      </section>
    );
  }