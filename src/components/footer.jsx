import React from 'react';
import styles from '../pages/Contact.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
    <footer>
      <p>&copy; 2024 Namještaj Fodor. Sva prava zadržana.</p>
      <a href="https://www.facebook.com/people/Namje%C5%A1taj-Fodor/61560944850350/" target='_blank'><img src="https://i.ibb.co/hWkXQjf/face-logo.webp" alt="facelogo"/></a>
      <a href="https://www.facebook.com/people/Namje%C5%A1taj-Fodor/61560944850350/" target='_blank'><img src="https://i.ibb.co/1LyLYGK/instalogo.png" alt="instalogo" /></a>
      <a href="mailto: ifodor777@gmail.com"><img src="https://i.ibb.co/6RHMdW7/maillogo.png" alt="maillogo" /></a>
    </footer>
    </div>
  );
}

export default Footer;
