'use client';

import '@/app/globals.css';

interface ProductCardProps {
  imageUrl: string;
  alt?: string;
}

export default function ProductCard({ imageUrl, alt }: ProductCardProps) {
  return (
    <div className="product-card">
      <img
        src={imageUrl}
        alt={alt || 'Clothing'}
        className="product-image"
      />
    </div>
  );
}
