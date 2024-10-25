import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Gallery from '../pages/gallery';
import Contact from '../pages/contact';
import ImageManager from '../components/ImageManager';


const Main = ({ images, setImages, currentIndex, setCurrentIndex }) => {
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
