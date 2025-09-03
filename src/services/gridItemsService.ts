import { GridItem, GridItemFilters, ApiResponse } from '../types';
import { GRID_ITEMS_MOCK_DATA } from '../core/constants/mockData';

class GridItemsService {
  private cache: Map<string, { data: any; timestamp: number }> = new Map();
  private readonly CACHE_TTL = 5 * 60 * 1000; // 5 minutos

  // Simula uma API call - futuro: chamar API real
  async getGridItems(filters: GridItemFilters = {}): Promise<ApiResponse<GridItem[]>> {
    const cacheKey = this.generateCacheKey(filters);
    
    // Verificar cache
    const cachedData = this.getFromCache(cacheKey);
    if (cachedData) {
      return cachedData;
    }

    try {
      // Simular delay de network
      await new Promise(resolve => setTimeout(resolve, 100));
      
      let items = [...GRID_ITEMS_MOCK_DATA];
      
      // Aplicar filtros
      items = this.applyFilters(items, filters);
      
      const response: ApiResponse<GridItem[]> = {
        data: items,
        success: true,
        pagination: {
          page: filters.page || 1,
          limit: filters.limit || 50,
          total: items.length,
          hasNext: false,
          hasPrev: false
        }
      };

      // Salvar no cache
      this.setCache(cacheKey, response);
      
      return response;
    } catch (error) {
      return {
        data: [],
        success: false,
        message: 'Erro ao buscar items'
      };
    }
  }

  async getGridItemById(id: number): Promise<ApiResponse<GridItem | null>> {
    try {
      const item = GRID_ITEMS_MOCK_DATA.find(item => item.id === id);
      return {
        data: item || null,
        success: true
      };
    } catch (error) {
      return {
        data: null,
        success: false,
        message: 'Erro ao buscar item'
      };
    }
  }

  // Futuro: implementar métodos para CRUD
  async createGridItem(item: Omit<GridItem, 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<GridItem>> {
    // TODO: Implementar quando tiver banco de dados
    throw new Error('Método não implementado - aguardando integração com banco de dados');
  }

  async updateGridItem(id: number, updates: Partial<GridItem>): Promise<ApiResponse<GridItem>> {
    // TODO: Implementar quando tiver banco de dados
    throw new Error('Método não implementado - aguardando integração com banco de dados');
  }

  async deleteGridItem(id: number): Promise<ApiResponse<boolean>> {
    // TODO: Implementar quando tiver banco de dados
    throw new Error('Método não implementado - aguardando integração com banco de dados');
  }

  // Métodos privados para filtros e cache
  private applyFilters(items: GridItem[], filters: GridItemFilters): GridItem[] {
    let filtered = items;

    if (filters.categoryIds && filters.categoryIds.length > 0) {
      filtered = filtered.filter(item => 
        item.categoryIds.some(catId => filters.categoryIds!.includes(catId))
      );
    }

    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.description?.toLowerCase().includes(searchTerm)
      );
    }

    if (typeof filters.isActive === 'boolean') {
      filtered = filtered.filter(item => item.isActive === filters.isActive);
    }

    // Aplicar ordenação
    if (filters.sortBy) {
      filtered.sort((a, b) => {
        const multiplier = filters.sortOrder === 'desc' ? -1 : 1;
        
        switch (filters.sortBy) {
          case 'title':
            return a.title.localeCompare(b.title) * multiplier;
          case 'createdAt':
            return ((a.createdAt?.getTime() || 0) - (b.createdAt?.getTime() || 0)) * multiplier;
          case 'sortOrder':
            return ((a.sortOrder || 0) - (b.sortOrder || 0)) * multiplier;
          default:
            return 0;
        }
      });
    }

    return filtered;
  }

  private generateCacheKey(filters: GridItemFilters): string {
    return `grid-items-${JSON.stringify(filters)}`;
  }

  private getFromCache(key: string): any {
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < this.CACHE_TTL) {
      return cached.data;
    }
    this.cache.delete(key);
    return null;
  }

  private setCache(key: string, data: any): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }

  // Limpar cache manualmente se necessário
  clearCache(): void {
    this.cache.clear();
  }
}

export const gridItemsService = new GridItemsService(); 