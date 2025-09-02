import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import CategoryTabs from '../CategoryTabs/CategoryTabs';
import './Search.css';

const SearchComponent = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
  };

  return (
    <div className="search-container">
      <div className="search-input-container">
        <Input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Pesquise pelo nome ou categoria do produto"
          className="search-input"
        />
      </div>
      
      <CategoryTabs searchQuery={query} />
    </div>
  );
};

export default SearchComponent;