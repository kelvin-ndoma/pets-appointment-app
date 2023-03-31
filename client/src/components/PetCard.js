import React, { useState } from 'react';
import Update from './Update';

import './PetCard.css';
import { Link } from 'react-router-dom';

function PetCard({ pet, onDeletePet, onUpdatePet }) {
  const { id, name, image, description, medical_history, age, breed } = pet;
 
  const [showUpdate, setShowUpdate] = useState(false);



  function handleUpdateClick() {
    setShowUpdate(!showUpdate);
  }

  function handleDeletePet() {
    fetch(`/pets/${id}`, {
      method: 'DELETE',
    }).then((r) => {
      if (r.ok) {
        onDeletePet(id);
      }
    });
  }

  return (
    <div className="pet-card">
      <div className="pet-card__image-container">
        <img
          className="pet-card__image"
          src={image}
          alt={name}
       
        />
      </div>
      <div className="pet-card__content">
        <h2 className="pet-card__name">Name: {name}</h2>
        <h3 className="pet-card__breed">Breed: {breed}</h3>
        <p className="pet-card__description">Description: {description}</p>
        <p className="pet-card__medical-history">Medical History: {medical_history}</p>
        <p className="pet-card__age">Age: {age}</p>
      </div>
      <div className="pet-card__button-container">
        <button
          className="pet-card__button pet-card__delete-button"
          onClick={handleDeletePet}
        >
          Delete
        </button>
        <button
          className="pet-card__button pet-card__update-button"
          onClick={handleUpdateClick}
        >
          Update
        </button>
      </div>
      <div className="pet-card__link-container">
      
      </div>
      {showUpdate && <Update onEditPet={onUpdatePet} pet={pet} />}
    </div>
  );
}
export default PetCard;