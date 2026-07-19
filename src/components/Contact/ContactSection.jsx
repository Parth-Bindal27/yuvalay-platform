import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import ContactForm from "./ContactForm";
import "./ContactSection.css";

export default function ContactSection() {
  return (
    <section className="contact-section">

      <div className="contact-bg"></div>

      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="section-tag">Contact Yuvalay</span>

        <h2>
          Let's Create Something
          <br />
          Amazing Together
        </h2>

        <p>
          Whether you're a student, educator, innovator,
          startup or industry partner, we'd love to hear from you.
        </p>
      </motion.div>

      <motion.div
        className="map-card"
        initial={{ opacity: 0, scale: .95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}
      >
        <iframe
          title="Yuvalay Map"
          src="https://www.google.com/maps?q=Vadodara+Innovation+Council&output=embed"
          loading="lazy"
          allowFullScreen
        />

        <div className="map-overlay">
          <div>
            <h3>Yuvalay Makerspace</h3>
            <p>Vadodara Innovation Council, Vadodara, Gujarat</p>
          </div>

          <a
            href="https://maps.google.com/?q=Vadodara+Innovation+Council"
            target="_blank"
            rel="noreferrer"
          >
            Open in Maps →
          </a>
        </div>
      </motion.div>

      <div className="contact-grid">

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <div className="info-card">
            <FaPhoneAlt />
            <div>
              <h4>Phone</h4>
              <p>+91 XXXXX XXXXX</p>
            </div>
          </div>

          <div className="info-card">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <p>info@yuvalay.org</p>
            </div>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt />
            <div>
              <h4>Address</h4>
              <p>
                Vadodara Innovation Council
                <br />
                Yuvalay Makerspace
                <br />
                Vadodara, Gujarat
              </p>
            </div>
          </div>

          <div className="info-card">
            <FaClock />
            <div>
              <h4>Working Hours</h4>
              <p>Monday – Saturday</p>
              <p>9:00 AM – 6:00 PM</p>
            </div>
          </div>

          <div className="social-links">
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>

        </motion.div>

        <ContactForm />

      </div>

    </section>
  );
}

