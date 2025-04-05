'use client';

import { useRouter } from 'next/navigation';
import './TryOnButton.css'; // ✅ Import CSS riêng

export default function TryOnButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/FittingPage'); // 👉 Điều hướng đến trang FittingPage
  };

  return (
    <div className="tryon-wrapper">
      <button
        className="tryon-button"
        onClick={handleClick}
        aria-label="Try on clothes"
      >
        👗 Try on Clothes
      </button>
    </div>
  );
}
