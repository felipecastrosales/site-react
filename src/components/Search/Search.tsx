import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { GridItems } from '../Content/Grid/GridItems';
import { GridItem } from '../Content/Grid/Grid';
import Grid from '../Content/Grid/Grid';
import './Search.css';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState<GridItem[]>([]);
  const [remainingItems, setRemainingItems] = useState<GridItem[]>([]);

  useEffect(() => {
    // GridItems.sort(() => Math.random() - 0.5);
    const filtered = GridItems.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.categories.some(category => category.toLowerCase().includes(query.toLowerCase()))
    );
    const remaining = GridItems.filter(item => !filtered.includes(item));

    setFilteredItems(filtered);
    setRemainingItems(remaining);
  }, [query]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
  };

  return (
    <div>
      <Input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Pesquise pelo nome ou categoria do produto"
      />
      <div>
        <Grid items={filteredItems} className="filtered-grid" />
        {remainingItems.length > 0 && (
          <>
            <hr className="divider" />
            <h2 className="remaining-heading">Você também pode gostar:</h2>
            <Grid items={remainingItems} className="remaining-grid" />
          </>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;