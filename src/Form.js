import React, { useState } from "react";
import "./App.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("✅ Form Submitted:", formData);
    alert("Thank you, " + formData.name + "! Your message has been sent.");
  };

  return (
    <div className="form-container">
      <h2>Contact Us 💬</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="👤 Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="📧 Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="📝 Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">🚀 Submit</button>
      </form>
    </div>
  );
};

export default Form;
