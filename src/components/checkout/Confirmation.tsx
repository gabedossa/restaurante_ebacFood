import styled from 'styled-components'
import { useCart } from '../../hooks/useCart'
import { Button } from '../ui/Button'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: ${({ theme }) => theme.colors.bgPeach};
`

const Title = styled.h2`
  font-size: 16px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.bgPeach};
  margin-bottom: 8px;
`

const Text = styled.p`
  font-size: 12px;
  line-height: 1.6;
  opacity: 0.9;
`

export function Confirmation() {
  const { confirmation, closeCart, clearCart } = useCart()

  if (!confirmation) return null

  function handleClose() {
    clearCart()
    closeCart()
  }

  return (
    <Wrapper>
      <Title>Pedido realizado — #{confirmation.orderId}</Title>
      <Text>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</Text>
      <Text>Gostaríamos de ressaltar que nossos entregadores não são autorizados a realizar cobranças extras.</Text>
      <Text>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</Text>
      <Text>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</Text>
      <Button variant="secondary" fullWidth onClick={handleClose} style={{ marginTop: '16px', padding: '10px', fontSize: '12px' }}>
        Concluir
      </Button>
    </Wrapper>
  )
}
