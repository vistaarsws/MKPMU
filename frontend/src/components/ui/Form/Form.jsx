import React, { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import damPicture from "../../../assets/images/dam.jpg";
import ReCAPTCHA from "react-google-recaptcha";
import "./Form.css";

const containsHTML = (value) => /<\/?[^>]+(>|$)/.test(value); // Regex to detect HTML tags

// ✅ Validation Schema (Prevents HTML input)
const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(3, "Full name must be at least 3 characters.")
    .test(
      "no-html",
      "HTML tags are not allowed.",
      (value) => !containsHTML(value)
    )
    .required("Full name is required."),
  email: Yup.string()
    .email("Invalid email format.")
    .test(
      "no-html",
      "HTML tags are not allowed.",
      (value) => !containsHTML(value)
    )
    .required("Email is required."),
  message: Yup.string()
    .min(10, "Message should be at least 10 characters.")
    .test(
      "no-html",
      "HTML tags are not allowed.",
      (value) => !containsHTML(value)
    )
    .required("Message cannot be empty."),
  honeypot: Yup.string(), // Hidden honeypot field for spam protection
});

export default function Form() {
  const form = useRef();
  const recaptchaRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  // ✅ Ensure reCAPTCHA loads properly
  useEffect(() => {
    window.recaptchaCallback = function (token) {
      document.getElementById("g-recaptcha-response").value = token;
    };
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.grecaptcha) {
        setRecaptchaReady(true);
        console.log("✅ reCAPTCHA Loaded Successfully!");
      } else {
        console.error("❌ reCAPTCHA failed to load.");
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // ✅ Handle Form Submission
  const onSubmit = async (data) => {
    const token = recaptchaRef.current.getValue();

    if (data.honeypot) {
      console.warn("🚨 Spam bot detected! Submission blocked.");
      return;
    }

    if (!recaptchaReady) {
      alert("⚠️ reCAPTCHA is not ready yet. Please wait.");
      return;
    }

    // ✅ Retrieve the reCAPTCHA token
    // const token = window.grecaptcha.getResponse();
    if (!token) {
      alert("⚠️ Please complete the reCAPTCHA verification.");
      return;
    }

    // ✅ Attach reCAPTCHA token to the form
    // document.getElementById("g-recaptcha-response").value = token;

    setIsSubmitting(true);

    try {

      // ✅ Send form data via EmailJS
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          limitRate: {
            id: "contact-form", // Throttle for this specific form
            throttle: 60000, // 1 minute (60000ms)
          },
        }
      );

      console.log("🎉 SUCCESS!", result.text);
      alert("✅ Message sent successfully!");
      reset();
      window.grecaptcha.reset(); // ✅ Reset reCAPTCHA after submission
    } catch (error) {
      console.error("❌ FAILED...", error);
      alert(error.text);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="formSection">
      <figure>
        <img src={damPicture} alt="Dam Picture" />
      </figure>
      <form
        id="contact-form"
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
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

        {/* ✅ Hidden input for reCAPTCHA token */}
        {/* <input
          type="hidden"
          {...register("g-recaptcha-response")}
          id="g-recaptcha-response"
        /> */}

        {/* ✅ Google reCAPTCHA v2 Checkbox */}
        {/* <div
          className="g-recaptcha"
          data-sitekey={siteKey}
          ref={recaptchaRef}
          data-callback="recaptchaCallback"
        ></div> */}

        <ReCAPTCHA sitekey={siteKey} ref={recaptchaRef} />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
