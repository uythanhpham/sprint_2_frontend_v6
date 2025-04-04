'use client';

import '@/app/globals.css';

export default function SearchBar() {
  return (
    <div className="searchbar-wrapper">
      {/* Thanh search bo tròn */}
      <div className="searchbar-inner">
        <input
          type="text"
          placeholder="Search clothes..."
          className="searchbar-input"
        />
        <span className="searchbar-icon" title="Search">🔍</span>
      </div>

      {/* Icon filter bên ngoài */}
      <span className="searchbar-filter" title="Filter">✨</span>
    </div>
  );
}
