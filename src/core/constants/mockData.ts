import { GridItem } from '../../types';

// Dados mock - futuro: remover quando integrar com banco de dados
export const GRID_ITEMS_MOCK_DATA: GridItem[] = [
  {
    id: 1,
    title: 'Suporte de Mesa',
    imageUrl: 'https://m.media-amazon.com/images/I/51WEsVzT4SL._AC_SX679_.jpg',
    categoryIds: ['setup'],
    link: 'https://amzn.to/4hqKZTN',
    shortLink: 'amzn.to/4hqKZTN',
    description: 'Suporte ergonômico para mesa de trabalho',
    isActive: true,
    sortOrder: 1,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 2,
    title: 'Suporte de Celular',
    imageUrl: 'https://m.media-amazon.com/images/I/410keNlvUOL._AC_SX679_.jpg',
    categoryIds: ['setup'],
    link: 'https://amzn.to/suporte-celular',
    isActive: true,
    sortOrder: 2,
    createdAt: new Date('2024-01-02'),
    updatedAt: new Date('2024-01-02')
  },
  {
    id: 3,
    title: 'Cabo USB Tipo C',
    imageUrl: 'https://m.media-amazon.com/images/I/61l5i6CSE6L._AC_SX679_.jpg',
    categoryIds: ['setup'],
    link: 'https://amzn.to/cabo-usb-c',
    description: 'Cabo USB-C de alta velocidade',
    isActive: true,
    sortOrder: 3,
    createdAt: new Date('2024-01-03'),
    updatedAt: new Date('2024-01-03')
  },
  {
    id: 4,
    title: 'Baseus 8 em 1 Docking Station',
    imageUrl: 'https://m.media-amazon.com/images/I/41j8+z2CyPL._AC_SX679_.jpg',
    categoryIds: ['setup'],
    link: 'https://amzn.to/baseus-docking',
    isActive: true,
    sortOrder: 4,
    createdAt: new Date('2024-01-04'),
    updatedAt: new Date('2024-01-04')
  },
  {
    id: 5,
    title: 'Caminho - São Josemaría Escrivá',
    imageUrl: 'https://m.media-amazon.com/images/I/91H5rj22DgL._SY522_.jpg',
    categoryIds: ['livros'],
    link: 'https://amzn.to/livro-caminho',
    description: 'Livro espiritual clássico',
    isActive: true,
    sortOrder: 5,
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05')
  },
  {
    id: 6,
    title: 'Fé Explicada - Leo J. Trese',
    imageUrl: 'https://m.media-amazon.com/images/I/61eCG6fZFjL._SY522_.jpg',
    categoryIds: ['livros'],
    link: 'https://amzn.to/fe-explicada',
    description: 'Explicação didática da fé católica',
    isActive: true,
    sortOrder: 6,
    createdAt: new Date('2024-01-06'),
    updatedAt: new Date('2024-01-06')
  },
  {
    id: 7,
    title: 'Microfone HyperX Solocast',
    imageUrl: 'https://m.media-amazon.com/images/I/616Iboh1sJL._AC_SX679_.jpg',
    categoryIds: ['setup'],
    link: 'https://amzn.to/hyperx-mic',
    description: 'Microfone USB profissional para streaming',
    isActive: true,
    sortOrder: 7,
    createdAt: new Date('2024-01-07'),
    updatedAt: new Date('2024-01-07')
  },
  {
    id: 8,
    title: 'Creatina Monohidratada 500g',
    imageUrl: 'https://m.media-amazon.com/images/I/613pUlI+W3L._AC_SX679_.jpg',
    categoryIds: ['suplementos'],
    link: 'https://amzn.to/creatina-500g',
    description: 'Creatina pura importada de alta qualidade',
    price: 89.90,
    isActive: true,
    sortOrder: 8,
    createdAt: new Date('2024-01-08'),
    updatedAt: new Date('2024-01-08')
  }
];
