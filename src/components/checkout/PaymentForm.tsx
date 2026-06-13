import type { PaymentInfo } from '../../types'
import { useCart } from '../../context/CartContext'
import { useForm } from '../../hooks/useForm'
import { Button } from '../ui/Button'

const INITIAL: PaymentInfo = {
  name: '',
  cardNumber: '',
  cardCode: '',
  expiryMonth: '',
  expiryYear: '',
}

export function PaymentForm() {
  const { setStep, setConfirmation, clearCart } = useCart()
  const { values, handleChange } = useForm<PaymentInfo>(INITIAL)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const orderId = Math.random().toString(36).slice(2, 10).toUpperCase()
    setConfirmation({ orderId, deliveryTime: '20 minutos' })
    setStep('confirmation')
    clearCart()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <h2 className="text-white font-bold text-base mb-1">
        Pagamento — Valor no cartão
      </h2>

      <label className="flex flex-col gap-1">
        <span className="text-white text-xs">Nome no cartão</span>
        <input
          name="name"
          value={values.name}
          onChange={handleChange}
          required
          className="bg-white text-sm px-3 py-2 outline-none"
          placeholder="Nome como no cartão"
        />
      </label>

      <div className="grid grid-cols-3 gap-2">
        <label className="col-span-2 flex flex-col gap-1">
          <span className="text-white text-xs">Número do cartão</span>
          <input
            name="cardNumber"
            value={values.cardNumber}
            onChange={handleChange}
            required
            maxLength={19}
            className="bg-white text-sm px-3 py-2 outline-none"
            placeholder="0000 0000 0000 0000"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-white text-xs">CVV</span>
          <input
            name="cardCode"
            value={values.cardCode}
            onChange={handleChange}
            required
            maxLength={3}
            className="bg-white text-sm px-3 py-2 outline-none"
            placeholder="123"
          />
        </label>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <label className="flex flex-col gap-1">
          <span className="text-white text-xs">Mês de vencimento</span>
          <input
            name="expiryMonth"
            value={values.expiryMonth}
            onChange={handleChange}
            required
            maxLength={2}
            className="bg-white text-sm px-3 py-2 outline-none"
            placeholder="MM"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-white text-xs">Ano de vencimento</span>
          <input
            name="expiryYear"
            value={values.expiryYear}
            onChange={handleChange}
            required
            maxLength={4}
            className="bg-white text-sm px-3 py-2 outline-none"
            placeholder="AAAA"
          />
        </label>
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <Button
          type="submit"
          variant="outline"
          fullWidth
          className="border-white text-white hover:bg-white hover:text-primary"
        >
          Finalizar pagamento
        </Button>
        <Button
          type="button"
          variant="outline"
          fullWidth
          className="border-white text-white hover:bg-white hover:text-primary"
          onClick={() => setStep('delivery')}
        >
          Voltar para a entrega
        </Button>
      </div>
    </form>
  )
}
