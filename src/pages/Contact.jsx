import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footerjsx";
import Swal from "sweetalert2";
import { useSendConcernMutation } from "../redux/features/concerns/concerns.api.js"; // Import the mutation hook

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Use the mutation hook
  const [addConcern, { isLoading }] = useSendConcernMutation();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await addConcern(formData).unwrap(); // Use the mutation hook to send data

      Swal.fire({
        icon: "success",
        title: "Your message has been sent",
        showConfirmButton: false,
        timer: 800,
      });

      setFormData({ name: "", email: "", message: "" }); // Clear the form
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to send message. Please try again later.",
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="contactContainer">
        <h1>Contact Us</h1>
        <form className="contactForm" onSubmit={handleSubmit}>
          <fieldset disabled={isLoading} className="fieldset">
            <div className="formGroup">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                style={{
                  padding: "10px", // Add padding
                  fontSize: "1rem", // Set font size
                  resize: "none",
                }}
              ></textarea>
            </div>
            <button type="submit">
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </fieldset>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
