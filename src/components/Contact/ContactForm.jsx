import { motion } from "framer-motion";
import { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    alert("Thank you! Your message has been sent.");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <motion.div
      className="contact-form-card"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: .7 }}
      viewport={{ once: true }}
    >
      <div className="form-header">
        <span className="section-tag">
          Get in Touch
        </span>

        <h3>Send us a Message</h3>

        <p>
          We'd love to hear your ideas, questions,
          partnership proposals or feedback.
        </p>
      </div>

      <form onSubmit={handleSubmit}>

        <div className="input-group">

          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder=" "
          />

          <label>Full Name</label>

        </div>

        <div className="input-group">

          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder=" "
          />

          <label>Email Address</label>

        </div>

        <div className="input-group">

          <input
            type="text"
            name="subject"
            required
            value={form.subject}
            onChange={handleChange}
            placeholder=" "
          />

          <label>Subject</label>

        </div>

        <div className="input-group">

          <textarea
            rows="6"
            name="message"
            required
            value={form.message}
            onChange={handleChange}
            placeholder=" "
          />

          <label>Your Message</label>

        </div>

        <button
          type="submit"
          className="send-btn"
        >
          Send Message →
        </button>

      </form>
    </motion.div>
  );
}