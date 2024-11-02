import React from 'react'
import './Grid.css'

interface GridItem {
  id: number
  imageUrl: string
  title: string
  categories: string[]
  link: string
}

interface GridProps {
  items: GridItem[]
  className?: string
}

const Grid: React.FC<GridProps> = ({ items, className }) => {
  return (
    <div className={`grid-container ${className}`}>
      {items.map((item) => (
        <div
          key={item.id}
          className="grid-item"
          onClick={() => window.open(item.link, '_blank')}
        >
          <img src={item.imageUrl} alt={item.title} />
          <div className="grid-item-content">
            <h2 className="grid-item-title">{item.title}</h2>
            <div className="grid-item-categories">
              {item.categories.map((category, index) => (
                <span key={index} className={`category category-${category.toLowerCase().replace(/\s+/g, '-')}`}>
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Grid
export type { GridItem }