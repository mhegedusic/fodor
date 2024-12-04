import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import styles from '../pages/Contact.module.css';

const images = [
  {
    original: 'https://i.ibb.co/mSX2VbG/465726138-122141155238364828-6763868632914558753-n.jpg',
    thumbnail: 'https://i.ibb.co/DL8vHzt/465726138-122141155238364828-6763868632914558753-n.jpg'
    },
  {
original: '    https://i.ibb.co/5B5c6w2/465004935-122139986450364828-7230889133202436338-n.jpg',
thumbnail: 'https://i.ibb.co/bzrdPD7/465004935-122139986450364828-7230889133202436338-n.jpg'
},
{    
  original: 'https://i.ibb.co/m67cych/464385110-122139986420364828-4103171080303880024-n.jpg',
  thumbnail: "https://i.ibb.co/yWJQkQg/464385110-122139986420364828-4103171080303880024-n.jpg"
},
{
  original:' https://i.ibb.co/ngrmVBV/467439175-122143654040364828-6673578370743579162-n.jpg',
  thumbnail: "https://i.ibb.co/Wxn5d0d/467439175-122143654040364828-6673578370743579162-n.jpg"
},
{
  original:'https://i.ibb.co/1ZpB0Vh/467611218-122144007212364828-1704423747700574958-n.jpg',
  thumbnail:"https://i.ibb.co/MnjKgTW/467611218-122144007212364828-1704423747700574958-n.jpg" 
},
{
  original:' https://i.ibb.co/XDR0S8Q/467983767-122144007188364828-5213758730510511690-n.jpg',
  thumbnail: "https://i.ibb.co/FXTZgVr/467983767-122144007188364828-5213758730510511690-n.jpg" 
},
{
  original:' https://i.ibb.co/41zRzs4/467841473-122144109740364828-5558817813237988502-n.jpg',
  thumbnail:"https://i.ibb.co/rdY2Yb5/467841473-122144109740364828-5558817813237988502-n.jpg"
},
{
  original: 'https://i.ibb.co/tbLJK1m/468302046-122145316748364828-5586856193968672689-n.jpg',
  thumbnail:"https://i.ibb.co/xMF7LrC/468302046-122145316748364828-5586856193968672689-n.jpg"

},
{
  original: 'https://i.ibb.co/99JPmpb/468619156-122145317156364828-4510689174953955299-n.jpg',
  thumbnail:"https://i.ibb.co/8DJknmr/468619156-122145317156364828-4510689174953955299-n.jpg"

},
{
  original:' https://i.ibb.co/gdZVKfq/468574042-122145317198364828-5774233353394198643-n.jpg',
  thumbnail:"https://i.ibb.co/JqjQJG6/468574042-122145317198364828-5774233353394198643-n.jpg"
},
{
  original: 'https://i.ibb.co/M6W28Xy/468046079-122145544400364828-213130791878487412-n.jpg',
  thumbnail:"https://i.ibb.co/nCZg3Wq/468046079-122145544400364828-213130791878487412-n.jpg"
},
{
  original:' https://i.ibb.co/BCQX8nG/468401416-122145544382364828-1908142600604161457-n.jpg',
  thumbnail:"https://i.ibb.co/6WT36X8/468401416-122145544382364828-1908142600604161457-n.jpg" 
},
{
  original: 'https://i.ibb.co/F83hd6D/4e586c1c-9e5e-4df0-8b14-5fb001368787.jpg',
  thumbnail: 'https://i.ibb.co/vLqcM1j/4e586c1c-9e5e-4df0-8b14-5fb001368787.jpg',
},
{
  original: 'https://i.ibb.co/YLLX0Bq/kuhinjaskrivenimehanizam.jpg',
  thumbnail: 'https://i.ibb.co/YLLX0Bq/kuhinjaskrivenimehanizam.jpg',
},
{
  original: 'https://i.ibb.co/Vxwf3fY/06422a60-f9e7-41fd-89bb-0a3eae485976.jpg',
  thumbnail: 'https://i.ibb.co/Jq3DCDj/06422a60-f9e7-41fd-89bb-0a3eae485976.jpg',
},
{
  original: 'https://i.ibb.co/C8Bhkf5/57eb6972-4acf-491e-bb24-3fb273da1765.jpg',
  thumbnail: 'https://i.ibb.co/kBKQRtg/57eb6972-4acf-491e-bb24-3fb273da1765.jpg'
  },
  {
    original: 'https://i.ibb.co/NnFpHYf/kuhinjazg.jpg',
    thumbnail: 'https://i.ibb.co/NnFpHYf/kuhinjazg.jpg',
  },
  {
    original: 'https://i.ibb.co/f0YBxtT/kupaonica2.jpg',
    thumbnail: 'https://i.ibb.co/f0YBxtT/kupaonica2.jpg',
  },
  {
    original: 'https://i.ibb.co/Y78dKBT/zidnostropnaoblogairasvjeta.jpg',
    thumbnail: 'https://i.ibb.co/Y78dKBT/zidnostropnaoblogairasvjeta.jpg',
  },
  {
    original: 'https://i.ibb.co/svRYKwc/dekoracijaledrasvjeta.jpg',
    thumbnail: 'https://i.ibb.co/svRYKwc/dekoracijaledrasvjeta.jpg',
  },
  {
    original: 'https://i.ibb.co/CbcvsJq/kuhinjaspogledom.jpg',
    thumbnail: 'https://i.ibb.co/CbcvsJq/kuhinjaspogledom.jpg',
  },
  {
    original: 'https://i.ibb.co/sy6Fr8t/ormar1.jpg',
    thumbnail: 'https://i.ibb.co/sy6Fr8t/ormar1.jpg',
  },
  {
    original: 'https://i.ibb.co/R6fX320/ormar2.jpg',
    thumbnail: 'https://i.ibb.co/R6fX320/ormar2.jpg',
  },
  {
    original: 'https://i.ibb.co/1mC3BCG/komoda.jpg',
    thumbnail: 'https://i.ibb.co/1mC3BCG/komoda.jpg',
  },
  {
    original: 'https://i.ibb.co/LNWgBv8/krevet.jpg',
    thumbnail: 'https://i.ibb.co/LNWgBv8/krevet.jpg',
  },
  {
    original: 'https://i.ibb.co/BLy8hqT/ladice.jpg',
    thumbnail: 'https://i.ibb.co/BLy8hqT/ladice.jpg',
  },
  {
    original: 'https://i.ibb.co/MV50YN5/kupaonica.jpg',
    thumbnail: 'https://i.ibb.co/MV50YN5/kupaonica.jpg',
  },
  // Dodajte više slika po potrebi
];

const GalleryPage = () => {
  return (
    <div className={styles.galleryContainer}>
      <ImageGallery
        items={images}
        showThumbnails={true}
        showFullscreenButton={true}
        showPlayButton={false}
        additionalClass={styles.galleryImage} // Primijenite stil iz CSS modula
      />
    </div>
  );
};

// Stil za centriranje galerije na stranici
const galleryContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
};

export default GalleryPage;
