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
    honeypot: "", // ✅ Honeypot field to trap bots
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0); // ✅ Rate Limiting

  // ✅ Stronger email regex validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // ✅ Sanitize input to prevent XSS attacks
  const sanitizeInput = (input) => {
    return input.replace(/<[^>]*>?/gm, ""); // Removes HTML tags
  };

  // ✅ Validate form fields
  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (formData.fullName.length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters long.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
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
    setFormData({
      ...formData,
      [e.target.name]: sanitizeInput(e.target.value),
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    // ✅ Prevent spam bots using honeypot field
    if (formData.honeypot) {
      console.warn("Spam bot detected! Submission blocked.");
      return;
    }

    // ✅ Implement Rate Limiting (User must wait 15 seconds before re-submitting)
    const currentTime = Date.now();
    if (currentTime - lastSubmitTime < 15000) {
      alert("Please wait before submitting again.");
      return;
    }

    if (!validateForm() || isSubmitting) {
      return; // ✅ Stop if invalid or already submitting
    }

    setIsSubmitting(true);
    setLastSubmitTime(currentTime);

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("SUCCESS!", result.text);
      alert("Message sent successfully!");

      setFormData({ fullName: "", email: "", message: "", honeypot: "" });
      setErrors({});
    } catch (error) {
      console.log("FAILED...", error.text);
      alert("Message failed to send. Please try again later.");
    } finally {
      setIsSubmitting(false);
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

        {/* ✅ Hidden honeypot field for spam protection */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          style={{ display: "none" }}
        />

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
