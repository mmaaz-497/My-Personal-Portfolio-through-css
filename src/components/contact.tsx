import React from "react";
import "../app/styles/contact.css"


const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="contact-title">Contact Us</h1>
      </div>
      <div className="contact-intro">
        <p>
          I d love to hear from you! Whether you are interested in working together asking questions or just saying hello feel free to reach out I will get back to you as soon as possible
        </p>
      </div>
      <div className="contact-info">
        <h1>
          <strong>Email:</strong> mmaazjatt497@gmail.com
        </h1>
        <h1>
          <strong>Phone:</strong> 0348-8859462
        </h1>
      </div>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message"></textarea>
        </div>
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
}

export default Contact;
