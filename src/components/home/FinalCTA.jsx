// src/components/home/FinalCTA.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  RiArrowRightUpLine,
  RiHeartLine,
  RiCalendarEventLine,
  RiPhoneLine,
  RiSparkling2Line,
} from "react-icons/ri";
import "../../styles/home/finalCTA.css";

export default function FinalCTA() {
  return (
    <section className="final-cta">

      <div className="cta-bg">
        <div className="cta-blob blob1"></div>
        <div className="cta-blob blob2"></div>
        <div className="cta-grid"></div>
      </div>

      <motion.div
        className="cta-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        viewport={{ once: true }}
      >

        <div className="cta-left">

          <span className="section-tag">
            <RiSparkling2Line />
            Start Your Journey
          </span>

          <h2>
            Let's Build
            <br />
            Something
            <span> Extraordinary.</span>
          </h2>

          <p>
            Join a community where ideas become innovations.
            Learn emerging technologies, build impactful
            projects and shape the future with us.
          </p>

          <div className="cta-buttons">

            <Link
              to="/programs"
              className="primary-btn"
            >
              <RiCalendarEventLine />
              Join a Program
            </Link>

            <Link
              to="/volunteer"
              className="secondary-btn"
            >
              <RiHeartLine />
              Become a Volunteer
            </Link>

            <Link
              to="/contact"
              className="glass-btn"
            >
              <RiPhoneLine />
              Contact Us
            </Link>

          </div>

        </div>

        <div className="cta-right">

          <motion.div
            className="floating-card top-card"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            <h3>2500+</h3>
            <span>Students Empowered</span>
          </motion.div>

          <motion.div
            className="floating-card middle-card"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          >
            <h3>500+</h3>
            <span>Projects Built</span>
          </motion.div>

          <motion.div
            className="floating-card bottom-card"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
            }}
          >
            <h3>85+</h3>
            <span>Startups Supported</span>
          </motion.div>

        </div>

      </motion.div>

    </section>
  );
}