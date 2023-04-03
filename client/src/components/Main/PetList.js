
// import "./Main.css"
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// function PetList() {
//   const [petdata, petdatachange] = useState(null);
//   const navigate = useNavigate();

//   const LoadEdit = (id) => {
//     navigate("/pets/edit/" + id);
//   };

//   const LoadDetail = (id) => {
//     navigate("/pets/details/" + id);
//   };

//   const Removefunction = (id) => {
//     if (window.confirm("Confirm You Want To Delete Pet?")) {
//       fetch("/pets/" + id, {
//         method: "DELETE",
//       })
//         .then((res) => {
//           alert("Pet Removed Successfully");
//           window.location.reload();
//         })
//         .catch((err) => {
//           console.log(err.message);
//         });
//     }
//   };
//   //fetching data to show all the pets
//   useEffect(() => {
//     fetch("/pets")
//       .then((res) => res.json())
//       .then((resp) => {
//         petdatachange(resp);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   }, []);

//   return (
//     <div className="container">
//       <div className="card">
//         <div className="card-title">
//           <h2>Pets List</h2>
//           <Link to="/pets" className="button">
//             Add a pet
//           </Link>
//         </div>
//         <div className="card-body">
//           <div className="row row-cols-1 row-cols-md-3 g-4">
//             {petdata &&
//               petdata.map((pet) => (
//                 <div className="col" key={pet.id}>
//                   <div className="card h-100" >
//                     <div className="cardssss">
//                       <img src={pet.image} />
//                       <p className="card-text">{pet.name}</p>
//                       <p className="card-text">Medical History: {pet.medical_history}</p>
//                       <p className="card-text">Age: {pet.age}</p>
//                       <p className="card-body">Description: {pet.description}</p>
//                       <div className="d-flex justify-content-center">
//                         <div className="btn-group">
//                           <button
//                             onClick={() => {
//                               LoadDetail(pet.id);
//                             }}
//                             type="button"
//                             className="btn"
//                           >
//                             Details
//                           </button>
//                           <button
//                             onClick={() => {
//                               LoadEdit(pet.id);
//                             }}
//                             type="button"
//                             className="btn"
//                           >
//                             Edit
//                           </button>
//                           <button
//                             onClick={() => {
//                               Removefunction(pet.id);
//                             }}
//                             type="button"
//                             className="btn"
//                           >
//                             Delete
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PetList;


// Import the CSS file
import "./Main.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function PetList({user}) {
  const [petdata, petdatachange] = useState(null);
  const navigate = useNavigate();

  const loadEdit = (id) => {
    navigate("/pets/edit/" + id);
  };

  const loadDetail = (id) => {
    navigate("/pets/details/" + id);
  };

  const removeFunction = (id) => {
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
  
  // Fetching data to show all the pets
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
          <Link to="/pets" className="button">
            Add a pet
          </Link>
        </div>
        <div className="card-body">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {petdata &&
              petdata.map((pet) => (
                <div className="col" key={pet.id}>
                  <div className="card h-100">
                    <img
                      src={pet.image}
                      className="card-img-top pet-image"
                      alt={pet.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{pet.name}</h5>
                      <p className="card-text">Medical History: {pet.medical_history}</p>
                      <p className="card-text">Age: {pet.age}</p>
                      <p className="card-text">Description: {pet.description}</p>
                    </div>
                    <div className="card-footer">
                      <div className="d-flex justify-content-center">
                        <div className="btn-contai">
                          <button
                            onClick={() => loadDetail(pet.id)}
                            type="button"
                            className="btns"
                          >
                            Details
                          </button>
                          <button
                            onClick={() => loadEdit(pet.id)}
                            type="button"
                            className="btns"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => removeFunction(pet.id)}
                            type="button"
                            className="btns"
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
