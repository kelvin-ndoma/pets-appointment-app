import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import AddAppointment from "./AddAppointment";
import "./PetDetails.css"


function PetDetails() {
  const { empid } = useParams();
  const [petdata, setPetData] = useState({});
  const [appointments, setAppointments] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`/pets/${empid}`)
      .then((res) => res.json())
      .then((resp) => {
        setPetData(resp);
        setAppointments(resp.appointments);
      })
      .catch((err) => {
        console.log(err.message);
      });
    fetch(`/appointments`)
      .then((res) => res.json())
      .then((resp) => {
        setUsers(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [empid]);
  const handleDelete = (id) => {
    fetch(`/appointments/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((resp) => {
        setAppointments(resp)(
          appointments.filter((appointment) => appointment.id !== id)
        );
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="petd-container">
      <div className="carded">
        <div className="card-header">
          <h2 className="title-pet">Pet Details</h2>
        </div>
        <div className="card-body">
          {Object.keys(petdata).length > 0 ? (
            <> <h1>Welcome, see {petdata.name}'s Appointments below!</h1>
              <img src={petdata.image} alt={petdata.name} className="body-rounded" />
              <h3 className="mb-3">Name: {petdata.name}</h3>
              <p className="mb-3">Age: {petdata.age}</p>
              <p className="mb-3">Breed: {petdata.breed}</p>
              <p className="mb-3">Medical history: {petdata.medical_history}</p>
              <h4 className="mb-3">See Appointments</h4>
              {appointments.length > 0 ? (
                appointments.map((appointment) => (
                  <div className="card-appointment" key={appointment.id}>
                    <div className="card-body">
                      <h5 className="card-title">Reason:{appointment.appointment_reason}</h5>
                      <p className="card-text">Notes:{appointment.notes}</p>
                      <p className="card-text">Starts at: {appointment.start_time}</p>
                      <p className="card-text">Ends at: {appointment.end_time}</p>
                      <button className="btn-appointment" onClick={() => handleDelete(appointment.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p>No appointments yet.</p>
              )}
              <div className="text-center">
                <Link to="/petlist" className="btn-back">
                  Back to Pets
                </Link>
                {/* <AddAppointment
                  petId={petdata.id}
                  setAppointments={setAppointments}
                  appointments={appointments}
                  users={users}
                /> */}
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PetDetails;