import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import styles from '../pages/Contact.module.css';

const images = [
  {
    original: 'https://i.ibb.co/YLLX0Bq/kuhinjaskrivenimehanizam.jpg',
    thumbnail: 'https://i.ibb.co/YLLX0Bq/kuhinjaskrivenimehanizam.jpg',
    description: 'Opis slike 1',
  },
  {
    original: 'https://i.ibb.co/NnFpHYf/kuhinjazg.jpg',
    thumbnail: 'https://i.ibb.co/NnFpHYf/kuhinjazg.jpg',
    description: 'Opis slike 2',
  },
  {
    original: 'https://i.ibb.co/f0YBxtT/kupaonica2.jpg',
    thumbnail: 'https://i.ibb.co/f0YBxtT/kupaonica2.jpg',
    description: 'Opis slike 3',
  },
  {
    original: 'https://i.ibb.co/Y78dKBT/zidnostropnaoblogairasvjeta.jpg',
    thumbnail: 'https://i.ibb.co/Y78dKBT/zidnostropnaoblogairasvjeta.jpg',
    description: 'Opis slike 3',
  },
  {
    original: 'https://i.ibb.co/svRYKwc/dekoracijaledrasvjeta.jpg',
    thumbnail: 'https://i.ibb.co/svRYKwc/dekoracijaledrasvjeta.jpg',
    description: 'Opis slike 3',
  },
  {
    original: 'https://i.ibb.co/CbcvsJq/kuhinjaspogledom.jpg',
    thumbnail: 'https://i.ibb.co/CbcvsJq/kuhinjaspogledom.jpg',
    description: 'Opis slike 3',
  },
  {
    original: 'https://i.ibb.co/sy6Fr8t/ormar1.jpg',
    thumbnail: 'https://i.ibb.co/sy6Fr8t/ormar1.jpg',
    description: 'Opis slike 3',
  },
  {
    original: 'https://i.ibb.co/R6fX320/ormar2.jpg',
    thumbnail: 'https://i.ibb.co/R6fX320/ormar2.jpg',
    description: 'Opis slike 3',
  },
  {
    original: 'https://i.ibb.co/1mC3BCG/komoda.jpg',
    thumbnail: 'https://i.ibb.co/1mC3BCG/komoda.jpg',
    description: 'Opis slike 3',
  },
  {
    original: 'https://i.ibb.co/LNWgBv8/krevet.jpg',
    thumbnail: 'https://i.ibb.co/LNWgBv8/krevet.jpg',
    description: 'Opis slike 3',
  },
  {
    original: 'https://i.ibb.co/BLy8hqT/ladice.jpg',
    thumbnail: 'https://i.ibb.co/BLy8hqT/ladice.jpg',
    description: 'Opis slike 3',
  },
  {
    original: 'https://i.ibb.co/MV50YN5/kupaonica.jpg',
    thumbnail: 'https://i.ibb.co/MV50YN5/kupaonica.jpg',
    description: 'Opis slike 3',
  },
  // Dodajte više slika po potrebi
];

const GalleryPage = () => {
  return (
    <div className={styles.galleryContainer}>
      <ImageGallery
        items={images}
        showThumbnails={true}
        showFullscreenButton={true}
        showPlayButton={false}
        additionalClass={styles.galleryImage} // Primijenite stil iz CSS modula
      />
    </div>
  );
};

// Stil za centriranje galerije na stranici
const galleryContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
};

export default GalleryPage;
