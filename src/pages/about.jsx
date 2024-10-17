import React from 'react';
import styles from './Contact.module.css';

const About = () => {
  return (
    <div className={styles.kitchengif}>
      <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHNjejF5ZjEzMzNvNTF2bTRqeTE5ZWV2dmpheDRjcno3NHl4dXJ1aiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/SANa0liNqtCmqh6QJ8/200.webp" alt="3dkitchen viaGiphy https://giphy.com/gifs/real-estate-realtor-luxque-SANa0liNqtCmqh6QJ8"/>
      <table className = {styles.table}>
        <tr>
          <td> <p><strong>Namještaj Fodor –  Vaš partner u stvaranju savršenog doma!</strong> </p>
             <p> Osnovani s vizijom pružanja vrhunske kvalitete i personaliziranih 
              rješenja, Namještaj Fodor specijaliziran je za izradu i montažu namještaja, 
              s posebnim naglaskom na kuhinje. Iako smo mlada tvrtka, osnovana prije 
              nekoliko mjeseci, naš tim iskusnih stolara i dizajnera posvećen je ispunjavanju 
              svih vaših želja. Svaka kuhinja, ormar ili komad namještaja kreiran je s pažnjom na 
              detalje i prilagođen vašem prostoru i stilu.</p>

              U Namještaju Fodor vjerujemo da dom počinje s kvalitetnim namještajem koji je funkcionalan 
              i estetski savršen. Kontaktirajte nas danas i zajedno ćemo izraditi prostor u kojem ćete uživati godinama!

          </td>
          <td>
          <p><strong>S Namještajem Fodor, svaka ideja postaje stvarnost. </strong> </p>
             <p> Naš pristup temelji se na individualnom pristupu svakom klijentu, 
              što znači da su vaši snovi i potrebe u središtu svakog projekta. 
              Bez obzira na veličinu prostora ili specifične zahtjeve, mi 
              kreiramo rješenja koja su savršeno usklađena s vašim stilom života i estetikom doma.

              Koristimo samo najkvalitetnije materijale, modernu tehnologiju izrade i inovativne 
              dizajnerske tehnike kako bismo osigurali dugotrajnost i vrhunski izgled svakog komada namještaja. 
              Naš cilj nije samo zadovoljiti, nego i nadmašiti vaša očekivanja, bilo da se radi o elegantnoj kuhinji 
              po mjeri, funkcionalnim ormarima ili jedinstvenom komadu koji će podići vaš prostor na novu razinu.</p>

              <p><strong>Od ideje do realizacije –</strong> Namještaj Fodor je tu da vam pomogne oblikovati prostor koji je 
                istovremeno funkcionalan, moderan i jedinstveno vaš.</p>


          </td>
        </tr>
      </table>
    </div>
  );
}

export default About;
