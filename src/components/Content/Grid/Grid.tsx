import React from 'react';
import './Grid.css';
import { GridItem } from '../../../types';
import { getCategoriesByIds } from '../../../core/constants/categories';

interface GridProps {
  items: GridItem[];
  className?: string;
}

const Grid: React.FC<GridProps> = ({ items, className }) => {
  return (
    <div className={`grid-container ${className}`}>
      {items.map((item) => {
        const categories = getCategoriesByIds(item.categoryIds);
        
        return (
          <div
            key={item.id}
            className="grid-item"
            onClick={() => window.open(item.link, '_blank')}
          >
            <img src={item.imageUrl} alt={item.title} />
            <div className="grid-item-content">
              <h2 className="grid-item-title">{item.title}</h2>
              {item.description && (
                <p className="grid-item-description">{item.description}</p>
              )}
              <div className="grid-item-categories">
                {categories.map((category) => (
                  <span
                    key={category.id}
                    className={`category category-${category.slug}`}
                    style={{
                      backgroundColor: category.color.background,
                      color: category.color.text
                    }}
                  >
                    {category.name}
                  </span>
                ))}
              </div>
              {item.price && (
                <>
                  <div style={{ marginTop: '0.4rem' }}></div>
                  <div className="grid-item-price">
                    R$ {item.price.toFixed(2)}
                  </div>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
export type { GridItem };