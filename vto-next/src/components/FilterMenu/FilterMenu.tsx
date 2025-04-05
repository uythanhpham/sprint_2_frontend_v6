'use client';

import { useCallback, useEffect } from 'react';
import './FilterMenu.css';

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

  // ✅ Gói handleClick bằng useCallback để tránh re-create
  const handleClick = useCallback(
    (label: string) => {
      if (label === 'Try On') {
        onTryOn?.(); // gọi nếu có
      } else {
        onFilterClick(label);
      }
    },
    [onFilterClick, onTryOn]
  );

  // ✅ Keyboard shortcut: phím "x" để thử đồ
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'x') {
        handleClick('Try On');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleClick]);

  return (
    <div className="filter-menu" role="group" aria-label="Clothing filter menu">
      {filters.map((label) => {
        const isActive = selected === label;
        const btnClass = `filter-button ${isActive ? 'active' : ''}`;
        const ariaLabel = label === 'Try On' ? 'Try on selected clothes' : `Filter by ${label}`;

        return (
          <button
            key={label}
            onClick={() => handleClick(label)}
            className={btnClass}
            aria-label={ariaLabel}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
