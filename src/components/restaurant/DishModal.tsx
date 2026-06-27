import { useEffect } from 'react'
import styled from 'styled-components'
import type { Dish } from '../../types'
import { useCart } from '../../hooks/useCart'
import { Button } from '../ui/Button'

interface Props {
  dish: Dish | null
  onClose: () => void
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  padding: 16px;
`

const ModalBox = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  max-width: 672px;
  width: 100%;
  padding: 32px;
  display: flex;
  gap: 32px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  overflow: hidden;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: background-color 0.2s;
  &:hover { background-color: rgba(255, 255, 255, 0.3); }
`

const DishImage = styled.img`
  width: 100%;
  height: 256px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;

  @media (min-width: 640px) {
    width: 320px;
    height: 320px;
  }
`

const ModalContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;
  color: ${({ theme }) => theme.colors.bgPeach};
`

const DishName = styled.h2`
  font-size: 28px;
  font-weight: 900;
  color: #fff;
  line-height: 1.2;
  margin-top: 15px;
`

const DishDescription = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  flex: 1;
`

const ServeInfo = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 16px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
`

const AddButton = styled(Button)`
  align-self: flex-end;
`

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
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Fechar">×</CloseButton>
        <DishImage src={dish.photo} alt={dish.name} />
        <ModalContent>
          <DishName>{dish.name}</DishName>
          <DishDescription>{dish.description}</DishDescription>
          <ServeInfo>Porção: {dish.serve}</ServeInfo>
          <AddButton variant="secondary" onClick={handleAdd} style={{ padding: '10px 24px', fontSize: '14px' }}>
            Adicionar — R$ {dish.price.toFixed(2).replace('.', ',')}
          </AddButton>
        </ModalContent>
      </ModalBox>
    </Overlay>
  )
}
