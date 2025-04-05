'use client';

interface ChooseClothesButtonProps {
  onClick: () => void;
}

export default function ChooseClothesButton({ onClick }: ChooseClothesButtonProps) {
  return (
    <div className="square solid-border choose-clothes-button" onClick={onClick}>
      👚 Choose Clothes
    </div>
  );
}
