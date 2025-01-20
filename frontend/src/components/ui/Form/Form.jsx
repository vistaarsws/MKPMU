import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import damPicture from "../../../assets/images/dam.jpg";
import "./Form.css";

export default function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qam8xa6", // Replace with your EmailJS service ID
        "template_hv958jt", // Replace with your EmailJS template ID
        form.current,
        "4SqkT4v1qR72qrYOX" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Message failed to send. Please try again later.");
        }
      );

    // Reset the form after submission
    e.target.reset();
  };

  return (
    <section className="formSection">
      <figure>
        <img src={damPicture} alt="Dam Picture" />
      </figure>
      <form ref={form} onSubmit={sendEmail}>
        <h1>Contact Us</h1>
        <p>To know more about the project or for any enquiries, contact us.</p>
        <div>
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              id="fullName"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email" // Add name attribute for email field
              placeholder="Enter your email"
              id="email"
              required
            />
          </div>
          <div>
            <label htmlFor="message">Reason</label>
            <textarea
              name="message"
              id="message"
              placeholder="Tell us your reason for contacting us"
              required
            />
          </div>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
