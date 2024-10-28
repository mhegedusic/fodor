import React, { useState } from 'react';
import Gallery from 'react-photo-gallery'; // Ispravno uvozimo kao 'Gallery'
import Modal from 'react-modal';

// Postavi modal stilove
Modal.setAppElement('#root'); // Postavi root element za pristupačnost

const images = [
  {
    src: 'https://i.ibb.co/KbfnkJT/klasi-neru-ice.jpg',
    width: 4,
    height: 3,
    description: 'Opis slike 1',
  },
  {
    src: 'https://i.ibb.co/nnhMqMw/krevetiradnistol.jpg',
    width: 4,
    height: 3,
    description: 'Opis slike 2',
  },
  {
    src: 'https://i.ibb.co/D8VHJFV/zidnaoblogailedrasvejta.jpg',
    width: 4,
    height: 3,
    description: 'Opis slike 3',
  },
  {
    src: 'https://i.ibb.co/Y78dKBT/zidnostropnaoblogairasvjeta.jpg',
    width: 4,
    height: 3,
    description: 'Opis slike 3',
  },
  {
    src: 'https://i.ibb.co/svRYKwc/dekoracijaledrasvjeta.jpg',
    width: 4,
    height: 3,
    description: 'Opis slike 3',
  },
  {
    src: 'https://i.ibb.co/CbcvsJq/kuhinjaspogledom.jpg',
    width: 4,
    height: 3,
    description: 'Opis slike 3',
  },
  {
    src: 'https://i.ibb.co/sy6Fr8t/ormar1.jpg',
    width: 4,
    height: 3,
    description: 'Opis slike 3',
  },
  {
    src: 'https://i.ibb.co/R6fX320/ormar2.jpg',
    width: 4,
    height: 3,
    description: 'Opis slike 3',
  },
  {
    src: 'https://i.ibb.co/1mC3BCG/komoda.jpg',
    width: 4,
    height: 3,
    description: 'Opis slike 3',
  },
  {
    src: 'https://i.ibb.co/LNWgBv8/krevet.jpg',
    width: 4,
    height: 3,
    description: 'Opis slike 3',
  },
  {
    src: 'https://i.ibb.co/BLy8hqT/ladice.jpg',
    width: 4,
    height: 3,
    description: 'Opis slike 3',
  },
  {
    src: 'https://i.ibb.co/MV50YN5/kupaonica.jpg',
    width: 4,
    height: 3,
    description: 'Opis slike 3',
  },
  {
    src: 'https://i.ibb.co/f0YBxtT/kupaonica2.jpg',
    width: 4,
    height: 3,
    description: 'Opis slike 3',
  },
  {
    src: 'https://i.ibb.co/NnFpHYf/kuhinjazg.jpg',
    width: 4,
    height: 3,
    description: 'Opis slike 3',
  },
  {
    src: 'https://i.ibb.co/YLLX0Bq/kuhinjaskrivenimehanizam.jpg',
    width: 4,
    height: 3,
    description: 'Opis slike 3',
  },
  // Dodajte više slika po potrebi
];

const GalleryPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (event, { index }) => {
    setCurrentIndex(index); // Postavljamo index trenutne slike
    setModalIsOpen(true);   // Otvaramo modal
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentIndex(null);
  };

  const goToNext = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex + 1) % images.length);
    }
  };

  const goToPrevious = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    }
  };

  const currentImage = currentIndex !== null ? images[currentIndex] : null;

  return (
    <div>
      <Gallery photos={images} onClick={openModal} /> {/* Prikazujemo galeriju */}

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={modalStyle}>
        {currentImage ? (
          <div style={modalContentStyle}>
            <button onClick={goToPrevious} style={navButtonStyle}>❮</button>
            <div style={imageContainerStyle}>
              <img
                src={currentImage.src}
                alt={currentImage.description}
                style={modalImageStyle}
              />
              <p style={descriptionStyle}>{currentImage.description}</p>
            </div>
            <button onClick={goToNext} style={navButtonStyle}>❯</button>
          </div>
        ) : (
          <p>Slika nije dostupna</p>
        )}
        <button onClick={closeModal} style={closeButtonStyle}>Zatvori</button>
      </Modal>
    </div>
  );
};

// Stilovi za modal
const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#222',
    border: 'none',
    borderRadius: '8px',
    padding: '20px',
    color: 'white',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
  },
};

const modalContentStyle = {
  display: 'flex',
  alignItems: 'center',
};

const navButtonStyle = {
  fontSize: '2rem',
  backgroundColor: 'transparent',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  padding: '10px',
};

const imageContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const modalImageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
};

const descriptionStyle = {
  marginTop: '10px',
  fontSize: '16px',
  fontStyle: 'italic',
};

const closeButtonStyle = {
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: '#f44336',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default GalleryPage;
