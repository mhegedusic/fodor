import React, { useState } from 'react';

const ImageManager = ({ images, setImages, currentIndex }) => {
  const [newImage, setNewImage] = useState({ original: '', thumbnail: '', description: '' });

  const handleAddImage = () => {
    if (newImage.original && newImage.thumbnail) {
      const updatedImages = [...images, newImage];
      setImages(updatedImages);
      setNewImage({ original: '', thumbnail: '', description: '' });
    } else {
      alert('Molimo unesite URL slike i sličice.');
    }
  };

  const handleDeleteImage = () => {
    const updatedImages = images.filter((_, index) => index !== currentIndex);
    setImages(updatedImages);
  };

  return (
    <div>
      <h2>Upravljanje slikama</h2>

      <div>
        <h3>Dodaj novu sliku</h3>
        <input 
          type="text" 
          placeholder="URL slike" 
          value={newImage.original} 
          onChange={(e) => setNewImage({ ...newImage, original: e.target.value, thumbnail: e.target.value })} 
        />
        <input 
          type="text" 
          placeholder="Opis slike" 
          value={newImage.description} 
          onChange={(e) => setNewImage({ ...newImage, description: e.target.value })} 
        />
        <button onClick={handleAddImage}>Dodaj sliku</button>
      </div>

      <div>
        <h3>Obriši trenutnu sliku</h3>
        <button onClick={handleDeleteImage}>Obriši sliku</button>
      </div>
    </div>
  );
};

export default ImageManager;
