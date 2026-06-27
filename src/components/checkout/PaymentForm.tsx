import styled from 'styled-components'
import type { PaymentInfo } from '../../types'
import { useCart } from '../../hooks/useCart'
import { useForm } from '../../hooks/useForm'
import { Button } from '../ui/Button'

const INITIAL: PaymentInfo = {
  name: '', cardNumber: '', cardCode: '', expiryMonth: '', expiryYear: '',
}

const FormTitle = styled.h2`
  font-size: 16px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.bgPeach};
  margin-bottom: 8px;
`

const FieldLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const FieldName = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.bgPeach};
`

const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.bgPeach};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 14px;
  padding: 8px 12px;
  border: none;
  border-radius: 0;
  outline: none;
  &::placeholder { opacity: 0.5; }
`

const Row2 = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 12px;
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
`

export function PaymentForm() {
  const { setStep, completeOrder, totalPrice } = useCart()
  const { values, handleChange } = useForm<PaymentInfo>(INITIAL)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const orderId = Math.random().toString(36).slice(2, 10).toUpperCase()
    completeOrder({ orderId, deliveryTime: '20 minutos' })
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <FormTitle>Pagamento — R$ {totalPrice.toFixed(2).replace('.', ',')}</FormTitle>

      <FieldLabel>
        <FieldName>Nome no cartão</FieldName>
        <Input name="name" value={values.name} onChange={handleChange} required placeholder="Como impresso no cartão" />
      </FieldLabel>

      <Row2>
        <FieldLabel>
          <FieldName>Número do cartão</FieldName>
          <Input name="cardNumber" value={values.cardNumber} onChange={handleChange} required maxLength={19} placeholder="0000 0000 0000 0000" />
        </FieldLabel>
        <FieldLabel>
          <FieldName>CVV</FieldName>
          <Input name="cardCode" value={values.cardCode} onChange={handleChange} required maxLength={3} placeholder="123" />
        </FieldLabel>
      </Row2>

      <Row>
        <FieldLabel>
          <FieldName>Mês de vencimento</FieldName>
          <Input name="expiryMonth" value={values.expiryMonth} onChange={handleChange} required maxLength={2} placeholder="MM" />
        </FieldLabel>
        <FieldLabel>
          <FieldName>Ano de vencimento</FieldName>
          <Input name="expiryYear" value={values.expiryYear} onChange={handleChange} required maxLength={4} placeholder="AAAA" />
        </FieldLabel>
      </Row>

      <Actions>
        <Button type="submit" variant="secondary" fullWidth style={{ padding: '10px', fontSize: '12px' }}>
          Finalizar pagamento
        </Button>
        <Button type="button" variant="secondary" fullWidth onClick={() => setStep('delivery')}
          style={{ padding: '10px', fontSize: '12px', backgroundColor: 'rgba(255,238,219,0.8)', border: 'none' }}>
          Voltar para a entrega
        </Button>
      </Actions>
    </form>
  )
}
