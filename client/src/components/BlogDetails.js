import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AddAppointment from "./AddAppointment";

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
        setAppointments(
          appointments.filter((appointment) => appointment.id !== id)
        );
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="container mt-5">
      <div className="card p-3">
        <div className="card-title">
          <h2>Pet Details</h2>
        </div>
        <div className="card-body">
          {Object.keys(petdata).length > 0 ? (
            <>
              <h3>name: {petdata.name}</h3>
              <h4>Description: {petdata.description}</h4>
              <p>image: {petdata.image}</p>
              <p>age: {petdata.age}</p>
              <p>breed: {petdata.breed}</p>
              <p>medical_history: {petdata.medical_history}</p>
              <div>
                <h4>Appointments:</h4>
                {appointments.length > 0 ? (
                  appointments.map((appointment) => {
                    const user = users.find(
                      (user) => user.id === appointment.user_id
                    );
                    return (
                      <div className="card my-3" key={appointment.id}>
                        <div className="card-body">
                          <h5 className="card-title">
                            {appointment.appointment_reason}
                          </h5>
                          <p className="card-text">{appointment.notes}</p>
                          <p className="card-text">
                            By: {appointment.start_time}
                          </p>
                          <p className="card-text">
                            end: {appointment.end_time}
                          </p>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(appointment.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p>No appointment yet.</p>
                )}
                <div className="text-center">
                  <AddAppointment
                    petId={petdata.id}
                    setAppointments={setAppointments}
                    appointments={appointments}
                    users={users}
                  />
                  <Link to="/petlist" className="btn btn-primary">
                    Back to pets
                  </Link>
                </div>
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
