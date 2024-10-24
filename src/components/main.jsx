import React, { useState, useEffect } from 'react';
import { BrowserRouter as Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Gallery from '../pages/gallery';
import Contact from '../pages/contact';
import styles from '../pages/Contact.module.css';
import ImageManager from '../components/ImageManager';


const Main = () => {

  const getInitialImages = () => {
    const storedImages = localStorage.getItem('images');
    return storedImages
      ? JSON.parse(storedImages)
      : [
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
  {
    original: 'https://i.ibb.co/4Wrgsdw/fodor7.jpg',
    thumbnail: 'https://i.ibb.co/p2FrWy6/fodor7.jpg',
    originalClass: styles.galleryImage,
  },
  {
    original: 'https://i.ibb.co/Ry9R2DP/fodor6.jpg',
    thumbnail: 'https://i.ibb.co/Qdfy9Kn/fodor6.jpg',
    originalClass: styles.galleryImage,
  },
  {
    original: 'https://i.ibb.co/VwTzYdN/fodor5.jpg',
    thumbnail: 'https://i.ibb.co/LN1cdMP/fodor5.jpg',
    originalClass: styles.galleryImage,
  },
  {
    original: 'https://i.ibb.co/8cz2pZh/fodor4.jpg',
    thumbnail: 'https://i.ibb.co/bJHLZ9f/fodor4.jpg',
    originalClass: styles.galleryImage,
  },
  {
    original: 'https://i.ibb.co/XCkSgX7/fodor3.jpg',
    thumbnail: 'https://i.ibb.co/x78J0h1/fodor3.jpg',
    originalClass: styles.galleryImage,
  },
  {
    original: 'https://i.ibb.co/18cNBQ2/IMG-82e65c93331932a03537fd9c90572f17-V.jpg',
    thumbnail: 'https://i.ibb.co/86kwGs8/IMG-82e65c93331932a03537fd9c90572f17-V.jpg',
    originalClass: styles.galleryImage,
  },

];
};

const [images, setImages] = useState(getInitialImages);
const [currentIndex, setCurrentIndex] = useState(0);  // Praćenje trenutnog indexa slike

useEffect(() => {
  localStorage.setItem('images', JSON.stringify(images));
}, [images]);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery images={images} setCurrentIndex={setCurrentIndex} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/image" element={<ImageManager images={images} setImages={setImages} currentIndex={currentIndex} />} />
      </Routes>
    </main>
  );
}

export default Main;
