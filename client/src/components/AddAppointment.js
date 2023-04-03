import React, { useState } from "react";

function AddAppointment(props) {
  const [appointment, setAppointment] = useState({
    appointment_reason: "",
    notes: "",
    start_time: "",
    end_time: "",
  });

  const handleChange = (event) => {
    setAppointment({
      ...appointment,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`/users/:user_id/pets/:pet_id/appointments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((resp) => {
        props.setAppointments([...props.appointments, resp]);
        setAppointment({
          appointment_reason: "",
          notes: "",
          start_time: "",
          end_time: "",
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  

  return (
    <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title">Add Appointment</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Reason</label>
            <input
              type="text"
              className="form-control"
              name="appointment_reason"
              value={appointment.appointment_reason}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Notes</label>
            <textarea
              className="form-control"
              name="notes"
              value={appointment.notes}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label>Start Time</label>
            <input
              type="datetime-local"
              className="form-control"
              name="start_time"
              value={appointment.start_time}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>End Time</label>
            <input
              type="datetime-local"
              className="form-control"
              name="end_time"
              value={appointment.end_time}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddAppointment;
