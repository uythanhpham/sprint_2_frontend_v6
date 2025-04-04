'use client';

import { useRouter } from 'next/navigation';
import '@/app/globals.css';

export default function TryOnButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/FittingPage'); // 👉 Điều hướng đến trang FittingPage
  };

  return (
    <div className="tryon-wrapper">
      <button className="tryon-button" onClick={handleClick}>
        Try on Clothes
      </button>
    </div>
  );
}
