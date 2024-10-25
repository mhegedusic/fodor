import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import styles from './Contact.module.css';

const Gallery = () => {
  // Formatiraj slike za react-image-gallery
  const images = [
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
    original: "https://i.ibb.co/svRYKwc/dekoracijaledrasvjeta.jpg",
    thumbnail: 'https://i.ibb.co/VW94gSb/dekoracijaledrasvjeta.jpg',
    originalClass: styles.galleryImage,
    description: 'Led rasvjeta kao dekoracija'
  },
  {
    original: "https://i.ibb.co/CbcvsJq/kuhinjaspogledom.jpg",
    thumbnail: 'https://i.ibb.co/F5rJqs9/kuhinjaspogledom.jpg',
    originalClass: styles.galleryImage,
    description: 'Prostrana kuhinja sa prirodnim svjetlom'
  },
  {
    original: "https://i.ibb.co/Y78dKBT/zidnostropnaoblogairasvjeta.jpg",
    thumbnail: 'https://i.ibb.co/9924fH3/zidnostropnaoblogairasvjeta.jpg',
    originalClass: styles.galleryImage,
    description: 'Zidna i stropna obloga sa led rasvjetom'
  },
  {
    original: "https://i.ibb.co/Brz5pJz/zidnaoblogailedrasvejta.jpg",
    thumbnail: 'https://i.ibb.co/Brz5pJz/zidnaoblogailedrasvejta.jpg',
    originalClass: styles.galleryImage,
    description: 'Zidna obloga i led rasvjeta kao dekoracija'
  },
  {
    original: "https://i.ibb.co/nnhMqMw/krevetiradnistol.jpg",
    thumbnail: 'https://i.ibb.co/z7KVWVm/krevetiradnistol.jpg',
    originalClass: styles.galleryImage,
    description: 'Radni stol spojen s krevetom na kat'
  },
  {
    original: "https://i.ibb.co/KbfnkJT/klasi-neru-ice.jpg",
    thumbnail: 'https://i.ibb.co/JmGZ49D/klasi-neru-ice.jpg',
    originalClass: styles.galleryImage,
    description: 'Elegantna kuhinja sa klasičnim ručicama'
  },
  {
    original: "https://i.ibb.co/cXsjvfx/komodatv.jpg",
    thumbnail: 'https://i.ibb.co/mFP3BZS/komodatv.jpg',
    originalClass: styles.galleryImage,
    description: 'Komoda za tv'
  }
  
  ];

  return (
    <div className="gallery-container">
      <ImageGallery items={images} />
    </div>
  );
};

export default Gallery;
