//DONE - Needs CSS
import React, { useState } from "react";

function QuestionForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    question: "",
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3000/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      question: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="contact-info-area">
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={formData.firstName}
          placeholder="First Name"
        ></input>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={formData.lastName}
          placeholder="Last Name"
        ></input>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={formData.email}
          placeholder="Email"
        ></input>
        <input
          type="text"
          name="phoneNumber"
          onChange={handleChange}
          value={formData.phoneNumber}
          placeholder="Phone Number"
        ></input>
      </div>
      <div className="question-area">
        <input
          type="textarea"
          name="question"
          onChange={handleChange}
          value={formData.question}
          placeholder="Ask away..."
        ></input>
        <button type="submit"></button>
      </div>
    </form>
  );
}

export default QuestionForm;
