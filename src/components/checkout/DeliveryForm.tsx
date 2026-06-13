import { useForm } from '../../hooks/useForm'
import type { DeliveryInfo } from '../../types'
import { useCart } from '../../context/CartContext'
import { Button } from '../ui/Button'

const INITIAL: DeliveryInfo = {
  receiver: '',
  address: '',
  city: '',
  zipCode: '',
  number: '',
  complement: '',
}

export function DeliveryForm() {
  const { setStep } = useCart()
  const { values, handleChange } = useForm<DeliveryInfo>(INITIAL)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStep('payment')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <h2 className="text-white font-bold text-base mb-1">Entrega</h2>

      <label className="flex flex-col gap-1">
        <span className="text-white text-xs">Quem irá receber</span>
        <input
          name="receiver"
          value={values.receiver}
          onChange={handleChange}
          required
          className="bg-white text-sm px-3 py-2 outline-none"
          placeholder="Nome completo"
        />
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-white text-xs">Endereço</span>
        <input
          name="address"
          value={values.address}
          onChange={handleChange}
          required
          className="bg-white text-sm px-3 py-2 outline-none"
          placeholder="Rua, Avenida..."
        />
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-white text-xs">Cidade</span>
        <input
          name="city"
          value={values.city}
          onChange={handleChange}
          required
          className="bg-white text-sm px-3 py-2 outline-none"
          placeholder="Cidade"
        />
      </label>

      <div className="grid grid-cols-2 gap-2">
        <label className="flex flex-col gap-1">
          <span className="text-white text-xs">CEP</span>
          <input
            name="zipCode"
            value={values.zipCode}
            onChange={handleChange}
            required
            className="bg-white text-sm px-3 py-2 outline-none"
            placeholder="00000-000"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-white text-xs">Número</span>
          <input
            name="number"
            value={values.number}
            onChange={handleChange}
            required
            className="bg-white text-sm px-3 py-2 outline-none"
            placeholder="Nº"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1">
        <span className="text-white text-xs">Complemento (opcional)</span>
        <input
          name="complement"
          value={values.complement}
          onChange={handleChange}
          className="bg-white text-sm px-3 py-2 outline-none"
          placeholder="Apto, bloco..."
        />
      </label>

      <div className="flex flex-col gap-2 mt-2">
        <Button
          type="submit"
          variant="outline"
          fullWidth
          className="border-white text-white hover:bg-white hover:text-primary"
        >
          Continuar com o pagamento
        </Button>
        <Button
          type="button"
          variant="outline"
          fullWidth
          className="border-white text-white hover:bg-white hover:text-primary"
          onClick={() => setStep('cart')}
        >
          Voltar para o carrinho
        </Button>
      </div>
    </form>
  )
}
