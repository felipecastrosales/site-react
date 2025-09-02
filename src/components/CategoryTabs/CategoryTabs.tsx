import React, { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { GridItems } from '../Content/Grid/GridItems';
import { GridItem } from '../Content/Grid/Grid';
import Grid from '../Content/Grid/Grid';
import './CategoryTabs.css';

interface CategoryTabsProps {
  searchQuery?: string;
}

// Define color mapping for categories
const getCategoryColors = (category: string) => {
  const categoryKey = category.toLowerCase().replace(/\s+/g, '-');
  const colorMap: { [key: string]: { bg: string; text: string } } = {
    'setup': { bg: '#6A5ACD', text: '#FFFFFF' },
    'livros': { bg: '#FF6347', text: '#FFFFFF' },
    'performance': { bg: '#FFD700', text: '#000000' },
    'category-1': { bg: '#e0f7fa', text: '#006064' },
    'category-2': { bg: '#ffe0b2', text: '#e65100' },
    'category-3': { bg: '#dcedc8', text: '#33691e' },
    'category-a': { bg: '#e0f7fa', text: '#006064' },
    'category-b': { bg: '#ffe0b2', text: '#e65100' },
    'category-c': { bg: '#dcedc8', text: '#33691e' },
    'category-d': { bg: '#f3e5f5', text: '#4a148c' },
  };
  
  return colorMap[categoryKey] || { bg: '#e2e8f0', text: '#475569' }; // Default colors
};

const CategoryTabs: React.FC<CategoryTabsProps> = ({ searchQuery = '' }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [filteredItems, setFilteredItems] = useState<GridItem[]>([]);

  // Get all unique categories from the items
  const getAllCategories = (): string[] => {
    const categoriesSet = new Set<string>();
    GridItems.forEach(item => {
      item.categories.forEach(category => categoriesSet.add(category));
    });
    return Array.from(categoriesSet).sort();
  };

  const categories = getAllCategories();

  useEffect(() => {
    let items = GridItems;

    // Filter by search query first
    if (searchQuery) {
      items = items.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categories.some(category => 
          category.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    // Then filter by category tab
    if (activeTab !== 'all') {
      items = items.filter(item => 
        item.categories.includes(activeTab)
      );
    }

    setFilteredItems(items);
  }, [activeTab, searchQuery]);

  return (
    <div className="category-tabs-container">
      <Tabs className="w-full">
        <TabsList className="grid-cols-auto gap-2 h-auto p-1 bg-transparent">
          <TabsTrigger
            value="all"
            isActive={activeTab === 'all'}
            onClick={() => setActiveTab('all')}
            className={`category-tab ${activeTab === 'all' ? 'active' : ''}`}
            style={{
              backgroundColor: activeTab === 'all' ? '#1f2937' : 'transparent',
              color: activeTab === 'all' ? '#ffffff' : '#6b7280',
              border: '1px solid #e5e7eb'
            }}
          >
            Todos
          </TabsTrigger>
          {categories.map((category) => {
            const colors = getCategoryColors(category);
            const isActive = activeTab === category;
            
            return (
              <TabsTrigger
                key={category}
                value={category}
                isActive={isActive}
                onClick={() => setActiveTab(category)}
                className={`category-tab ${isActive ? 'active' : ''}`}
                style={{
                  backgroundColor: isActive ? colors.bg : 'transparent',
                  color: isActive ? colors.text : '#6b7280',
                  border: `1px solid ${isActive ? colors.bg : '#e5e7eb'}`,
                  transition: 'all 0.2s ease'
                }}
              >
                {category}
              </TabsTrigger>
            );
          })}
        </TabsList>
        
        <TabsContent value={activeTab}>
          {filteredItems.length > 0 ? (
            <Grid items={filteredItems} className="category-filtered-grid" />
          ) : (
            <div className="no-results">
              <p>Nenhum item encontrado para esta categoria.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CategoryTabs; 