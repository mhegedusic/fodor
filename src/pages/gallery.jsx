import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const Gallery = ({ images, setCurrentIndex }) => {
  const handleSlide = (currentIndex) => {
    setCurrentIndex(currentIndex);  // Postavljamo trenutni index slike
  };

  return (
    <div>
      <h2>Galerija</h2>
      <ImageGallery 
        items={images} 
        onSlide={handleSlide}  // Praćenje promjene slike
      />
    </div>
  );
};

export default Gallery;
