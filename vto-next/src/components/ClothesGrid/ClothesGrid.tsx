'use client';

import ProductCard from '../ProductCard/ProductCard';
import './ClothesGrid.css'; // ✅ Tách riêng CSS

interface ClothesGridProps {
  filter?: string;
}

interface ClothesItem {
  id: number;
  imageUrl: string;
  type: 'Upper' | 'Lower' | 'Full-body';
}

const clothesData: ClothesItem[] = Array.from({ length: 15 }, (_, i) => {
  const types: ClothesItem['type'][] = ['Upper', 'Lower', 'Full-body'];
  return {
    id: i,
    imageUrl: `/clothes/item${(i % 6) + 1}.jpg`,
    type: types[i % 3],
  };
});

export default function ClothesGrid({ filter = 'All' }: ClothesGridProps) {
  const filteredClothes =
    filter === 'All'
      ? clothesData
      : clothesData.filter((item) => item.type === filter);

  return (
    <div className="clothes-grid">
      {filteredClothes.map((item) => (
        <ProductCard key={item.id} imageUrl={item.imageUrl} alt={item.type} />
      ))}
    </div>
  );
}
