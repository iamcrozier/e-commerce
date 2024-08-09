import react, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const setEmpty = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contactform">
      <form action="">
        <div className="row">
          <input
            onChange={handler}
            value={formData.name}
            type="text"
            name="name"
            autoComplete="0"
            required
            id=""
            placeholder="Name"
          />
        </div>
        <div className="row">
          <input
            onChange={handler}
            value={formData.email}
            type="emeil"
            name="email"
            autoComplete="0"
            required
            id=""
            placeholder="Email"
          />
        </div>
        <div className="row">
          <input
            onChange={handler}
            value={formData.subject}
            type="text"
            name="subject"
            placeholder="Subject"
          />
        </div>
        <div className="row">
          <textarea
            onChange={handler}
            value={formData.message}
            name="message"
            placeholder="Message"
          />
        </div>
        <div className="row submit-btn">
          <button onClick={setEmpty}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
