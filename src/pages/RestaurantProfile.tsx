import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { restaurants } from '../data/restaurants'
import type { Dish } from '../types'
import { RestaurantHero } from '../components/restaurant/RestaurantHero'
import { Footer } from '../components/layout/Footer'
import { DishCard } from '../components/restaurant/DishCard'
import { DishModal } from '../components/restaurant/DishModal'

export function RestaurantProfile() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null)

  const restaurant = restaurants.find((r) => r.id === Number(id))

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center gap-4">
        <p className="text-gray-500">Restaurante não encontrado.</p>
        <button onClick={() => navigate('/')} className="text-primary underline">
          Voltar
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <RestaurantHero restaurant={restaurant} />

      <main className="flex-1 bg-text-dark py-10">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {restaurant.menu.map((dish) => (
              <DishCard key={dish.id} dish={dish} onSelect={setSelectedDish} />
            ))}
          </div>
        </div>
      </main>

      <Footer />

      <DishModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
    </div>
  )
}
