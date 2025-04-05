// pages/FittingPage.tsx hoặc app/FittingPage/page.tsx

'use client';

import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import BodyUpload from '@/components/BodyUpload/BodyUpload';
import MiddleItems from '@/components/MiddleItems/MiddleItems';
import ResultBox from '@/components/ResultBox/ResultBox';
import './FittingPage.css'; // ✅ Thêm CSS riêng cho bố cục

export default function FittingPage() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="upload-body-wrapper">
          <BodyUpload />
        </div>

        <div className="items-row-wrapper">
          <MiddleItems />
        </div>

        <div className="result-box-wrapper">
          <ResultBox />
        </div>
      </main>
      <Footer />
    </>
  );
}
