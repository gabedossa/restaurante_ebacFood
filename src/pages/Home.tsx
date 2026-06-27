import styled from 'styled-components'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { RestaurantCard } from '../components/home/RestaurantCard'
import { Container } from '../components/ui/Container'
import { useRestaurants } from '../hooks/useRestaurants'

const Main = styled.main`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bgLight};
  padding: 40px 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin: 15px 20px;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
`

const StatusMessage = styled.p<{ $error?: boolean }>`
  text-align: center;
  color: ${({ theme, $error }) => ($error ? '#ef4444' : theme.colors.primary)};
`

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export function Home() {
  const { data: restaurants, loading, error } = useRestaurants()

  return (
    <PageWrapper>
      <Header />
      <Main>
        <Container>
          {loading && <StatusMessage>Carregando restaurantes...</StatusMessage>}
          {error && <StatusMessage $error>{error}</StatusMessage>}
          {!loading && !error && (
            <Grid>
              {restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </Grid>
          )}
        </Container>
      </Main>
      <Footer />
    </PageWrapper>
  )
}
