'use client';

import '@/app/globals.css';

export default function SearchBar() {
  return (
    <div className="searchbar-wrapper">
      {/* Search bar + Icon filter kế bên */}
      <div className="searchbar-container">
        <div className="searchbar-inner">
          <input
            type="text"
            placeholder="Search clothes..."
            className="searchbar-input"
          />
          <span className="searchbar-icon" title="Search">🔍</span>
        </div>

        <span className="searchbar-filter" title="Filter">✨</span>
      </div>
    </div>
  );
}
