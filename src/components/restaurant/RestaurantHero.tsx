import { Link } from 'react-router-dom'
import type { Restaurant } from '../../types'
import { useCart } from '../../context/CartContext'

interface Props {
  restaurant: Restaurant
}

export function RestaurantHero({ restaurant }: Props) {
  const { openCart, totalItems } = useCart()

  return (
    <header className="relative h-70 bg-black">
      <img
        src={restaurant.coverImage}
        alt={restaurant.name}
        className="w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 flex flex-col justify-between px-8 py-6 max-w-5xl mx-auto w-full">
        <div className="flex justify-between items-center w-full">
          <Link to="/" className="text-white font-bold text-2xl tracking-wide">
            efood
          </Link>
          <button
            onClick={openCart}
            className="text-white text-sm flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            {totalItems} produto{totalItems !== 1 ? 's' : ''} no carrinho
            <span className="text-xl">🛒</span>
          </button>
        </div>
        <h1 className="text-white text-3xl font-bold">{restaurant.name}</h1>
      </div>
    </header>
  )
}
