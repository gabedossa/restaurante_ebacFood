import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { RestaurantCard } from '../components/home/RestaurantCard'
import { restaurants } from '../data/restaurants'

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-bg-light py-10">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
