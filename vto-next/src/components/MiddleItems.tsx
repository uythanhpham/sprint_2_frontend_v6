'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import ChooseClothesModal from './ChooseClothesModal';
import ChooseClothesButton from './ChooseClothesButton';

export default function MiddleItems() {
  const [showPopup, setShowPopup] = useState(false);
  const [image1Url, setImage1Url] = useState<string | null>(null);
  const [image2Url, setImage2Url] = useState<string | null>(null);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setImage: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
    }
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
              onChange={(e) => handleImageChange(e, setImage1Url)}
              style={{ display: 'none' }}
              id="file1"
            />
            <label htmlFor="file1" className="cursor-pointer block mt-2">
              {image1Url ? (
                <div className="relative w-32 h-32">
                  <Image
                    src={image1Url}
                    alt="Uploaded item 1"
                    fill
                    className="object-cover rounded"
                  />
                </div>
              ) : (
                <span className="text-pink-500 text-xl">⬆️ Upload</span>
              )}
            </label>
          </div>
        </div>

        {/* Item 2 */}
        <div className="square">
          <div className="item-inner">
            Item 2<br />(Optional)
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, setImage2Url)}
              style={{ display: 'none' }}
              id="file2"
            />
            <label htmlFor="file2" className="cursor-pointer block mt-2">
              {image2Url ? (
                <div className="relative w-32 h-32">
                  <Image
                    src={image2Url}
                    alt="Uploaded item 2"
                    fill
                    className="object-cover rounded"
                  />
                </div>
              ) : (
                <span className="text-pink-500 text-xl">⬆️ Upload</span>
              )}
            </label>
          </div>
        </div>

        {/* 👚 Choose Clothes */}
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
