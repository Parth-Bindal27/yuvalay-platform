import "./cta.css";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPhoneCall } from "react-icons/fi";

export default function CTA() {
  return (
    <section className="schoolCTA">

      <div className="schoolCTAContainer">

        <span className="section-label">
          Get Started
        </span>

        <h2>
          Bring Innovation to
          <br />
          Your School
        </h2>

        <p>
          Partner with Yuvalay Makerspace to provide students with engaging,
          future-ready learning experiences through Robotics, AI, STEM and
          innovation-driven programs.
        </p>

        <div className="schoolCTAButtons">

          <Link
            to="/contact"
            className="schoolPrimaryBtn"
          >
            Contact Us
            <FiArrowRight />
          </Link>

          <Link
            to="/about"
            className="schoolSecondaryBtn"
          >
            <FiPhoneCall />
            Learn More
          </Link>

        </div>

      </div>

    </section>
  );
}