import { useEffect } from 'react'
import type { Dish } from '../../types'
import { useCart } from '../../context/CartContext'
import { Button } from '../ui/Button'

interface Props {
  dish: Dish | null
  onClose: () => void
}

export function DishModal({ dish, onClose }: Props) {
  const { addItem, openCart } = useCart()

  useEffect(() => {
    if (!dish) return
    const handleKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [dish, onClose])

  if (!dish) return null

  function handleAdd() {
    if (!dish) return
    addItem(dish)
    onClose()
    openCart()
  }

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-primary max-w-2xl w-full flex shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={dish.photo}
          alt={dish.name}
          className="w-64 h-auto object-cover shrink-0 hidden sm:block"
        />
        <div className="p-6 flex flex-col gap-3 flex-1">
          <h2 className="text-white font-bold text-xl">{dish.name}</h2>
          <p className="text-white text-sm leading-relaxed flex-1">{dish.description}</p>
          <p className="text-white text-sm">{dish.serve}</p>
          <p className="text-white font-bold text-lg">
            R$ {dish.price.toFixed(2).replace('.', ',')}
          </p>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary mt-2"
            onClick={handleAdd}
          >
            Adicionar ao carrinho
          </Button>
        </div>
      </div>
    </div>
  )
}
