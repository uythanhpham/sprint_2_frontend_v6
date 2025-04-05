'use client';

import { useState } from 'react';
import Image from 'next/image';
import FilterMenu from '@/components/FilterMenu';
import ClothesGrid from '@/components/ClothesGrid';
import '@/app/globals.css';

export default function ChooseClothesPopup() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  return (
    <div className="choose-popup-container">
      {/* Vùng ảnh và filter menu */}
      <div className="choose-popup-header">
        {/* Khung ảnh demo */}
        <div className="choose-popup-images">
          <div className="image-box relative w-40 h-40">
            <Image
              src="/clothes/item1.jpg"
              alt="Selected clothes item"
              fill
              className="object-cover rounded"
            />
          </div>
          <div className="image-box flex items-center justify-center w-40 h-40 border border-dashed border-gray-300 rounded">
            <span style={{ fontSize: '40px', opacity: 0.3 }}>🖼️➕</span>
          </div>
        </div>

        {/* Filter menu */}
        <div className="choose-popup-filter">
          <FilterMenu selected={selectedFilter} onFilterClick={setSelectedFilter} />
        </div>
      </div>

      {/* Grid sản phẩm */}
      <ClothesGrid filter={selectedFilter} />
    </div>
  );
}
