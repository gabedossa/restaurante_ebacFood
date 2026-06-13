import type { Restaurant } from '../types'

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: 'La Dolce Vita Trattoria',
    description:
      'Autêntica culinária italiana no coração da cidade. Massas artesanais, pizzas napolitanas e sobremesas irresistíveis.',
    logo: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=80&h=80&fit=crop',
    coverImage:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=400&fit=crop',
    rating: 4.8,
    tags: [{ id: 1, name: 'Pizza' }, { id: 2, name: 'Italiana' }],
    menu: [
      {
        id: 1,
        name: 'Pizza Margherita',
        description:
          'A clássica pizza italiana com molho de tomate San Marzano, mozzarella de búfala e manjericão fresco.',
        price: 49.9,
        photo:
          'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
        serve: 'Serve 2 pessoas',
      },
      {
        id: 2,
        name: 'Fettuccine Alfredo',
        description:
          'Massa artesanal ao molho cremoso de queijo parmesão, manteiga e noz-moscada.',
        price: 44.9,
        photo:
          'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop',
        serve: 'Serve 1 pessoa',
      },
      {
        id: 3,
        name: 'Risotto ai Funghi',
        description:
          'Risoto cremoso com mix de cogumelos frescos, vinho branco e queijo parmesão.',
        price: 54.9,
        photo:
          'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop',
        serve: 'Serve 1 pessoa',
      },
      {
        id: 4,
        name: 'Lasagna Bolognese',
        description:
          'Lasanha tradicional com ragù de carne, molho béchamel e queijos selecionados.',
        price: 52.9,
        photo:
          'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=300&fit=crop',
        serve: 'Serve 2 pessoas',
      },
      {
        id: 5,
        name: 'Tiramisu',
        description:
          'Sobremesa clássica italiana com camadas de biscoito champagne, café espresso e creme de mascarpone.',
        price: 22.9,
        photo:
          'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
        serve: 'Serve 1 pessoa',
      },
      {
        id: 6,
        name: 'Bruschetta al Pomodoro',
        description:
          'Torradas de pão ciabatta com tomate fresco, alho, azeite extra virgem e manjericão.',
        price: 18.9,
        photo:
          'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop',
        serve: 'Serve 2 pessoas',
      },
    ],
  },
  {
    id: 2,
    name: 'Sakura Japanese Cuisine',
    description:
      'Experiência gastronômica japonesa autêntica. Sushis, sashimis e pratos quentes preparados com ingredientes selecionados.',
    logo: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=80&h=80&fit=crop',
    coverImage:
      'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1200&h=400&fit=crop',
    rating: 4.9,
    tags: [{ id: 3, name: 'Japonesa' }, { id: 4, name: 'Sushi' }],
    menu: [
      {
        id: 7,
        name: 'Combinado Sakura (20 peças)',
        description:
          'Seleção especial com niguiris, uramakis e temakis do chefe. Inclui molho shoyu e gengibre.',
        price: 89.9,
        photo:
          'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=400&h=300&fit=crop',
        serve: 'Serve 2 pessoas',
      },
      {
        id: 8,
        name: 'Ramen Tonkotsu',
        description:
          'Caldo rico de osso de porco com macarrão artesanal, ovo marinado, chashu e nori.',
        price: 45.9,
        photo:
          'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
        serve: 'Serve 1 pessoa',
      },
      {
        id: 9,
        name: 'Tempura de Camarão',
        description:
          'Camarões empanados em massa leve e crocante servidos com molho tentsuyu.',
        price: 52.9,
        photo:
          'https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=400&h=300&fit=crop',
        serve: 'Serve 1 pessoa',
      },
    ],
  },
  {
    id: 3,
    name: 'Le Petit Bistro',
    description:
      'Cozinha francesa clássica em ambiente acolhedor. Croissants, crêpes e pratos tradicionais da gastronomia francesa.',
    logo: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=80&h=80&fit=crop',
    coverImage:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=400&fit=crop',
    rating: 4.7,
    tags: [{ id: 5, name: 'Francesa' }, { id: 6, name: 'Bistrô' }],
    menu: [
      {
        id: 10,
        name: 'Croque Monsieur',
        description:
          'Sanduíche quente clássico francês com presunto, queijo gruyère e molho béchamel.',
        price: 32.9,
        photo:
          'https://images.unsplash.com/photo-1528736235302-52922df5c122?w=400&h=300&fit=crop',
        serve: 'Serve 1 pessoa',
      },
      {
        id: 11,
        name: 'Bouillabaisse',
        description:
          'Tradicional sopa de peixe provençal com frutos do mar, açafrão e rouille.',
        price: 67.9,
        photo:
          'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
        serve: 'Serve 2 pessoas',
      },
      {
        id: 12,
        name: 'Crème Brûlée',
        description:
          'Creme de baunilha com casquinha de açúcar caramelizado na hora.',
        price: 24.9,
        photo:
          'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400&h=300&fit=crop',
        serve: 'Serve 1 pessoa',
      },
    ],
  },
  {
    id: 4,
    name: 'Churrascaria Gaúcha',
    description:
      'A melhor carne do sul do Brasil. Cortes nobres na brasa, acompanhamentos tradicionais e muito chimarrão.',
    logo: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=80&h=80&fit=crop',
    coverImage:
      'https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&h=400&fit=crop',
    rating: 4.6,
    tags: [{ id: 7, name: 'Churrasco' }, { id: 8, name: 'Brasileira' }],
    menu: [
      {
        id: 13,
        name: 'Picanha na Brasa',
        description:
          'Corte nobre de picanha grelhada na brasa com sal grosso, acompanha farofa e vinagrete.',
        price: 89.9,
        photo:
          'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop',
        serve: 'Serve 2 pessoas',
      },
      {
        id: 14,
        name: 'Costela Gaúcha',
        description:
          'Costela bovina assada lentamente por 12 horas com tempero especial da casa.',
        price: 75.9,
        photo:
          'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
        serve: 'Serve 2 pessoas',
      },
    ],
  },
]
