'use client';

import { useCallback, useEffect } from 'react';
import '@/app/globals.css';

interface FilterMenuProps {
  selected: string;
  onFilterClick: (filter: string) => void;
  onTryOn?: () => void; // chỉ để đóng modal
}

export default function FilterMenu({
  selected,
  onFilterClick,
  onTryOn,
}: FilterMenuProps) {
  const filters = ['Upper', 'Lower', 'Full-body', 'All', 'Try On'];

  // ✅ Gói handleClick bằng useCallback để tránh warning
  const handleClick = useCallback(
    (label: string) => {
      onFilterClick(label);
      if (label === 'Try On' && onTryOn) {
        onTryOn(); // ✅ chỉ đóng modal, không chuyển trang
      }
    },
    [onFilterClick, onTryOn]
  );

  // 🔑 Xử lý phím "x" như phím tắt đóng
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'x') {
        handleClick('Try On');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleClick]); // ✅ thêm handleClick vào dependencies

  return (
    <div className="filter-menu">
      {filters.map((label) => {
        const isActive = selected === label;
        const btnClass = `filter-button ${isActive ? 'active' : ''}`;

        return (
          <button
            key={label}
            onClick={() => handleClick(label)}
            className={btnClass}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
