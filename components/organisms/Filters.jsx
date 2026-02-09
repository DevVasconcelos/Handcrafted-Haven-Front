'use client';

import { useEffect, useState } from 'react';
import Select from "../atoms/Select";

export default function Filters({ onFilterChange, categories = [], currentFilters = {} }) {
  const [localFilters, setLocalFilters] = useState({
    category: currentFilters.category || '',
    minPrice: currentFilters.minPrice || '',
    maxPrice: currentFilters.maxPrice || '',
    sortBy: currentFilters.sortBy || 'recent'
  });

  useEffect(() => {
    setLocalFilters({
      category: currentFilters.category || '',
      minPrice: currentFilters.minPrice || '',
      maxPrice: currentFilters.maxPrice || '',
      sortBy: currentFilters.sortBy || 'recent'
    });
  }, [currentFilters.category, currentFilters.minPrice, currentFilters.maxPrice, currentFilters.sortBy]);

  const handleFilterChange = (key, value) => {
    const newFilters = { ...localFilters, [key]: value };
    setLocalFilters(newFilters);
    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  };

  return (
    <section 
      className="mb-8 bg-[#FFFFFF] py-6 px-6 rounded-xl"
      style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' }}
    >
      <div className="flex flex-wrap items-center gap-3">
        <Select
          value={localFilters.category}
          onChange={(e) => handleFilterChange('category', e.target.value)}
          className="px-4 py-2.5 border border-[--border] rounded-lg bg-white text-sm font-medium shadow-sm hover:border-[--primary] transition-all"
        >
          <option value="">Category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </Select>

        <div className="flex items-center gap-2 px-4 py-2.5 border border-[--border] rounded-lg bg-white text-sm shadow-sm">
          <input
            type="number"
            placeholder="Min"
            value={localFilters.minPrice}
            onChange={(e) => handleFilterChange('minPrice', e.target.value)}
            className="w-20 bg-transparent focus:outline-none text-sm"
          />
          <span className="text-[--muted]">-</span>
          <input
            type="number"
            placeholder="Max"
            value={localFilters.maxPrice}
            onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
            className="w-20 bg-transparent focus:outline-none text-sm"
          />
        </div>

        <Select
          value={localFilters.sortBy}
          onChange={(e) => handleFilterChange('sortBy', e.target.value)}
          className="px-4 py-2.5 border border-[--border] rounded-lg bg-white text-sm font-medium shadow-sm hover:border-[--primary] transition-all"
        >
          <option value="recent">Most Recent</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Best Rating</option>
          <option value="popular">Most Popular</option>
        </Select>

      </div>
    </section>
  );
}
