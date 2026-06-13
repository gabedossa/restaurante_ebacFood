import { useCart } from '../../context/CartContext'
import { Button } from '../ui/Button'

export function Confirmation() {
  const { confirmation, closeCart, setStep } = useCart()

  if (!confirmation) return null

  function handleClose() {
    setStep('cart')
    closeCart()
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-white font-bold text-base">
        Pedido realizado — #{confirmation.orderId}
      </h2>
      <p className="text-white text-sm leading-relaxed">
        Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
      </p>
      <p className="text-white text-sm leading-relaxed">
        Gostaríamos de ressaltar que nossos entregadores não são autorizados a realizar cobranças extras.
      </p>
      <p className="text-white text-sm leading-relaxed">
        Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </p>
      <p className="text-white text-sm leading-relaxed">
        Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
      </p>
      <Button
        variant="outline"
        fullWidth
        className="border-white text-white hover:bg-white hover:text-primary mt-2"
        onClick={handleClose}
      >
        Concluir
      </Button>
    </div>
  )
}
