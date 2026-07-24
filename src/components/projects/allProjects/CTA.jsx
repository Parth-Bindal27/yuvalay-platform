import "./cta.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function CTA() {
  return (
    <section className="projectsCTA">

      <div className="projectsCTAContainer">

        <span className="section-label">
          Build With Us
        </span>

        <h2>
          Have an Idea?
          <br />
          Let's Build It Together
        </h2>

        <p>
          Join Yuvalay Makerspace and transform your innovative
          ideas into impactful real-world solutions with guidance,
          mentorship and modern prototyping facilities.
        </p>

        <Link
          to="/contact"
          className="projectsPrimaryBtn"
        >
          Get Started
          <FiArrowRight />
        </Link>

      </div>

    </section>
  );
}