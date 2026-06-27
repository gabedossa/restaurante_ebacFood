import styled from 'styled-components'
import { useForm } from '../../hooks/useForm'
import type { DeliveryInfo } from '../../types'
import { useCart } from '../../hooks/useCart'
import { Button } from '../ui/Button'

const INITIAL: DeliveryInfo = {
  receiver: '', address: '', city: '', zipCode: '', number: '', complement: '',
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

export function DeliveryForm() {
  const { setStep } = useCart()
  const { values, handleChange } = useForm<DeliveryInfo>(INITIAL)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStep('payment')
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <FormTitle>Endereço de entrega</FormTitle>

      <FieldLabel>
        <FieldName>Quem irá receber</FieldName>
        <Input name="receiver" value={values.receiver} onChange={handleChange} required placeholder="Nome do destinatário" />
      </FieldLabel>

      <FieldLabel>
        <FieldName>Endereço</FieldName>
        <Input name="address" value={values.address} onChange={handleChange} required placeholder="Rua, Avenida, Logradouro" />
      </FieldLabel>

      <FieldLabel>
        <FieldName>Cidade</FieldName>
        <Input name="city" value={values.city} onChange={handleChange} required placeholder="Cidade" />
      </FieldLabel>

      <Row>
        <FieldLabel>
          <FieldName>CEP</FieldName>
          <Input name="zipCode" value={values.zipCode} onChange={handleChange} required placeholder="00000-000" />
        </FieldLabel>
        <FieldLabel>
          <FieldName>Número</FieldName>
          <Input name="number" value={values.number} onChange={handleChange} required placeholder="Nº" />
        </FieldLabel>
      </Row>

      <FieldLabel>
        <FieldName>Complemento (opcional)</FieldName>
        <Input name="complement" value={values.complement} onChange={handleChange} placeholder="Apto, bloco, referência" />
      </FieldLabel>

      <Actions>
        <Button type="submit" variant="secondary" fullWidth style={{ padding: '10px', fontSize: '12px' }}>
          Continuar com o pagamento
        </Button>
        <Button type="button" variant="secondary" fullWidth onClick={() => setStep('cart')}
          style={{ padding: '10px', fontSize: '12px', backgroundColor: 'rgba(255,238,219,0.8)', border: 'none' }}>
          Voltar para o carrinho
        </Button>
      </Actions>
    </form>
  )
}
