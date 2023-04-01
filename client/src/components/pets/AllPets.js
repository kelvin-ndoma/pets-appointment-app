import React, { useEffect, useState } from "react";

function AllPets() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("/pets")
      .then((res) => res.json())
      .then((data)=> {
        setPets(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {pets.map((pet) => (
          <div className="col" key={pet.id}>
            <div className="card flex-fill">
              <img src={pet.image} className="card-img-top" alt={pet.name} />
              <div className="card-body">
                <h5 className="card-title">Name: {pet.name}</h5>
                <p className="card-text">Description: {pet.description}</p>
                <p className="card-text">Medical History: {pet.medical_history}</p>
                <p className="card-text">Age: {pet.age}</p>
                <p className="card-text">Breed: {pet.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllPets;
