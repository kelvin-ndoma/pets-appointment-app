

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function PetList() {
  const [petdata, petdatachange] = useState(null);
  const navigate = useNavigate();

  const LoadEdit = (id) => {
    navigate("/pets/edit/" + id);
  };

  const LoadDetail = (id) => {
    navigate("/pets/details/" + id);
  };

  const Removefunction = (id) => {
    if (window.confirm("Confirm You Want To Delete Pet?")) {
      fetch("/pets/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Pet Removed Successfully");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  //fetching data to show all the pets
  useEffect(() => {
    fetch("/pets")
      .then((res) => res.json())
      .then((resp) => {
        petdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Pets List</h2>
          <Link to="/pet/post/" className="cta-button">
            Add a pet
          </Link>
        </div>
        <div className="card-body">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {petdata &&
              petdata.map((pet) => (
                <div className="col" key={pet.id}>
                  <div className="card h-100" style={{ backgroundColor: "#FBA633" }}>
                    <div className="card-body">
                      <h5 className="card-title">{pet.image}</h5>
                      <p className="card-text">{pet.name}</p>
                      <p className="card-text">Medical History: {pet.medical_history}</p>
                      <p className="card-text">Age: {pet.medical_history}</p>
                      <h1 className="card-body">description: {pet.description}</h1>
                      <div className="d-flex justify-content-center">
                        <div className="btn-group">
                          <button
                            onClick={() => {
                              LoadDetail(pet.id);
                            }}
                            type="button"
                            className="btn btn-sm btn-primary me-2"
                          >
                            Details
                          </button>
                          <button
                            onClick={() => {
                              LoadEdit(pet.id);
                            }}
                            type="button"
                            className="btn btn-sm btn-secondary me-2"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => {
                              Removefunction(pet.id);
                            }}
                            type="button"
                            className="btn btn-sm btn-danger"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetList;
