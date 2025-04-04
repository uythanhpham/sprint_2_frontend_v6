'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BodyUpload from '@/components/BodyUpload';
import MiddleItems from '@/components/MiddleItems';
import ResultBox from '@/components/ResultBox';
import '@/app/globals.css';

export default function FittingPage() {
  const handleBodyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const img = document.getElementById('body-box-img') as HTMLImageElement;
    if (file && img) {
      const reader = new FileReader();
      reader.onload = (event) => {
        img.src = event.target?.result as string;
        img.style.display = 'block';
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Header />
      <main className="container">
        <BodyUpload onChange={handleBodyChange} />
        <MiddleItems />
        <ResultBox />
      </main>
      <Footer />
    </>
  );
}
