import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Appointment from "../Appointment";


function UserPets() {
  const [user, setUser] = useState({});
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("/users/show");
      const data = await response.json();
      setUser(data);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchPets = async () => {
      const response = await fetch(`/users/${user.id}/pets`);
      const data = await response.json();
      setPets(data);
    };
    if (user.id) {
      fetchPets();
    }
  }, [user]);

  return (
    <div className="container">
      <h1>My Pets</h1>
      <div className="row mb-3">
        <div className="col">
          <Link to={`/users/${user.id}/appointments`} className="btn btn-primary">
            <Appointment/>
          </Link>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {pets.map((pet) => (
          <div className="col" key={pet.id}>
            <div className="card flex-fill">
              <img src={pet.image} className="card-img-top" alt={pet.name} />
              <div className="card-body">
                <h5 className="card-title">Name: {pet.name}</h5>
                <p className="card-text">Description: {pet.description}</p>
                <p className="card-text">
                  Medical History: {pet.medical_history}
                </p>
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

export default UserPets;
