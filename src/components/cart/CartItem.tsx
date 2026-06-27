import styled from 'styled-components'
import type { CartItem as CartItemType } from '../../types'
import { useCart } from '../../hooks/useCart'

interface Props {
  item: CartItemType
}

const ItemWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 12px;
  background-color: ${({ theme }) => theme.colors.bgPeach};
  padding: 8px;
`

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  flex-shrink: 0;
`

const ItemInfo = styled.div`
  flex: 1;
  min-width: 0;
  padding-right: 24px;
  color: ${({ theme }) => theme.colors.primary};
`

const ItemName = styled.p`
  font-size: 14px;
  font-weight: 900;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const ItemPrice = styled.p`
  font-size: 12px;
  font-weight: 700;
  margin-top: 8px;
`

const RemoveButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  padding: 4px;
  transition: opacity 0.2s;
  &:hover { opacity: 0.8; }
`

export function CartItem({ item }: Props) {
  const { removeItem } = useCart()
  const { dish, quantity } = item

  return (
    <ItemWrapper>
      <ItemImage src={dish.photo} alt={dish.name} />
      <ItemInfo>
        <ItemName>{dish.name}</ItemName>
        <ItemPrice>{quantity}x — R$ {(dish.price * quantity).toFixed(2).replace('.', ',')}</ItemPrice>
      </ItemInfo>
      <RemoveButton onClick={() => removeItem(dish.id)} aria-label={`Remover ${dish.name}`}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>
      </RemoveButton>
    </ItemWrapper>
  )
}
