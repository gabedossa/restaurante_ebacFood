import styled from 'styled-components'
import { useCart } from '../../hooks/useCart'
import { CartItem } from './CartItem'
import { Button } from '../ui/Button'

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
  display: flex;
  flex-direction: column;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.2);
  padding: 16px;
  padding-top: 40px;
`

const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`

const CartTitle = styled.h2`
  font-size: 20px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.bgPeach};
`

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.bgPeach};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover { opacity: 0.85; }
`

const ItemsList = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 16px;
`

const EmptyMessage = styled.p`
  padding: 16px;
  color: ${({ theme }) => theme.colors.bgPeach};
  font-size: 14px;
  text-align: center;
`

const CartFooter = styled.div`
  padding-top: 16px;
  border-top: 1px solid rgba(208, 91, 91, 0.3);
`

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.bgPeach};
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 16px;
`

export function Cart() {
  const { items, isOpen, closeCart, totalPrice, setStep } = useCart()

  if (!isOpen) return null

  return (
    <>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <CartHeader>
          <CartTitle>Carrinho</CartTitle>
          <CloseButton onClick={closeCart}>Fechar</CloseButton>
        </CartHeader>

        <ItemsList>
          {items.length === 0 ? (
            <EmptyMessage>O carrinho está vazio. Adicione itens para continuar.</EmptyMessage>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {items.map((item) => (
                <CartItem key={item.dish.id} item={item} />
              ))}
            </div>
          )}
        </ItemsList>

        {items.length > 0 && (
          <CartFooter>
            <TotalRow>
              <span>Valor total</span>
              <span>R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
            </TotalRow>
            <Button variant="secondary" fullWidth onClick={() => setStep('delivery')} style={{ padding: '10px', fontSize: '12px' }}>
              Continuar com a entrega
            </Button>
          </CartFooter>
        )}
      </Sidebar>
    </>
  )
}
