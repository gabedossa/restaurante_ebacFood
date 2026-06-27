# efood — Plataforma de Delivery Gastronômico

Aplicação web de delivery de comida desenvolvida como projeto do curso EBAC. Permite explorar restaurantes, visualizar cardápios, adicionar pratos ao carrinho e simular um checkout completo com entrega e pagamento.

---

## Funcionalidades

- Listagem de restaurantes consumida via API REST
- Página de perfil de cada restaurante com cardápio completo
- Modal de detalhes do prato
- Carrinho lateral com gerenciamento de itens
- Fluxo de checkout em 3 etapas: entrega → pagamento → confirmação
- Avaliação por estrelas em cada restaurante
- Indicação de restaurantes em destaque
- Design responsivo

---

## Tecnologias

| Tecnologia | Versão | Uso |
| --- | --- | --- |
| React | 19 | Interface e componentização |
| TypeScript | 6 | Tipagem estática |
| Vite | 8 | Build e dev server |
| Styled Components | 6 | Estilização com CSS-in-JS |
| React Router | 7 | Navegação entre páginas |
| Lucide React | — | Ícones |

---

## Estrutura do Projeto

```text
src/
├── components/
│   ├── cart/
│   │   ├── Cart.tsx           # Sidebar do carrinho
│   │   └── CartItem.tsx       # Item individual do carrinho
│   ├── checkout/
│   │   ├── Checkout.tsx       # Orquestrador do fluxo de checkout
│   │   ├── DeliveryForm.tsx   # Etapa de endereço de entrega
│   │   ├── PaymentForm.tsx    # Etapa de pagamento
│   │   └── Confirmation.tsx   # Tela de confirmação do pedido
│   ├── home/
│   │   └── RestaurantCard.tsx # Card de restaurante na listagem
│   ├── layout/
│   │   ├── Header.tsx         # Header (variantes: home e perfil)
│   │   └── Footer.tsx         # Rodapé
│   ├── restaurant/
│   │   ├── RestaurantHero.tsx # Banner do perfil do restaurante
│   │   ├── DishCard.tsx       # Card de prato no cardápio
│   │   └── DishModal.tsx      # Modal de detalhes do prato
│   └── ui/
│       ├── Button.tsx         # Botão reutilizável (variantes: primary, secondary, outline)
│       ├── Container.tsx      # Wrapper de largura máxima centralizado
│       ├── Logo.tsx           # Logo efood com ícone
│       ├── StarRating.tsx     # Componente de avaliação por estrelas
│       └── Tag.tsx            # Tag de categoria
├── context/
│   ├── cartState.ts           # Definição do contexto e interface
│   └── CartContext.tsx        # Provider do carrinho
├── hooks/
│   ├── useCart.ts             # Acesso ao contexto do carrinho
│   ├── useForm.ts             # Gerenciamento de formulários controlados
│   ├── useRestaurant.ts       # Fetch de um restaurante por ID
│   └── useRestaurants.ts      # Fetch da listagem de restaurantes
├── pages/
│   ├── Home.tsx               # Página inicial — listagem
│   └── RestaurantProfile.tsx  # Página de perfil do restaurante
├── services/
│   └── api.ts                 # Funções de fetch e mapeamento da API
├── styles/
│   ├── theme.ts               # Tema centralizado (cores, fontes, breakpoints)
│   └── styled.d.ts            # Augmentation do DefaultTheme para TypeScript
├── types/
│   └── index.ts               # Interfaces TypeScript globais
└── data/
    └── restaurants.ts         # Dados locais de fallback (legado)
```

---

## API

Os dados são consumidos da API pública do curso EBAC:

```text
Base URL: https://api-ebac.vercel.app/api/efood
```

| Endpoint | Método | Descrição |
| --- | --- | --- |
| `/restaurantes` | GET | Lista todos os restaurantes |
| `/restaurantes/:id` | GET | Retorna um restaurante pelo ID |

A camada de serviço em `src/services/api.ts` realiza o mapeamento dos campos da API (em português: `titulo`, `cardapio`, `porcao`, etc.) para as interfaces internas do projeto.

---

## Como Rodar

### Pré-requisitos

- Node.js 18+
- npm

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview do Build

```bash
npm run preview
```

---

## Fluxo do Carrinho

O estado global do carrinho é gerenciado via **React Context** (`CartContext`) e exposto pelo hook `useCart`. A estilização é feita com **Styled Components**, usando um tema centralizado em `src/styles/theme.ts` injetado pelo `ThemeProvider` no `App.tsx`. O fluxo de checkout segue as etapas:

```text
Carrinho → Dados de Entrega → Pagamento → Confirmação
```

Cada etapa é controlada pelo campo `step` no contexto, e a transição entre elas é feita pelo `setStep`.

---

## Projeto desenvolvido para o curso EBAC — Engenheiro Front-end
