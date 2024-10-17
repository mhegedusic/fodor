import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../pages/Contact.module.css';

const Header = () => {
  return (
    <>
    
    <header className={styles.header1}>
    <a href="/"><img src="https://i.ibb.co/17N9N4b/logo.jpg" alt="logo" /></a>
      <nav>
        <ul className={styles.ul}>
          <li><Link to="/fodor">Početna</Link></li>
          <li><Link to="/about">O nama</Link></li>
          <li><Link to="/gallery">Galerija</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
        </ul>
      </nav>
    </header>
    </>
  );
}

export default Header;
