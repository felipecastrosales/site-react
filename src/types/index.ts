// Tipos base para o sistema
export interface Category {
  id: string;
  name: string;
  slug: string;
  color: CategoryColor;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CategoryColor {
  background: string;
  text: string;
}

export interface GridItem {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
  shortLink?: string; // Para links encurtados
  categoryIds: string[]; // Referência para categorias
  description?: string;
  price?: number;
  isActive: boolean;
  sortOrder?: number;
  metadata?: Record<string, any>;
  createdAt?: Date;
  updatedAt?: Date;
}

// Para responses da API
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Para filtros e queries
export interface GridItemFilters {
  categoryIds?: string[];
  search?: string;
  isActive?: boolean;
  sortBy?: 'title' | 'createdAt' | 'sortOrder';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}