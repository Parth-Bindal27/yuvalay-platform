import "./JoinMovement.css";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaHandsHelping,
  FaHandshake,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function JoinMovement() {
  return (
    <section className="joinMovement">

      <div className="joinBlur blurOne"></div>
      <div className="joinBlur blurTwo"></div>

      <div className="joinContainer">

        <motion.div
          className="joinContent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <span className="joinBadge">
            JOIN THE MOVEMENT
          </span>

          <h2>

            Let's Build
            <span> The Future </span>
            Together

          </h2>

          <p>

            Whether you're a student, educator, volunteer, startup,
            organization or industry partner, there's a place for you
            at Yuvalay. Together we can inspire innovation, empower
            communities and create meaningful impact.

          </p>

          <div className="joinButtons">

            <Link
              to="/contact"
              className="primaryJoinBtn"
            >

              <FaHandsHelping />

              Become a Volunteer

              <FaArrowRight />

            </Link>

            <Link
              to="/contact"
              className="secondaryJoinBtn"
            >

              <FaHandshake />

              Partner With Us

            </Link>

            <Link
              to="/contact"
              className="outlineJoinBtn"
            >

              <FaEnvelope />

              Contact Us

            </Link>

          </div>

        </motion.div>

        <motion.div
          className="joinCards"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div className="joinGlassCard">

            <h3>Why Join Yuvalay?</h3>

            <ul>

              <li>✔ Hands-on Innovation Programs</li>

              <li>✔ Industry Mentorship</li>

              <li>✔ Startup & Maker Community</li>

              <li>✔ Workshops & Hackathons</li>

              <li>✔ Leadership Opportunities</li>

              <li>✔ Real-World Project Experience</li>

            </ul>

          </div>

        </motion.div>

      </div>

    </section>
  );
}