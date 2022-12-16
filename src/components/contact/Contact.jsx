import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact">
        <a className="contact-item email" href="mailto:farzinmoha@gmail.com">EMAIL :farzinmoha@gmail.com</a>
        <a className="contact-item phone" href="tel:+905528819132">PHONE: +905528819132</a>
      </div>
    </div>
  );
};

export default Contact;
