import React, { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import damPicture from "../../../assets/images/dam.jpg";
import "./Form.css";

// 🔹 Validation Schema using Yup
const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(3, "Full name must be at least 3 characters.")
    .required("Full name is required."),
  email: Yup.string()
    .email("Invalid email format.")
    .required("Email is required."),
  message: Yup.string()
    .min(10, "Message should be at least 10 characters.")
    .test(
      "no-html",
      "HTML tags are not allowed.",
      (value) => !/<\/?[a-z][\s\S]*>/i.test(value)
    ) // Prevents XSS
    .required("Message cannot be empty."),
  honeypot: Yup.string(), // Hidden honeypot field (Should be empty)
});

export default function Form() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const RATE_LIMIT = 15000; // 15 seconds
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  // ✅ Ensure reCAPTCHA is loaded
  useEffect(() => {
    if (window.grecaptcha) {
      setRecaptchaReady(true);
    } else {
      window.onload = () => setRecaptchaReady(true);
    }
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // 🔹 Handle Form Submission
  const onSubmit = async (data) => {
    if (data.honeypot) {
      console.warn("Spam bot detected! Submission blocked.");
      return;
    }

    // 🛑 Rate Limiting
    const lastSubmitTime = localStorage.getItem("lastSubmitTime") || 0;
    const currentTime = Date.now();
    if (currentTime - lastSubmitTime < RATE_LIMIT) {
      alert("Please wait before submitting again.");
      return;
    }

    // 🛑 Ensure reCAPTCHA is ready
    if (!recaptchaReady || !window.grecaptcha) {
      alert("reCAPTCHA is not ready yet. Please try again.");
      return;
    }

    setIsSubmitting(true);

    try {
      // ✅ Execute reCAPTCHA v3
      const token = await window.grecaptcha.execute(siteKey, {
        action: "submit",
      });
      if (!token) {
        alert("reCAPTCHA verification failed. Please try again.");
        setIsSubmitting(false);
        return;
      }
      console.log("reCAPTCHA Token:", token);

      const formData = new FormData(form.current);
      formData.append("g-recaptcha-response", token);

      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("SUCCESS!", result.text);
      alert("Message sent successfully!");
      reset();
      localStorage.setItem("lastSubmitTime", currentTime);
    } catch (error) {
      console.error("FAILED...", error);
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
      <form ref={form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <h1>Contact Us</h1>
        <p>To know more about the project or for any enquiries, contact us.</p>

        {/* ✅ Hidden honeypot field for spam protection */}
        <input
          type="text"
          {...register("honeypot")}
          style={{ display: "none" }}
        />

        <div>
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              {...register("fullName")}
              placeholder="Enter your full name"
              id="fullName"
            />
            {errors.fullName && (
              <p className="error">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter your email"
              id="email"
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="message">Reason</label>
            <textarea
              {...register("message")}
              id="message"
              placeholder="Tell us your reason for contacting us"
            />
            {errors.message && (
              <p className="error">{errors.message.message}</p>
            )}
          </div>
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
