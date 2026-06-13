export interface Tag {
  id: number
  name: string
}

export interface Dish {
  id: number
  name: string
  description: string
  price: number
  photo: string
  serve: string
}

export interface Restaurant {
  id: number
  name: string
  description: string
  logo: string
  coverImage: string
  rating: number
  tags: Tag[]
  menu: Dish[]
}

export interface CartItem {
  dish: Dish
  quantity: number
}

export type CheckoutStep = 'cart' | 'delivery' | 'payment' | 'confirmation'

export interface DeliveryInfo {
  receiver: string
  address: string
  city: string
  zipCode: string
  number: string
  complement: string
}

export interface PaymentInfo {
  name: string
  cardNumber: string
  cardCode: string
  expiryMonth: string
  expiryYear: string
}

export interface OrderConfirmation {
  orderId: string
  deliveryTime: string
}
