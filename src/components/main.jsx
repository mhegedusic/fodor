import React from 'react';
import { BrowserRouter as Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Gallery from '../pages/gallery';
import Contact from '../pages/contact';


const Main = ({ images }) => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery images={images}/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default Main;
