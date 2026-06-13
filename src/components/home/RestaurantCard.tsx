import { useNavigate } from 'react-router-dom'
import type { Restaurant } from '../../types'
import { StarRating } from '../ui/StarRating'
import { Button } from '../ui/Button'

interface Props {
  restaurant: Restaurant
}

export function RestaurantCard({ restaurant }: Props) {
  const navigate = useNavigate()

  return (
    <article className="bg-white shadow-sm border border-bg-peach flex flex-col">
      <div className="relative">
        <img
          src={restaurant.coverImage}
          alt={restaurant.name}
          className="w-full h-40 object-cover"
        />
        <div className="absolute top-2 right-2 flex gap-1">
          {restaurant.tags.map((tag) => (
            <span
              key={tag.id}
              className="bg-primary text-white text-xs px-2 py-0.5 font-medium"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1 gap-3">
        <div className="flex justify-between items-start">
          <h2 className="font-bold text-base text-text-dark">{restaurant.name}</h2>
          <StarRating value={restaurant.rating} />
        </div>

        <p className="text-sm text-gray-500 leading-relaxed flex-1">{restaurant.description}</p>

        <Button onClick={() => navigate(`/restaurante/${restaurant.id}`)}>
          Saiba mais
        </Button>
      </div>
    </article>
  )
}
