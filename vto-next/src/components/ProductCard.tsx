'use client';

import Image from 'next/image';
import '@/app/globals.css';

interface ProductCardProps {
  imageUrl: string;
  alt?: string;
}

export default function ProductCard({ imageUrl, alt }: ProductCardProps) {
  return (
    <div className="product-card relative w-40 h-40">
      <Image
        src={imageUrl}
        alt={alt || 'Clothing'}
        fill
        className="product-image object-cover rounded"
      />
    </div>
  );
}
