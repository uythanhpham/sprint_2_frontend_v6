'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BodyUpload from '@/components/BodyUpload';
import MiddleItems from '@/components/MiddleItems';
import ResultBox from '@/components/ResultBox';
import '@/app/globals.css';

export default function FittingPage() {
  return (
    <>
      <Header />
      <main className="container">
        <BodyUpload />
        <MiddleItems />
        <ResultBox />
      </main>
      <Footer />
    </>
  );
}
