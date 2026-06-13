import { useCart } from '../../context/CartContext'
import { CartItem } from './CartItem'
import { Button } from '../ui/Button'

export function Cart() {
  const { items, isOpen, closeCart, totalPrice, setStep } = useCart()

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={closeCart}
      />

      <aside className="fixed top-0 right-0 h-full w-80 bg-primary z-50 flex flex-col shadow-2xl">
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <p className="text-white text-sm text-center mt-8">
              O carrinho está vazio. Adicione itens para continuar.
            </p>
          ) : (
            <div className="flex flex-col">
              {items.map((item) => (
                <CartItem key={item.dish.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-white/20">
            <div className="flex justify-between text-white font-bold mb-4">
              <span>Valor total</span>
              <span>R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
            </div>
            <Button
              variant="outline"
              fullWidth
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => setStep('delivery')}
            >
              Continuar com a entrega
            </Button>
          </div>
        )}
      </aside>
    </>
  )
}
