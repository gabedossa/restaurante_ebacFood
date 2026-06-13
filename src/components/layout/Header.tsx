import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

interface Props {
  restaurantName?: string
  showCart?: boolean
}

export function Header({ restaurantName, showCart = false }: Props) {
  const { openCart, totalItems } = useCart()

  if (restaurantName) {
    return (
      <header className="relative h-70 bg-black">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=400&fit=crop"
          alt={restaurantName}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col justify-between p-8 max-w-5xl mx-auto w-full">
          <div className="flex justify-between items-start w-full">
            <Link to="/" className="text-white font-bold text-2xl tracking-wide">
              efood
            </Link>
            {showCart && (
              <button
                onClick={openCart}
                className="text-white text-sm flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                {totalItems} produto{totalItems !== 1 ? 's' : ''} no carrinho
                <span className="text-xl">🛒</span>
              </button>
            )}
          </div>
          <h1 className="text-white text-3xl font-bold">{restaurantName}</h1>
        </div>
      </header>
    )
  }

  return (
    <header className="bg-bg-light border-b border-bg-peach">
      <div className="max-w-5xl mx-auto px-8 py-6 flex items-center justify-between">
        <p className="text-primary text-sm">
          Viva experiências gastronômicas no conforto da sua casa
        </p>
        <Link to="/" className="text-primary font-bold text-3xl tracking-wide">
          efood
        </Link>
        <button
          onClick={openCart}
          className="text-primary text-sm flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          {totalItems} produto{totalItems !== 1 ? 's' : ''} no carrinho
          <span className="text-xl">🛒</span>
        </button>
      </div>
    </header>
  )
}
