import React, { useState } from "react";
import './NewPet.css';

function NewPet({ onAddPet, userId }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [breed, setBreed] = useState("");
  const [medical_history, setMedicalHistory] = useState("");
  const [age, setAge] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!image) {
      alert("Please provide an image for your pet!");
      return;
    }

    fetch("/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pet: {
          name,
          image,
          breed,
          medical_history,
          age,
          description,
          user_id: userId,
        },
      }),
    })
      .then((r) => r.json())
      .then((newPet) => {
        onAddPet(newPet);
        setName("");
        setImage("");
        setBreed("");
        setMedicalHistory("");
        setAge("");
        setDescription("");
      });
  }

  return (
    <div className="addpet-container">
      <form onSubmit={handleSubmit} className="addpet-form">
  <h3 className="mb-4">Add a New Pet</h3>
  <div className="addpet-inputs">
    <div className="addpet-input-group mb-3">
      <input
        type="text"
        name="name"
        placeholder="Pet name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="form-control"
      />
      <input
        type="url"
        name="image"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
        className="form-control"
      />
    </div>
    <div className="addpet-input-group mb-3">
      <input
        type="text"
        name="breed"
        placeholder="Breed"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
        required
        className="form-control"
      />
      <input
        type="text"
        name="medical_history"
        placeholder="Medical history"
        value={medical_history}
        onChange={(e) => setMedicalHistory(e.target.value)}
        required
        className="form-control"
      />
    </div>
    <div className="addpet-input-group mb-3">
      <input
        type="text"
        name="age"
        placeholder="Pet age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
        className="form-control"
      />
      <input
        type="text"
        name="description"
        placeholder="About the pet"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="form-control"
      />
    </div>
  </div>
  <button type="submit" className="addpet-btn">
    New Pet
  </button>
</form>
    </div>
  );
}

export default NewPet;
