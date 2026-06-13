import type { CartItem as CartItemType } from '../../types'
import { useCart } from '../../context/CartContext'

interface Props {
  item: CartItemType
}

export function CartItem({ item }: Props) {
  const { removeItem } = useCart()
  const { dish, quantity } = item

  return (
    <div className="flex items-center gap-3 py-3 border-b border-primary/30">
      <img
        src={dish.photo}
        alt={dish.name}
        className="w-16 h-16 object-cover shrink-0"
      />
      <div className="flex-1 min-w-0">
        <p className="text-white text-sm font-medium truncate">{dish.name}</p>
        <p className="text-white/70 text-xs">
          {quantity}x — R$ {(dish.price * quantity).toFixed(2).replace('.', ',')}
        </p>
      </div>
      <button
        onClick={() => removeItem(dish.id)}
        className="text-white/50 hover:text-white transition-colors text-lg leading-none"
        aria-label={`Remover ${dish.name}`}
      >
        ×
      </button>
    </div>
  )
}
