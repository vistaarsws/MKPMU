import damPicture from "../../../assets/images/dam.jpg";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Form.css";

export default function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qam8xa6", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "4SqkT4v1qR72qrYOX",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <section className="formSection">
        <figure>
          <img src={damPicture} alt="Dam Picture" />
        </figure>
        <form onSubmit={sendEmail}>
          <h1>Contact Us</h1>
          <p>To know more about the project or for any enquiries contact us.</p>
          <div>
            <div>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                id="fullName"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" placeholder="Enter your email" id="email" />
            </div>
            <div>
              <label htmlFor="message">Reason</label>
              <textarea
                name="message"
                id="message"
                placeholder="Tell us your reason for contacting us"
              />
            </div>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </>
  );
}
