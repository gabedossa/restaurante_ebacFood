import { useEffect } from 'react'
import type { Dish } from '../../types'
import { useCart } from '../../hooks/useCart'
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
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
  className="relative bg-primary rounded-lg max-w-2xl w-full p-6 sm:p-8 flex flex-col sm:flex-row gap-8 shadow-2xl mx-4 overflow-hidden"
  onClick={(e) => e.stopPropagation()}
>
  {/* Botão fechar */}
  <button
    onClick={onClose}
    className="absolute right-4 top-4 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all cursor-pointer"
    aria-label="Fechar"
  >
    ×
  </button>

  {/* Imagem */}
  <img
    src={dish.photo}
    alt={dish.name}
    className="w-full sm:w-80 h-64 sm:h-80 object-cover rounded-lg shrink-0"
  />

  {/* Conteúdo */}
  <div className="flex flex-1 flex-col gap-6 text-bg-peach">
    {/* Título */}
    <div>
      <h2 style={{marginTop:"15px"}} className="text-2xl sm:text-3xl font-black text-white leading-tight">
        {dish.name}
      </h2>
    </div>

    {/* Descrição */}
    <p className="text-sm leading-relaxed text-white/90 flex-1">
      {dish.description}
    </p>

    {/* Info adicional */}
    <div className="flex flex-col gap-2 text-sm text-white/80 border-t border-white/20 pt-4">
      <span className="font-semibold">Porção: {dish.serve}</span>
    </div>

    {/* Botão */}
    <Button
    style={{margin:"10px", padding:"5px"}}
      variant="secondary"
      className="self-end px-6 py-3 text-sm font-bold"
      onClick={handleAdd}
    >
      Adicionar - R$ {dish.price.toFixed(2).replace('.', ',')}
    </Button>
  </div>
</div>
      </div>

  )
}