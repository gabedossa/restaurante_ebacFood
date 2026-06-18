import type { Restaurant } from '../types'

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: 'Bella Tavola Italiana',
    description:
      'A paixão dos nossos talentosos chefs pela cozinha italiana é evidente em cada prato, desde massas caseiras e risotos cremosos até suculentos frutos do mar e carnes tenras. Nosso menu é complementado por uma excelente carta de vinhos, cuidadosamente selecionados para harmonizar com a riqueza dos sabores italianos.',
    logo: 'https://api-ebac.vercel.app/efood/bella_tavola_italiana//capa.jpeg',
    coverImage: 'https://api-ebac.vercel.app/efood/bella_tavola_italiana//capa.jpeg',
    rating: 4.7,
    featured: true,
    tags: [{ id: 1, name: 'Italiana' }],
    menu: [
      {
        id: 1,
        name: 'Ravioli al Tartufo Nero',
        description:
          'O Ravioli al Tartufo Nero é um requintado prato de massa artesanal, que celebra os sabores ricos e terrosos da trufa negra italiana. Cada ravióli é cuidadosamente recheado com uma mistura saborosa de ricota fresca, parmesão e trufas negras raladas, proporcionando uma combinação de texturas suaves e aromas irresistíveis.',
        price: 69.9,
        photo: 'https://api-ebac.vercel.app/efood/bella_tavola_italiana//1.webp',
        serve: '1 a 2 pessoas',
      },
      {
        id: 2,
        name: 'Spaghetti alla Carbonara',
        description:
          'O Spaghetti alla Carbonara é um clássico prato italiano, feito com massa spaghetti al dente, coberto com um molho rico e cremoso à base de ovos, queijo pecorino romano, pancetta e pimenta-do-reino. Um prato saboroso e reconfortante que leva você diretamente para a Itália.',
        price: 56.9,
        photo: 'https://api-ebac.vercel.app/efood/bella_tavola_italiana//2.jpg',
        serve: '1 a 2 pessoas',
      },
      {
        id: 3,
        name: 'Risotto ai Funghi Porcini',
        description:
          'O Risotto ai Funghi Porcini é uma iguaria italiana feita com arroz Arborio de alta qualidade e cogumelos porcini secos, que são reidratados para liberar seu sabor intenso e terroso. O arroz é cozido lentamente em um caldo de legumes, com vinho branco e queijo parmesão, resultando em um risoto cremoso e delicioso.',
        price: 74.9,
        photo: 'https://api-ebac.vercel.app/efood/bella_tavola_italiana//3.jpg',
        serve: '1 a 2 pessoas',
      },
      {
        id: 4,
        name: 'Ossobuco alla Milanese',
        description:
          'O Ossobuco alla Milanese é um tradicional prato italiano, originário de Milão, que consiste em um suculento pedaço de vitela cozido lentamente em um molho à base de tomate, vinho branco e legumes. O prato é acompanhado por uma porção de polenta cremosa ou risoto alla Milanese, feito com açafrão.',
        price: 89.9,
        photo: 'https://api-ebac.vercel.app/efood/bella_tavola_italiana//4.jpg',
        serve: '1 a 2 pessoas',
      },
      {
        id: 5,
        name: 'Melanzane alla Parmigiana',
        description:
          'Melanzane alla Parmigiana é um delicioso prato à base de berinjelas, em camadas com molho de tomate caseiro, queijo muçarela e parmesão, assado até ficar dourado e borbulhante. Uma opção saborosa e reconfortante, perfeita para os amantes de legumes e queijo.',
        price: 62.9,
        photo: 'https://api-ebac.vercel.app/efood/bella_tavola_italiana//5.jpg',
        serve: '1 a 2 pessoas',
      },
      {
        id: 6,
        name: 'Frutti di Mare Linguine',
        description:
          'O Frutti di Mare Linguine é uma verdadeira celebração dos sabores do mar, apresentando uma generosa mistura de frutos do mar frescos, como camarões, lulas, mariscos e vieiras, combinados com massa linguine al dente e um saboroso molho de tomate e vinho branco.',
        price: 84.9,
        photo: 'https://api-ebac.vercel.app/efood/bella_tavola_italiana//6.jpg',
        serve: '1 a 2 pessoas',
      },
      {
        id: 7,
        name: 'Insalata Caprese',
        description:
          'A Insalata Caprese é uma refrescante e deliciosa salada italiana, feita com tomates maduros e suculentos, fatias frescas de mozzarella di bufala, folhas de manjericão e um fio de azeite extra virgem de oliva. Uma opção leve e saborosa, perfeita como entrada ou acompanhamento.',
        price: 49.9,
        photo: 'https://api-ebac.vercel.app/efood/bella_tavola_italiana//7.jpg',
        serve: '1 a 2 pessoas',
      },
    ],
  },
  {
    id: 2,
    name: 'Casa das Delícias Árabes',
    description:
      'A Casa das Delícias Árabes é um acolhedor e autêntico restaurante árabe, localizado no coração da cidade, que proporciona uma verdadeira experiência culinária do Oriente Médio. O ambiente é decorado com elementos tradicionais e exóticos, criando uma atmosfera convidativa e confortável.',
    logo: 'https://api-ebac.vercel.app/efood/casa_delicias_arabes//capa.jpeg',
    coverImage: 'https://api-ebac.vercel.app/efood/casa_delicias_arabes//capa.jpeg',
    rating: 4.8,
    featured: false,
    tags: [{ id: 2, name: 'Árabe' }],
    menu: [
      {
        id: 8,
        name: 'Mezze Platter',
        description:
          'O Mezze Platter é uma seleção de aperitivos tradicionais árabes, incluindo homus, babaganush, tabule, falafel, azeitonas e pão pita fresco. Uma combinação deliciosa de sabores e texturas que proporciona uma experiência gastronômica única e diversificada.',
        price: 49.9,
        photo: 'https://api-ebac.vercel.app/efood/casa_delicias_arabes//1.jpg',
        serve: '2 a 4 pessoas',
      },
      {
        id: 9,
        name: 'Kebab de Cordeiro',
        description:
          'O Kebab de Cordeiro é feito com pedaços de cordeiro marinados em especiarias e ervas, grelhados à perfeição e servidos com arroz basmati perfumado, salada e molho de iogurte. Uma opção saborosa e suculenta para quem aprecia a autêntica cozinha árabe.',
        price: 54.9,
        photo: 'https://api-ebac.vercel.app/efood/casa_delicias_arabes//2.jpg',
        serve: '1 a 2 pessoas',
      },
      {
        id: 10,
        name: 'Shawarma de Frango',
        description:
          'O Shawarma de Frango é preparado com finas fatias de frango marinadas em uma mistura de especiarias e grelhadas lentamente. Servido com pão pita, salada e molho tahine, este prato é uma opção saborosa e satisfatória para quem deseja saborear a autêntica comida de rua árabe.',
        price: 45.9,
        photo: 'https://api-ebac.vercel.app/efood/casa_delicias_arabes//3.webp',
        serve: '1 pessoa',
      },
    ],
  },
  {
    id: 3,
    name: 'Sakura Sushi House',
    description:
      'A Sakura Sushi House é um sofisticado e autêntico restaurante japonês que oferece uma experiência culinária imersiva, transportando os visitantes diretamente para a Terra do Sol Nascente. O ambiente elegante é complementado por um belo jardim japonês, criando uma atmosfera tranquila e serena.',
    logo: 'https://api-ebac.vercel.app/efood/sakura_sushi_house//capa.jpeg',
    coverImage: 'https://api-ebac.vercel.app/efood/sakura_sushi_house//capa.jpeg',
    rating: 4.9,
    featured: false,
    tags: [{ id: 3, name: 'Japonesa' }, { id: 4, name: 'Sushi' }],
    menu: [
      {
        id: 11,
        name: 'Sushi e Sashimi Combinado',
        description:
          'O Sushi e Sashimi Combinado é uma seleção de peças cuidadosamente elaboradas por nossos sushimen, incluindo atum, salmão, peixe branco, camarão e outros frutos do mar frescos. Acompanha uma porção de wasabi, gengibre em conserva e molho shoyu, para realçar os sabores naturais dos ingredientes.',
        price: 89.9,
        photo: 'https://api-ebac.vercel.app/efood/sakura_sushi_house//1.jpg',
        serve: '1 a 2 pessoas',
      },
      {
        id: 12,
        name: 'Tempura de Legumes e Camarão',
        description:
          'O Tempura de Legumes e Camarão é uma opção deliciosa e crocante, composta por uma variedade de legumes e camarões frescos empanados em uma massa leve e frita até a perfeição. Acompanha um molho tentsuyu, à base de dashi, shoyu e mirin, para dar um toque especial ao prato.',
        price: 79.9,
        photo: 'https://api-ebac.vercel.app/efood/sakura_sushi_house//2.jpg',
        serve: '1 a 2 pessoas',
      },
      {
        id: 13,
        name: 'Teishoku de Tonkatsu',
        description:
          'O Teishoku de Tonkatsu é um prato tradicional japonês composto por uma fatia de lombo de porco empanado e frito, servido com arroz japonês, misoshiru (sopa de pasta de soja) e tsukemono (legumes em conserva). O molho tonkatsu, à base de frutas e legumes, adiciona um sabor agridoce irresistível.',
        price: 69.9,
        photo: 'https://api-ebac.vercel.app/efood/sakura_sushi_house//3.jpg',
        serve: '1 pessoa',
      },
    ],
  },
  {
    id: 4,
    name: 'Cantinho Lusitano',
    description:
      'O Cantinho Lusitano é um charmoso e tradicional restaurante português, que celebra a rica herança culinária de Portugal. Neste aconchegante espaço, os visitantes podem desfrutar dos autênticos sabores portugueses, preparados com ingredientes frescos e de alta qualidade, respeitando as receitas clássicas.',
    logo: 'https://api-ebac.vercel.app/efood/cantinho_lusitano//capa.jpeg',
    coverImage: 'https://api-ebac.vercel.app/efood/cantinho_lusitano//capa.jpeg',
    rating: 4.8,
    featured: false,
    tags: [{ id: 5, name: 'Portuguesa' }],
    menu: [
      {
        id: 14,
        name: 'Bacalhau à Gomes de Sá',
        description:
          'O Bacalhau à Gomes de Sá é um prato tradicional português, que consiste em lascas de bacalhau cozido, batatas, cebola, alho, azeite e azeitonas pretas. Finalizado com salsa picada e ovos cozidos, este prato é um clássico da culinária portuguesa, que agrada a todos os paladares.',
        price: 74.9,
        photo: 'https://api-ebac.vercel.app/efood/cantinho_lusitano//1.jpeg',
        serve: '1 a 2 pessoas',
      },
      {
        id: 15,
        name: 'Arroz de Pato',
        description:
          'O Arroz de Pato é um delicioso prato português, feito com arroz, carne de pato desfiada, chouriço e cenoura. Cozido lentamente no forno para absorver todos os sabores e aromas, o resultado é um prato saboroso e reconfortante que conquista os corações dos apaixonados pela gastronomia lusitana.',
        price: 64.9,
        photo: 'https://api-ebac.vercel.app/efood/cantinho_lusitano//2.jpg',
        serve: '1 a 2 pessoas',
      },
      {
        id: 16,
        name: 'Alheira de Mirandela',
        description:
          'A Alheira de Mirandela é um emblemático prato português, que consiste em uma deliciosa alheira grelhada, acompanhada de batatas fritas, arroz e uma salada fresca. A alheira é uma saborosa e suculenta mistura de carnes e pão, com um toque de alho e especiarias, que agrada a todos os gostos.',
        price: 54.9,
        photo: 'https://api-ebac.vercel.app/efood/cantinho_lusitano//3.png',
        serve: '1 pessoa',
      },
    ],
  },
  {
    id: 5,
    name: 'Piazza del Forno',
    description:
      'A Piazza del Forno é uma pizzaria acolhedora e autêntica que se orgulha de suas raízes italianas. Aqui, você encontrará pizzas artesanais preparadas com ingredientes frescos e assadas em forno a lenha, proporcionando sabores inigualáveis e uma crosta crocante e deliciosa.',
    logo: 'https://api-ebac.vercel.app/efood/piazza//capa.png',
    coverImage: 'https://api-ebac.vercel.app/efood/piazza//capa.png',
    rating: 4.7,
    featured: false,
    tags: [{ id: 6, name: 'Pizza' }, { id: 7, name: 'Italiana' }],
    menu: [
      {
        id: 17,
        name: 'Pizza Margherita',
        description:
          'A Pizza Margherita é um clássico italiano, preparada com molho de tomate caseiro, muçarela fresca, folhas de manjericão e um fio de azeite. Simples e deliciosa, esta pizza é a perfeita representação da culinária italiana em sua forma mais pura.',
        price: 49.9,
        photo: 'https://api-ebac.vercel.app/efood/piazza//1.jpg',
        serve: '1 a 2 pessoas',
      },
      {
        id: 18,
        name: 'Pizza Quatro Queijos',
        description:
          'A Pizza Quatro Queijos é uma combinação irresistível de muçarela, gorgonzola, parmesão e provolone, derretidos harmoniosamente sobre uma massa fina e crocante. Perfeita para os amantes de queijo que desejam uma experiência gastronômica rica e saborosa.',
        price: 59.9,
        photo: 'https://api-ebac.vercel.app/efood/piazza//2.webp',
        serve: '1 a 2 pessoas',
      },
      {
        id: 19,
        name: 'Pizza Calabresa',
        description:
          'A Pizza Calabresa é uma opção saborosa e suculenta, feita com rodelas de calabresa, cebola roxa fatiada, azeitonas pretas e muçarela derretida. Assada em forno a lenha, esta pizza é a escolha perfeita para quem deseja saborear uma pizza tradicional e deliciosa.',
        price: 64.9,
        photo: 'https://api-ebac.vercel.app/efood/piazza//3.jpg',
        serve: '1 a 2 pessoas',
      },
    ],
  },
  {
    id: 6,
    name: 'Jardim da Terra',
    description:
      'O Jardim da Terra é um restaurante vegano que se dedica a oferecer pratos deliciosos e criativos, utilizando apenas ingredientes frescos, orgânicos e sazonais. Nosso cardápio é cuidadosamente elaborado para proporcionar uma experiência culinária única, que celebra a diversidade e a riqueza dos alimentos à base de plantas.',
    logo: 'https://api-ebac.vercel.app/efood/jardim_terra//capa.png',
    coverImage: 'https://api-ebac.vercel.app/efood/jardim_terra//capa.png',
    rating: 4.8,
    featured: true,
    tags: [{ id: 8, name: 'Vegano' }],
    menu: [
      {
        id: 20,
        name: 'Hambúrguer de Grão-de-Bico',
        description:
          'Nosso Hambúrguer de Grão-de-Bico é feito com grão-de-bico, cenoura, cebola e especiarias, servido em um pão vegano fresco com alface, tomate e nosso delicioso molho caseiro. Acompanha batatas rústicas assadas e uma salada fresca e colorida.',
        price: 38.9,
        photo: 'https://api-ebac.vercel.app/efood/jardim_terra//1.webp',
        serve: '1 pessoa',
      },
      {
        id: 21,
        name: 'Lasanha de Berinjela',
        description:
          'A Lasanha de Berinjela é uma opção saborosa e reconfortante, preparada com camadas de berinjela grelhada, molho de tomate caseiro e um creme de castanha-de-caju. Assada até ficar dourada, esta lasanha vegana é a escolha perfeita para quem busca uma refeição saudável e deliciosa.',
        price: 42.9,
        photo: 'https://api-ebac.vercel.app/efood/jardim_terra//2.jpeg',
        serve: '1 a 2 pessoas',
      },
      {
        id: 22,
        name: 'Bowl de Cogumelos e Quinoa',
        description:
          'O Bowl de Cogumelos e Quinoa é uma combinação nutritiva e saborosa de quinoa cozida, cogumelos salteados, espinafre, abacate e tomates-cereja. Servido com um molho de ervas frescas e limão, este prato é ideal para quem busca uma refeição leve e saudável.',
        price: 35.9,
        photo: 'https://api-ebac.vercel.app/efood/jardim_terra//3.jpg',
        serve: '1 pessoa',
      },
    ],
  },
]
