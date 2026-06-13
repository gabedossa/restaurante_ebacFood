import type { Dish } from '../../types'
import { Button } from '../ui/Button'

interface Props {
  dish: Dish
  onSelect: (dish: Dish) => void
}

export function DishCard({ dish, onSelect }: Props) {
  return (
    <article className="bg-primary flex flex-col">
      <img
        src={dish.photo}
        alt={dish.name}
        className="w-full h-36 object-cover"
      />
      <div className="p-3 flex flex-col flex-1 gap-2">
        <h3 className="text-white font-bold text-sm">{dish.name}</h3>
        <p className="text-white text-xs leading-relaxed flex-1 line-clamp-3">
          {dish.description}
        </p>
        <Button
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-primary mt-auto"
          onClick={() => onSelect(dish)}
        >
          Adicionar ao carrinho
        </Button>
      </div>
    </article>
  )
}
