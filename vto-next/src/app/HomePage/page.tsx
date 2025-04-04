'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TryOnButton from '@/components/TryOnButton';
import SearchBar from '@/components/SearchBar';
import ClothesGrid from '@/components/ClothesGrid';
import '@/app/globals.css';

export default function HomePage() {
  return (
    <>
      <Header />
      <main style={{ padding: '40px 20px' }}>
        <TryOnButton />
        <SearchBar />
        <ClothesGrid />
      </main>
      <Footer />
    </>
  );
}
