import React, { useState } from 'react';

const images = [
  { id: 1, src: 'https://i.ibb.co/YLLX0Bq/kuhinjaskrivenimehanizam.jpg', alt: 'Image 1', description: 'Kuhinja sa skrivenim mehanizmom' },
  { id: 2, src: 'https://i.ibb.co/NnFpHYf/kuhinjazg.jpg', alt: 'Image 2', description: 'Elegantna kuhinja' },
  { id: 3, src: 'https://i.ibb.co/f0YBxtT/kupaonica2.jpg', alt: 'Image 3', description: 'Kupaonica' },
  { id: 4, src: 'https://i.ibb.co/MV50YN5/kupaonica.jpg', alt: 'Image 3', description: 'Kupaonica' },
  { id: 5, src: 'https://i.ibb.co/BLy8hqT/ladice.jpg', alt: 'Image 3', description: 'Komoda sa ladicama' },
  { id: 6, src: 'https://i.ibb.co/LNWgBv8/krevet.jpg', alt: 'Image 3', description: 'Krevet' },
  { id: 7, src: 'https://i.ibb.co/1mC3BCG/komoda.jpg', alt: 'Image 3', description: 'Komoda' },
  { id: 7, src: 'https://i.ibb.co/R6fX320/ormar2.jpg', alt: 'Image 3', description: 'Ormar' },
  { id: 7, src: 'https://i.ibb.co/svRYKwc/dekoracijaledrasvjeta.jpg', alt: 'Image 3', description: 'Led rasvjeta kao dekoracija' },
  { id: 7, src: 'https://i.ibb.co/CbcvsJq/kuhinjaspogledom.jpg', alt: 'Image 3', description: 'Prostrana svjetla kuhinja' },
  { id: 7, src: 'https://i.ibb.co/Y78dKBT/zidnostropnaoblogairasvjeta.jpg', alt: 'Image 3', description: 'Zidna i stropna obloga sa led rasvjetom' },
  { id: 7, src: 'https://i.ibb.co/Brz5pJz/zidnaoblogailedrasvejta.jpg', alt: 'Image 3', description: 'Zidna obloga sa dekoracijom led rasvjete' },
  { id: 7, src: 'https://i.ibb.co/nnhMqMw/krevetiradnistol.jpg', alt: 'Image 3', description: 'Radni stol sa krevetom na kat, idealno za dječju sobu' },
  { id: 7, src: 'https://i.ibb.co/KbfnkJT/klasi-neru-ice.jpg', alt: 'Image 3', description: 'Kuhinja sa klasičnim ručicama' },
  
  // Dodaj više slika po potrebi
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div style={galleryStyle}>
      {images.map((image, index) => (
        <div key={image.id} style={imageContainerStyle}>
          <img
            src={image.src}
            alt={image.alt}
            style={imageStyle}
            onClick={() => openModal(index)}
          />
        </div>
      ))}

      {isOpen && (
        <div style={modalOverlayStyle} onClick={closeModal}>
          <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
            <span style={closeButtonStyle} onClick={closeModal}>
              &times;
            </span>

            {/* Strelica za prethodnu sliku */}
            <button style={{ ...navButtonStyle, ...prevButtonStyle }} onClick={goToPrevious}>
              &#10094;
            </button>

            {/* Slika i opis zajedno */}
            <div style={imageAndDescriptionContainerStyle}>
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                style={modalImageStyle}
              />
              <p style={descriptionStyle}>{images[currentIndex].description}</p>
            </div>

            {/* Strelica za sljedeću sliku */}
            <button style={{ ...navButtonStyle, ...nextButtonStyle }} onClick={goToNext}>
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Stilovi za galeriju i modal
const galleryStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: '16px',
  padding: '16px',
};

const imageContainerStyle = {
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
};

const imageStyle = {
  width: '100%',
  height: '300px',
  display: 'block',
};

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
};

const modalStyle = {
  position: 'relative',
  maxWidth: '80%',
  maxHeight: '80%',
  textAlign: 'center',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
};

const imageAndDescriptionContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const modalImageStyle = {
  width: '100%',
  height: '600px',
  borderRadius: '8px',
};

const descriptionStyle = {
  marginTop: '10px',
  fontSize: '18px',
  fontStyle: 'italic',
  color: 'white',
};

// Stilovi za strelice
const navButtonStyle = {
  fontSize: '40px',
  color: 'white',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  zIndex: 1001,
};

const prevButtonStyle = {
  position: 'absolute',
  left: '-50px', // Postavlja strelicu lijevo od slike
  top: '50%',
  transform: 'translateY(-50%)',
};

const nextButtonStyle = {
  position: 'absolute',
  right: '-50px', // Postavlja strelicu desno od slike
  top: '50%',
  transform: 'translateY(-50%)',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '20px',
  fontSize: '30px',
  color: 'white',
  cursor: 'pointer',
};

export default Gallery;
