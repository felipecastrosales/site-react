import { useState, useEffect, useCallback } from 'react';
import { GridItem, GridItemFilters, ApiResponse } from '../types';
import { gridItemsService } from '../services/gridItemsService';

export const useGridItems = (initialFilters: GridItemFilters = {}) => {
  const [items, setItems] = useState<GridItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<GridItemFilters>(initialFilters);

  const fetchItems = useCallback(async (newFilters?: GridItemFilters) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await gridItemsService.getGridItems(newFilters || filters);
      
      if (response.success) {
        setItems(response.data);
      } else {
        setError(response.message || 'Erro ao carregar items');
      }
    } catch (err) {
      setError('Erro inesperado ao carregar items');
      console.error('Error fetching grid items:', err);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const updateFilters = useCallback((newFilters: Partial<GridItemFilters>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    fetchItems(updatedFilters);
  }, [filters, fetchItems]);

  const refreshItems = useCallback(() => {
    gridItemsService.clearCache();
    fetchItems();
  }, [fetchItems]);

  return {
    items,
    loading,
    error,
    filters,
    updateFilters,
    refreshItems,
    refetch: fetchItems
  };
}; 