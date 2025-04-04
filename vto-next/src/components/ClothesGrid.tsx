'use client';

import ProductCard from './ProductCard';
import '@/app/globals.css';

export default function ClothesGrid() {
  const clothes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    imageUrl: `/clothes/item${(i % 6) + 1}.jpg`,
  }));

  return (
    <div className="clothes-grid">
      {clothes.map((item) => (
        <ProductCard key={item.id} imageUrl={item.imageUrl} />
      ))}
    </div>
  );
}
