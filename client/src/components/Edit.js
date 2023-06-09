import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Edit() {
  const { empid } = useParams();

  useEffect(() => {
    fetch(`/pets/${empid}`)
      .then((res) => res.json())
      .then((resp) => {
        idchange(resp.id);
        namechange(resp.name);
        descriptionchange(resp.description);
        imagechange(resp.image);
        breedchange(resp.breed);
        agechange(resp.age);
        medical_historychange(resp.medical_history);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [empid]);

  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [description, descriptionchange] = useState("");
  const [image, imagechange] = useState("");
  const [breed, breedchange] = useState("");
  const [age, agechange] = useState("");
  const [medical_history, medical_historychange] = useState("");
 
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();

    const petdata = { id, name, image, breed, description,age,medical_history };

    fetch(`/pets/${empid}`, {
      method: "PATCH",
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
    <div className="d-flex justify-content-center align-items-center vh-60">
      <form className="container" onSubmit={handlesubmit}>
        <div className="card p-3">
          <div className="card=title">
            <h2>Add a Pet</h2>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Name</label>
                  <textarea
                    required
                    value={name}
                    onChange={(e) => namechange(e.target.value)}
                    className="form-control"
                  ></textarea>
                 
                </div>
              </div>

              <div className="col-lg-12">
                <div className="form-group">
                  <label> Description</label>
                  <textarea
                    value={description}
                    onChange={(e) => descriptionchange(e.target.value)}
                    className="form-control"
                  ></textarea>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="form-group">
                  <label> image</label>
                  <textarea
                    value={image}
                    onChange={(e) => imagechange(e.target.value)}
                    className="form-control"
                  ></textarea>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label> breed</label>
                  <textarea
                    value={breed}
                    onChange={(e) => breedchange(e.target.value)}
                    className="form-control"
                  ></textarea>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label> age</label>
                  <textarea
                    value={age}
                    onChange={(e) => agechange(e.target.value)}
                    className="form-control"
                  ></textarea>
                </div>
              </div>

              <div className="col-lg-12">
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
              <div className="col-lg-12">
                <div className="form-group">
                  <button
                    to="/petlist"
                    className="btn btn-success"
                    type="submit"
                  >
                    Save
                  </button>
                  <Link to="/petlist" className="btn btn-danger">
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

export default Edit;

