import React, { useState } from "react";
import Header from "./Header";

function Bookings() {
  const [clientName, setClientName] = useState("");
  const [day, setDay] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [styleChoice, setStyleChoice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset form fields
    setClientName("");
    setDay("");
    setTimeSlot("");
    setPhoneNumber("");
    setStyleChoice("");
  };

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const timeSlots = [
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 1:00 PM",
    "1:00 PM - 2:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
    "5:00 PM - 6:00 PM",
    "6:00 PM - 7:00 PM",
    "7:00 PM - 8:00 PM",
  ];

  return (
    // I need to include ternary after form is submitted //after the card buttons
    <div>
      <Header
        pageHeader={"Book Appointment"}
        headerSupport={"We Call. You Confirm."}
      />
      <div className="container shadow-lg p-4 bg-white rounded">
        <h3 style={{ textAlign: "center" }}>Enter your preferences.</h3>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="day" className="form-label">
                Day
              </label>
              <select
                className="form-select"
                id="day"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                required
              >
                <option value="">Select a day</option>
                {daysOfWeek.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="timeSlot" className="form-label">
                Time Slot
              </label>
              <select
                className="form-select"
                id="timeSlot"
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                required
              >
                <option value="">Select a time slot</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="clientName" className="form-label">
              Client Name
            </label>
            <input
              type="text"
              className="form-control"
              id="clientName"
              placeholder="provide your full name"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              placeholder="Use dashes. Example: 000-000-0000"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="styleChoice" className="form-label">
              Style of Choice
            </label>
            <input
              type="text"
              className="form-control"
              id="styleChoice"
              placeholder=" Unsure? Check out our Inspiration Board!"
              value={styleChoice}
              onChange={(e) => setStyleChoice(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-outline-dark col-12">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Bookings;
