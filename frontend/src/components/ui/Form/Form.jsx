import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import damPicture from "../../../assets/images/dam.jpg";
import "./Form.css";

export default function Form() {
  const form = useRef();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // ✅ Prevent spam submissions

  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (formData.fullName.length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters long.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message should be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!validateForm() || isSubmitting) {
      return; // ✅ Stop if form is invalid or already submitting
    }

    setIsSubmitting(true); // ✅ Disable form submission

    try {
      const result = await emailjs.sendForm(
        "service_qam8xa6",
        "template_hv958jt",
        form.current,
        "4SqkT4v1qR72qrYOX"
      );

      console.log("SUCCESS!", result.text);

      // ✅ Show alert and wait for user confirmation
      await new Promise((resolve) => {
        alert("Message sent successfully!");
        resolve();
      });

      // ✅ Reset form AFTER alert is closed
      setFormData({ fullName: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      console.log("FAILED...", error.text);
      alert("Message failed to send. Please try again later.");
    } finally {
      setIsSubmitting(false); // ✅ Re-enable form submission
    }
  };

  return (
    <section className="formSection">
      <figure>
        <img src={damPicture} alt="Dam Picture" />
      </figure>
      <form ref={form} onSubmit={sendEmail} noValidate>
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
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <p className="error">{errors.fullName}</p>}
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message">Reason</label>
            <textarea
              name="message"
              id="message"
              placeholder="Tell us your reason for contacting us"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
