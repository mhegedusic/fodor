import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import styles from '../pages/Contact.module.css'

const images = [
  {
    original: "https://i.ibb.co/MktKnCp/fodor1.jpg",
    thumbnail: 'https://i.ibb.co/8gfGM72/fodor1.jpg',
    originalClass: styles.galleryImage,
    description: 'opis prve slike'
  },
  {
    original: 'https://i.ibb.co/hY0ZbdF/fodor2.jpg',
    thumbnail: 'https://i.ibb.co/GHmtyMQ/fodor2.jpg',
    originalClass: styles.galleryImage,
  },
  // Dodajte više slika po potrebi
];

/*
<a href="https://ibb.co/8gfGM72">
<img src="https://i.ibb.co/8gfGM72/fodor1.jpg" alt="fodor1" border="0"></a> 

<a href="https://ibb.co/GHmtyMQ">
<img src="https://i.ibb.co/GHmtyMQ/fodor2.jpg" alt="fodor2" border="0"></a> 

<a href="https://ibb.co/SJWJqBG">
<img src="https://i.ibb.co/SJWJqBG/fodor3.jpg" alt="fodor3" border="0"></a> 

<a href="https://ibb.co/dfH28sK">
<img src="https://i.ibb.co/dfH28sK/fodor4.jpg" alt="fodor4" border="0"></a> 

<a href="https://ibb.co/Jd6HD21">
<img src="https://i.ibb.co/Jd6HD21/fodor5.jpg" alt="fodor5" border="0"></a> 

<a href="https://ibb.co/6rmSWvb">
<img src="https://i.ibb.co/6rmSWvb/fodor6.jpg" alt="fodor6" border="0"></a> 

<a href="https://ibb.co/17R7qY7">
<img src="https://i.ibb.co/17R7qY7/fodor7.jpg" alt="fodor7" border="0"></a> */

const Gallery = () => {
  return (
    <div>
      <ImageGallery items={images} />
    </div>
  );
}

export default Gallery;
