import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = ({ images }) => {
  // Formatiraj slike za react-image-gallery
  const formattedImages = images.map((image) => (
  {
    original: "https://i.ibb.co/YLLX0Bq/kuhinjaskrivenimehanizam.jpg",
    thumbnail: 'https://i.ibb.co/2kkSZ3f/kuhinjaskrivenimehanizam.jpg',
    originalClass: styles.galleryImage,
    description: 'kuhinja skriveni mehanizam'
  },
  {
    original: "https://i.ibb.co/NnFpHYf/kuhinjazg.jpg",
    thumbnail: 'https://i.ibb.co/M5gp3NK/kuhinjazg.jpg',
    originalClass: styles.galleryImage,
    description: 'kuhinja, sušilica i izvlačna košara, ploča spajana CNC spojem (bez lajsne)'
  },
  {
    original: "https://i.ibb.co/f0YBxtT/kupaonica2.jpg",
    thumbnail: 'https://i.ibb.co/VBWrqDk/kupaonica2.jpg',
    originalClass: styles.galleryImage,
    description: 'kupaonica'
  },
  {
    original: "https://i.ibb.co/MV50YN5/kupaonica.jpg",
    thumbnail: 'https://i.ibb.co/hW1zP81/kupaonica.jpg',
    originalClass: styles.galleryImage,
    description: 'kupaonica'
  },
  {
    original: "https://i.ibb.co/BLy8hqT/ladice.jpg",
    thumbnail: 'https://i.ibb.co/xh1VnJz/ladice.jpg',
    originalClass: styles.galleryImage,
    description: 'ladice'
  },
  {
    original: "https://i.ibb.co/LNWgBv8/krevet.jpg",
    thumbnail: 'https://i.ibb.co/ph8KNnx/krevet.jpg',
    originalClass: styles.galleryImage,
    description: 'krevet'
  },
  {
    original: "https://i.ibb.co/1mC3BCG/komoda.jpg",
    thumbnail: 'https://i.ibb.co/713HB3t/komoda.jpg',
    originalClass: styles.galleryImage,
    description: 'komoda'
  },
  {
    original: "https://i.ibb.co/R6fX320/ormar2.jpg",
    thumbnail: 'https://i.ibb.co/946xbnT/ormar2.jpg',
    originalClass: styles.galleryImage,
    description: 'ormar'
  },
  {
    original: "https://i.ibb.co/sy6Fr8t/ormar1.jpg",
    thumbnail: 'https://i.ibb.co/72RGFsb/ormar1.jpg',
    originalClass: styles.galleryImage,
    description: 'ormar'
  }
  ));

  return (
    <div className="gallery-container">
      <ImageGallery items={formattedImages} />
    </div>
  );
};

export default Gallery;
