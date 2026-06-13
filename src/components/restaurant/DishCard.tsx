import type { Dish } from '../../types'
import { Button } from '../ui/Button'

interface Props {
  dish: Dish
  onSelect: (dish: Dish) => void
}

export function DishCard({ dish, onSelect }: Props) {
  return (
    <article className="mx-2 bg-primary rounded-none p-2 flex flex-col h-full transition hover:-translate-y-0.5 hover:shadow-md">
      <img
        src={dish.photo}
        alt={dish.name}
        className="w-full h-48 object-cover"
      />
      
      <div style={{ margin: "10px" }} className="flex flex-1 flex-col gap-3 px-3 py-3 text-bg-peach">
        {/* Título e preço */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="flex-1 font-black text-base leading-tight">
            {dish.name}
          </h3>
          <span className="shrink-0 whitespace-nowrap font-bold text-base">
            R$ {dish.price.toFixed(2).replace('.', ',')}
          </span>
        </div>

        {/* Descrição */}
        <p className="flex-1 text-xs leading-relaxed text-bg-peach/90 line-clamp-3">
          {dish.description}
        </p>

        {/* Botão no canto inferior direito */}
        <div className="flex justify-end mt-auto">
          <Button
            style={{ padding: "5px" }}
            variant="secondary"
            className="py-2 text-xs"
            onClick={() => onSelect(dish)}
          >
            Adicionar ao carrinho
          </Button>
        </div>
      </div>
    </article>
  )
}