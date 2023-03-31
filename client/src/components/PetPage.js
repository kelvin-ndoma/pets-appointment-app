import React, { useEffect, useState } from 'react';
import NewPet from './NewPet';
import PetList from './PetList';
import './PetPage.css';

function PetPage() {
  const [pets, setPets] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("/pets")
      .then((r) => r.json())
      .then((petArray) => {
        setPets(petArray);
      });
  }, []);

  function handleAddPet(newPet) {
    const updatedPetArray = [newPet, ...pets];
    setPets(updatedPetArray);
    setShowForm(false);
  }

  function handleDeletePet(id) {
    const updatedPetArray = pets.filter((pet) => pet.id !== id);
    setPets(updatedPetArray);
  }

  function handleUpdatePet() {}

  const handleFormToggle = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="pet-page-container">
      <h1>My Pets</h1>
      <button className="add-pet-btn" onClick={handleFormToggle}>Add Pet</button>
      {showForm && <NewPet onAddPet={handleAddPet} />}
      <hr className="separator" />
      <div className="pet-card-container">
        <PetList pets={pets} onDeletePet={handleDeletePet} onUpdatePet={handleUpdatePet} />
      </div>
    </div>
  );
}

export default PetPage;
