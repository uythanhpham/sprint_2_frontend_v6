'use client';

import Image from 'next/image';
import './ProductCard.css'; // ✅ Tách riêng CSS

interface ProductCardProps {
  imageUrl: string;
  alt?: string;
}

export default function ProductCard({ imageUrl, alt = 'Clothing' }: ProductCardProps) {
  return (
    <div className="product-card">
      <Image
        src={imageUrl}
        alt={alt}
        fill
        className="product-image object-cover rounded"
      />
    </div>
  );
}
