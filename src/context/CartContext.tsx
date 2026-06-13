import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { CartItem, CheckoutStep, Dish, OrderConfirmation } from '../types'

interface CartContextData {
  items: CartItem[]
  isOpen: boolean
  step: CheckoutStep
  confirmation: OrderConfirmation | null
  totalItems: number
  totalPrice: number
  addItem: (dish: Dish) => void
  removeItem: (dishId: number) => void
  openCart: () => void
  closeCart: () => void
  setStep: (step: CheckoutStep) => void
  setConfirmation: (data: OrderConfirmation) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState<CheckoutStep>('cart')
  const [confirmation, setConfirmation] = useState<OrderConfirmation | null>(null)

  const totalItems = items.reduce((acc, i) => acc + i.quantity, 0)
  const totalPrice = items.reduce((acc, i) => acc + i.dish.price * i.quantity, 0)

  function addItem(dish: Dish) {
    setItems((prev) => {
      const existing = prev.find((i) => i.dish.id === dish.id)
      if (existing) {
        return prev.map((i) =>
          i.dish.id === dish.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { dish, quantity: 1 }]
    })
  }

  function removeItem(dishId: number) {
    setItems((prev) => prev.filter((i) => i.dish.id !== dishId))
  }

  function clearCart() {
    setItems([])
    setStep('cart')
    setConfirmation(null)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        step,
        confirmation,
        totalItems,
        totalPrice,
        addItem,
        removeItem,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        setStep,
        setConfirmation,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
