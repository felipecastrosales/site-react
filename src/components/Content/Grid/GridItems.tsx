// Arquivo refatorado - agora apenas exporta o hook e utilitários
export { useGridItems } from '../../../hooks/useGridItems';
export { CATEGORIES, getCategoryById, getCategoriesByIds } from '../../../core/constants/categories';
export type { GridItem, GridItemFilters } from '../../../types';

// Re-export para compatibilidade com código existente
import { GRID_ITEMS_MOCK_DATA } from '../../../core/constants/mockData';
export const GridItems = GRID_ITEMS_MOCK_DATA;
