import { Category } from '../../types';

// Configurações de categorias - futuro: buscar do banco de dados
export const CATEGORIES: Category[] = [
  {
    id: 'setup',
    name: 'Setup',
    slug: 'setup',
    color: { background: '#6A5ACD', text: '#FFFFFF' }
  },
  {
    id: 'livros',
    name: 'Livros',
    slug: 'livros',
    color: { background: '#FF6347', text: '#FFFFFF' }
  },
  {
    id: 'suplementos',
    name: 'Suplementos',
    slug: 'suplementos',
    color: { background: '#32CD32', text: '#FFFFFF' }
  },
  {
    id: 'performance',
    name: 'Performance',
    slug: 'performance',
    color: { background: '#FFD700', text: '#000000' }
  }
];

// Mapa para acesso rápido por ID
export const CATEGORIES_MAP = CATEGORIES.reduce((acc, category) => {
  acc[category.id] = category;
  return acc;
}, {} as Record<string, Category>);

// Helper functions
export const getCategoryById = (id: string): Category | undefined => {
  return CATEGORIES_MAP[id];
};

export const getCategoriesByIds = (ids: string[]): Category[] => {
  return ids.map(id => CATEGORIES_MAP[id]).filter(Boolean);
}; 