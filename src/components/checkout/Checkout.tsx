import styled from 'styled-components'
import { useCart } from '../../hooks/useCart'
import { Cart } from '../cart/Cart'
import { DeliveryForm } from './DeliveryForm'
import { PaymentForm } from './PaymentForm'
import { Confirmation } from './Confirmation'

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 40;
`

const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  max-width: 360px;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 50;
  overflow-y: auto;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.2);
  padding: 20px;
`

export function Checkout() {
  const { isOpen, step } = useCart()

  if (!isOpen) return null
  if (step === 'cart') return <Cart />

  return (
    <>
      <Overlay />
      <Sidebar>
        {step === 'delivery' && <DeliveryForm />}
        {step === 'payment' && <PaymentForm />}
        {step === 'confirmation' && <Confirmation />}
      </Sidebar>
    </>
  )
}
