'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import FilterMenu from './FilterMenu';
import ClothesGrid from './ClothesGrid';
import '@/app/globals.css';

interface ChooseClothesModalProps {
  onClose: () => void;
}

export default function ChooseClothesModal({ onClose }: ChooseClothesModalProps) {
  const [selectedFilter, setSelectedFilter] = useState('All');

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <motion.div
      className="popup-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      {/* 🌟 Khung nền trắng bao ngoài popup-content */}
      <motion.div
        className="modal-background"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div
          className="popup-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <button className="popup-close" onClick={onClose}>✖</button>

          <div className="choose-popup-container">
            <div className="choose-popup-header">
              <div className="choose-popup-images">
                <div className="image-box">
                  <img src="/clothes/item1.jpg" alt="Selected" />
                </div>
                <div className="image-box">
                  <span style={{ fontSize: '40px', opacity: 0.3 }}>🖼️➕</span>
                </div>
              </div>
              <div className="choose-popup-filter">
                <FilterMenu
                  selected={selectedFilter}
                  onFilterClick={setSelectedFilter}
                  onTryOn={onClose}
                />
              </div>
            </div>

            <ClothesGrid filter={selectedFilter} />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
