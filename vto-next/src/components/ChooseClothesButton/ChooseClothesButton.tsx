'use client';

import './ChooseClothesButton.css';

interface ChooseClothesButtonProps {
  onClick: () => void;
}

export default function ChooseClothesButton({ onClick }: ChooseClothesButtonProps) {
  return (
    <div
      className="square solid-border choose-clothes-button"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label="Choose clothes"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClick();
      }}
    >
      👆 Choose Clothes
    </div>
  );
}
