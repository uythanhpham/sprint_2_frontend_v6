'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ChooseClothesModal from './ChooseClothesModal';
import ChooseClothesButton from './ChooseClothesButton';

export default function MiddleItems() {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleTryOn = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="middle-items">
        {/* Item 1 */}
        <div className="square">
          <div className="item-inner">
            Item 1
            <input
              type="file"
              accept="image/*"
              onChange={(e) => previewImage(e, 'item1-img')}
              style={{ display: 'none' }}
            />
            <img id="item1-img" style={{ display: 'none' }} />
          </div>
        </div>

        {/* Item 2 */}
        <div className="square">
          <div className="item-inner">
            Item 2<br />(Optional)
            <input
              type="file"
              accept="image/*"
              onChange={(e) => previewImage(e, 'item2-img')}
              style={{ display: 'none' }}
            />
            <img id="item2-img" style={{ display: 'none' }} />
          </div>
        </div>

        {/* 👚 Choose Clothes */}
        <ChooseClothesButton onClick={openPopup} />
      </div>

      <AnimatePresence mode="wait">
        {showPopup && (
          <ChooseClothesModal
            onClose={closePopup}
            onTryOn={handleTryOn}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function previewImage(event: React.ChangeEvent<HTMLInputElement>, imgId: string) {
  const file = event.target.files?.[0];
  const img = document.getElementById(imgId) as HTMLImageElement;
  if (file && img) {
    const reader = new FileReader();
    reader.onload = (e) => {
      img.src = e.target?.result as string;
      img.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
}
