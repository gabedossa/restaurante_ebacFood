import styled from 'styled-components'
import type { Restaurant } from '../../types'

interface Props {
  restaurant: Restaurant
}

const HeroWrapper = styled.div`
  position: relative;
  height: 280px;
  width: 100%;
  overflow: hidden;
  background-color: #000;
`

const HeroImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
`

const HeroContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  max-width: 1152px;
  margin: 0 auto;
  padding: 24px 20px;
`

const CuisineTag = styled.span`
  color: #fff;
  font-size: 16px;
  font-style: italic;
  font-weight: 300;
`

const RestaurantName = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: 900;
  line-height: 1.2;
`

export function RestaurantHero({ restaurant }: Props) {
  const cuisineTag =
    restaurant.tags.find((t) =>
      ['Italiana', 'Japonesa', 'Francesa', 'Brasileira', 'Portuguesa', 'Árabe', 'Vegano', 'Pizza'].includes(t.name)
    )?.name ?? restaurant.tags[0]?.name

  return (
    <HeroWrapper>
      <HeroImage src={restaurant.coverImage} alt={restaurant.name} />
      <HeroContent>
        {cuisineTag && <CuisineTag>{cuisineTag}</CuisineTag>}
        <RestaurantName>{restaurant.name}</RestaurantName>
      </HeroContent>
    </HeroWrapper>
  )
}
