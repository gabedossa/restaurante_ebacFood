import { Link } from 'react-router-dom'
import { ShoppingCart, ArrowLeft } from 'lucide-react'
import styled from 'styled-components'
import { useCart } from '../../hooks/useCart'
import { Logo } from '../ui/Logo'
import { Container } from '../ui/Container'

interface Props {
  showCart?: boolean
}

const ProfileHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.bgPeach};
  border-bottom: 1px solid rgba(226, 196, 171, 0.4);
  height: 50px;
  padding: 0 10px;
  display: flex;
  align-items: center;
`

const ProfileContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  transition: opacity 0.2s;
  &:hover { opacity: 0.8; }
`

const CartButton = styled.button`
  position: relative;
  cursor: pointer;
  background: none;
  border: none;
  padding: 4px;
  color: ${({ theme }) => theme.colors.primary};
  transition: opacity 0.2s;
  &:hover { opacity: 0.8; }
`

const Badge = styled.span`
  position: absolute;
  top: -4px;
  right: -4px;
  width: 20px;
  height: 20px;
  background-color: #ef4444;
  color: white;
  font-size: 11px;
  font-weight: 700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HomeHeader = styled.header`
  position: relative;
  background-color: ${({ theme }) => theme.colors.bgPeach};
  padding: 40px 0;
`

const HomeCartButton = styled(CartButton)`
  position: absolute;
  top: 10px;
  right: 20px;
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  text-align: center;
`

const HeroTitle = styled.h1`
  font-size: 36px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1.2;
  max-width: 600px;
`

export function Header({ showCart = false }: Props) {
  const { openCart, totalItems } = useCart()

  if (showCart) {
    return (
      <ProfileHeader>
        <ProfileContainer>
          <NavLink to="/">
            <ArrowLeft size={16} />
            Restaurantes
          </NavLink>
          <Link to="/"><Logo size="sm" /></Link>
          <CartButton onClick={openCart} aria-label={`Abrir carrinho com ${totalItems} item(ns)`}>
            <ShoppingCart size={24} />
            {totalItems > 0 && <Badge>{totalItems}</Badge>}
          </CartButton>
        </ProfileContainer>
      </ProfileHeader>
    )
  }

  return (
    <HomeHeader>
      <HomeCartButton onClick={openCart} aria-label={`Abrir carrinho com ${totalItems} item(ns)`}>
        <ShoppingCart size={24} />
        {totalItems > 0 && <Badge>{totalItems}</Badge>}
      </HomeCartButton>
      <Container>
        <HeroContent>
          <Logo size="lg" />
          <HeroTitle>
            Viva experiências gastronômicas<br />no conforto da sua casa
          </HeroTitle>
        </HeroContent>
      </Container>
    </HomeHeader>
  )
}
