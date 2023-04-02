import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function PostPet() {
  // Declare states for each input field
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [description, descriptionchange] = useState("");
  const [image, imagechange] = useState("");
  const [medical_history, medical_historychange] = useState("");
  const [age, agechange] = useState("");
  const [breed, breedchange] = useState("");
  

  const navigate = useNavigate();

  // Function to handle form submission
  const handlesubmit = (e) => {
    e.preventDefault();

    const petdata = {name, description,  image, medical_history, age, breed};

    fetch("/pets", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(petdata),
    })
      .then((res) => {
        
        alert("Saved Successfully");

        navigate("/petlist");
      })
      .catch((err) => {
        
        console.log(err.message);
      });
  };

  return (
    <div className="pet-container">
      <form className="container" onSubmit={handlesubmit}>
        <div className="cards">
          <div className="card-title">
            <h2>Add a Pet</h2>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="columns">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    required
                    value={name}
                    onChange={(e) => namechange(e.target.value)}
                    className="form-control"
                  ></input>
                  {name.length == 0 && (
                    <span className="text-danger">Enter pets Title!!</span>
                  )}
                </div>
              </div>

              <div className="colums">
                <div className="form-group">
                  <label> Description</label>
                  <textarea
                    value={description}
                    onChange={(e) => descriptionchange(e.target.value)}
                    className="form-control"
                  ></textarea>
                </div>
              </div>
              <div className="colums">
                <div className="form-group">
                  <label> breed</label>
                  <textarea
                    value={breed}
                    onChange={(e) => breedchange(e.target.value)}
                    className="form-control"
                  ></textarea>
                </div>
              </div>
              <div className="colums">
                <div className="form-group">
                  <label> image</label>
                  <textarea
                    value={image}
                    onChange={(e) => imagechange(e.target.value)}
                    className="form-control"
                  ></textarea>
                </div>
              </div>

              <div className="colums">
                <div className="form-group">
                  <label> age</label>
                  <textarea
                    value={age}
                    onChange={(e) => agechange(e.target.value)}
                    className="form-control"
                  ></textarea>
                </div>
              </div>

              <div className="colums">
                <div className="form-group">
                  <label>medical_history</label>
                  <input
                    required
                    value={medical_history}
                    onChange={(e) => medical_historychange(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="columns">
                <div className="form-group">
                  <button
                    to="/petlist"
                    className="btns"
                    type="submit"
                  >
                    Save
                  </button>
                  <Link to="/petlist" className="btns">
                    Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PostPet;