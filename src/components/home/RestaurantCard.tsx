import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import type { Restaurant } from '../../types'
import { StarRating } from '../ui/StarRating'
import { Button } from '../ui/Button'

interface Props {
  restaurant: Restaurant
}

const Card = styled.article`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(230, 103, 103, 0.3);
  background-color: #fff;
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`

const CoverImage = styled.img`
  width: 100%;
  height: 256px;
  object-fit: cover;
`

const TagsOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 4px;
  padding: 8px;
`

const Tag = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.bgPeach};
  font-size: 12px;
  font-weight: 700;
  padding: 4px 12px;
`

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 12px;
  padding: 16px;
`

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`

const RestaurantName = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1.2;
`

const Description = styled.p`
  flex: 1;
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.8;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export function RestaurantCard({ restaurant }: Props) {
  const navigate = useNavigate()

  return (
    <Card>
      <ImageWrapper>
        <CoverImage src={restaurant.coverImage} alt={restaurant.name} />
        <TagsOverlay>
          {restaurant.tags.map((tag) => (
            <Tag key={tag.id}>{tag.name}</Tag>
          ))}
        </TagsOverlay>
      </ImageWrapper>
      <CardBody>
        <CardHeader>
          <RestaurantName>{restaurant.name}</RestaurantName>
          <StarRating value={restaurant.rating} />
        </CardHeader>
        <Description>{restaurant.description}</Description>
        <Button
          variant="outline"
          onClick={() => navigate(`/restaurante/${restaurant.id}`)}
          style={{ alignSelf: 'flex-start', fontSize: '12px', padding: '6px 12px' }}
        >
          Saiba mais
        </Button>
      </CardBody>
    </Card>
  )
}
