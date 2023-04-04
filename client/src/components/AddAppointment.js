import React, { useState } from "react";

function AddAppointment({ user, empid, setAppointments, appointments }) {
  const [appointmentData, setAppointmentData] = useState({
    appointment_reason: "",
    notes: "",
    start_time: "",
    end_time: "",
    pet_id: "",
  });

  const handleChange = (event) => {
    setAppointmentData({
      ...appointmentData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!appointmentData.pet_id) {
      alert("Please select a pet for the appointment.");
      return;
    }

    fetch(`/appointments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...appointmentData,
        user_id: user.id,
      }),
    })
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        setAppointmentData({
          appointment_reason: "",
          notes: "",
          start_time: "",
          end_time: "",
          pet_id: "",
        });
        setAppointments([...appointments, resp]);
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
            <label>Pet</label>
            <select
              className="form-control"
              name="pet_id"
              value={appointmentData.pet_id}
              onChange={handleChange}
              required
            >
              <option value="">Select a pet</option>
              <option value={empid}>{empid}</option>
            </select>
          </div>
          <div className="form-group">
            <label>Reason</label>
            <input
              type="text"
              className="form-control"
              name="appointment_reason"
              value={appointmentData.appointment_reason}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Notes</label>
            <textarea
              className="form-control"
              name="notes"
              value={appointmentData.notes}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Start Time</label>
            <input
              type="datetime-local"
              className="form-control"
              name="start_time"
              value={appointmentData.start_time}
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
              value={appointmentData.end_time}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddAppointment;
