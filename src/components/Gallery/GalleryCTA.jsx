import { motion } from "framer-motion";
import { FaArrowRight, FaImages } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./GalleryCTA.css";

export default function GalleryCTA() {
  return (
    <section className="gallery-cta">

      <div className="cta-glow glow-one"></div>
      <div className="cta-glow glow-two"></div>

      <motion.div
        className="gallery-cta-card"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        <div className="cta-icon">
          <FaImages />
        </div>

        <span className="section-tag">
          Become Part Of Our Story
        </span>

        <h2>
          Ready To Create
          Your Own Memories?
        </h2>

        <p>
          Join inspiring workshops, innovation challenges,
          hackathons and community events at Yuvalay Makerspace.
          Your next unforgettable experience begins here.
        </p>

        <div className="cta-buttons">

          <Link
            to="/events"
            className="primary-btn"
          >
            Explore Events
            <FaArrowRight />
          </Link>

          <Link
            to="/contact"
            className="secondary-btn"
          >
            Contact Us
          </Link>

        </div>

      </motion.div>

    </section>
  );
}