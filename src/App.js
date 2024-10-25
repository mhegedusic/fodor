import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';

const App = () => {
  return (
    
    <Router>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
