import React, { useState } from 'react';

function Update({ pet, onUpdatePet }) {
  const [name, setName] = useState(pet ? pet.name : "");
  const [image, setImage] = useState(pet ? pet.image : "");
  const [description, setDescription] = useState(pet ? pet.description : "");
  const [medical_history, setMedicalHistory] = useState(pet ? pet.medical_history : "");
  const [age, setAge] = useState(pet ? pet.age : "");
  const [breed, setBreed] = useState(pet ? pet.breed : "");

  function handleSubmit(event) {
    event.preventDefault();

    const updatedPet = {
      id: pet.id,
      name,
      image,
      description,
      medical_history,
      age,
      breed,
    };

    fetch(`/pets/${pet.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPet),
    }).then((r) => {

      if (r.ok) {
        r.json().then((updatedPet) => onUpdatePet(updatedPet));
      }
    });
  }

  return (
    <div className="update-container">
      <h2>Edit Pet Details</h2>
      <form className="update-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Image:
          <input
            type='text'
            name='image'
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Medical History:
          <textarea
            name='medical_history'
            value={medical_history}
            onChange={(e) => setMedicalHistory(e.target.value)}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type='number'
            name='age'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br />
        <label>
          Breed:
          <input
            type='text'
            name='breed'
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </label>
        <br />
        <button className="update-button" type='submit'>Update Pet</button>
      </form>
    </div>
  );
}

export default Update;
