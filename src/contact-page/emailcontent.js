import React, { useRef } from "react";
import emailjs from "emailjs-com";

const EmailContent = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5z7c4ie",
        "template_k6lf8y2",
        form.current,
        "k7_euusBzcjTcBme1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact-containers">
      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail} className="email-placeholder">
          <label>Name</label>
          <input type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="email_id" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" className="button" />
        </form>
      </div>
    </div>
  );
};

export default EmailContent;
