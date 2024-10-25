import React, { useState, useEffect } from 'react';
import  {BrowserRouter  as Router} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import styles from './Contact.module.css';


const App = () => {
  const getInitialImages = () => {
    const storedImages = localStorage.getItem('images');
    return storedImages
      ? JSON.parse(storedImages)
      : [
          {
            original: "https://i.ibb.co/MktKnCp/fodor1.jpg",
            thumbnail: 'https://i.ibb.co/8gfGM72/fodor1.jpg',
            description: 'opis prve slike',
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
          },
        ];
  };

  const [images, setImages] = useState(getInitialImages);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    localStorage.setItem('images', JSON.stringify(images));
  }, [images]);

  return (
    
    <Router>
      <div>
        <Header />
        <Main 
         images={images} 
         setImages={setImages} 
         currentIndex={currentIndex} 
         setCurrentIndex={setCurrentIndex} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
