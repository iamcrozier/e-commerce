import React from "react";
import "./CSS/Contact.css";
import ContactForm from "../Components/ContactForm/ContactForm.jsx";

const Contact = () => {
  return (
    <div>
      <h1 className="heading">Contact form</h1>
      <div className="contact">
        
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
