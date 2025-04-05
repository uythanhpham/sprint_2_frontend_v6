'use client';

import ProductCard from './ProductCard';
import '@/app/globals.css';

interface ClothesGridProps {
  filter?: string;
}

const clothesData = Array.from({ length: 15 }, (_, i) => {
  const types = ['Upper', 'Lower', 'Full-body'];
  return {
    id: i,
    imageUrl: `/clothes/item${(i % 6) + 1}.jpg`,
    type: types[i % 3], // Loại quần áo
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
