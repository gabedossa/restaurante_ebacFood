import styled from 'styled-components'
import type { Dish } from '../../types'
import { Button } from '../ui/Button'

interface Props {
  dish: Dish
  onSelect: (dish: Dish) => void
}

const Card = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`

const DishImage = styled.img`
  width: 100%;
  height: 192px;
  object-fit: cover;
`

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 12px;
  padding: 16px;
  color: ${({ theme }) => theme.colors.bgPeach};
`

const DishHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
`

const DishName = styled.h3`
  flex: 1;
  font-size: 16px;
  font-weight: 900;
  line-height: 1.3;
`

const DishPrice = styled.span`
  flex-shrink: 0;
  font-size: 16px;
  font-weight: 700;
  white-space: nowrap;
`

const DishDescription = styled.p`
  flex: 1;
  font-size: 12px;
  line-height: 1.6;
  opacity: 0.9;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
`

export function DishCard({ dish, onSelect }: Props) {
  return (
    <Card>
      <DishImage src={dish.photo} alt={dish.name} />
      <CardBody>
        <DishHeader>
          <DishName>{dish.name}</DishName>
          <DishPrice>R$ {dish.price.toFixed(2).replace('.', ',')}</DishPrice>
        </DishHeader>
        <DishDescription>{dish.description}</DishDescription>
        <CardFooter>
          <Button variant="secondary" onClick={() => onSelect(dish)} style={{ fontSize: '12px', padding: '8px' }}>
            Adicionar ao carrinho
          </Button>
        </CardFooter>
      </CardBody>
    </Card>
  )
}
