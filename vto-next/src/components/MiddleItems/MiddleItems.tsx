'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import ChooseClothesModal from '../ChooseClothesModal/ChooseClothesModal';
import ChooseClothesButton from '../ChooseClothesButton/ChooseClothesButton';
import './MiddleItems.css';

export default function MiddleItems() {
  const [showPopup, setShowPopup] = useState(false);
  const [image1Url] = useState<string | null>(null);
  const [image2Url] = useState<string | null>(null);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  return (
    <>
      <div className="middle-items">
        {/* Item 1 */}
        <div className="square solid-border">
          <div className="item-inner">
            {image1Url ? (
              <Image
                src={image1Url}
                alt="Item 1"
                fill
                className="object-contain rounded"
              />
            ) : (
              <span>Item 1</span>
            )}
          </div>
        </div>

        {/* Item 2 */}
        <div className="square solid-border">
          <div className="item-inner">
            {image2Url ? (
              <Image
                src={image2Url}
                alt="Item 2"
                fill
                className="object-contain rounded"
              />
            ) : (
              <span>Item 2 (Optional)</span>
            )}
          </div>
        </div>

        {/* 👉 Choose Clothes */}
        <ChooseClothesButton onClick={openPopup} />
      </div>

      <AnimatePresence mode="wait">
        {showPopup && (
          <ChooseClothesModal onClose={closePopup} />
        )}
      </AnimatePresence>
    </>
  );
}
