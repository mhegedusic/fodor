import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import styles from './Contact.module.css';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('fodor_namjestaj_id', 'fodor_namjestaj_template', form.current, 'zyz7r0M36LLdY41Ah')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <div className={styles.contactForm}>
      <h2>Kontaktirajte nas</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Ime</label>
        <input type="text" name="name" required />
        <br />
        <label>Email</label>
        <input type="email" name="email" required />
        <br />
        <label>Poruka</label>
        <textarea name="message" required></textarea>
        <br />
        <label>Broj telefona:</label>
        <input type="text" name="tel" required/>
        <button type="submit">Pošalji</button>
      </form>
    </div>
  );
}

export default Contact;
