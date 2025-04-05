'use client';

import './SearchBar.css';

export default function SearchBar() {
  return (
    <div className="searchbar-wrapper">
      {/* Search input + filter icon */}
      <div className="searchbar-container">
        <div className="searchbar-inner" role="search">
          <input
            type="text"
            placeholder="Search clothes..."
            className="searchbar-input"
            aria-label="Search clothes"
          />
          <span className="searchbar-icon" role="button" tabIndex={0} title="Search">
            🔍
          </span>
        </div>

        <span
          className="searchbar-filter"
          role="button"
          tabIndex={0}
          title="Filter options"
        >
          ✨
        </span>
      </div>
    </div>
  );
}
