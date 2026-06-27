import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import type { Dish } from '../types'
import { Header } from '../components/layout/Header'
import { RestaurantHero } from '../components/restaurant/RestaurantHero'
import { Footer } from '../components/layout/Footer'
import { DishCard } from '../components/restaurant/DishCard'
import { DishModal } from '../components/restaurant/DishModal'
import { Container } from '../components/ui/Container'
import { useRestaurant } from '../hooks/useRestaurant'

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bgLight};
  padding: 32px 0;
`

const DishGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin: 15px 20px;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const CenterMessage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.bgLight};
`

const ErrorText = styled.p<{ $error?: boolean }>`
  color: ${({ $error }) => ($error ? '#ef4444' : 'inherit')};
`

const BackLink = styled.button`
  background: none;
  border: none;
  font-weight: 700;
  text-decoration: underline;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
`

export function RestaurantProfile() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null)
  const { data: restaurant, loading, error } = useRestaurant(Number(id))

  if (loading) {
    return (
      <PageWrapper>
        <Header showCart={true} />
        <CenterMessage>
          <ErrorText>Carregando...</ErrorText>
        </CenterMessage>
        <Footer />
      </PageWrapper>
    )
  }

  if (error || !restaurant) {
    return (
      <CenterMessage>
        <ErrorText $error>{error ?? 'Restaurante não encontrado.'}</ErrorText>
        <BackLink onClick={() => navigate('/')}>Voltar</BackLink>
      </CenterMessage>
    )
  }

  return (
    <PageWrapper>
      <Header showCart={true} />
      <RestaurantHero restaurant={restaurant} />
      <Main>
        <Container>
          <DishGrid>
            {restaurant.menu.map((dish) => (
              <DishCard key={dish.id} dish={dish} onSelect={setSelectedDish} />
            ))}
          </DishGrid>
        </Container>
      </Main>
      <Footer />
      <DishModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
    </PageWrapper>
  )
}
