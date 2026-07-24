import "./cta.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function CTA() {
  return (
    <section className="startupShowcaseCTA">

      <div className="startupShowcaseCTAContainer">

        <span className="section-label">
          Launch Your Startup
        </span>

        <h2>
          Build the Next
          <br />
          Big Innovation
        </h2>

        <p>
          Whether you're validating an idea or scaling a startup,
          Yuvalay provides the space, mentorship and community to
          help you succeed.
        </p>

        <Link
          to="/contact"
          className="startupShowcasePrimaryBtn"
        >
          Apply Now
          <FiArrowRight />
        </Link>

      </div>

    </section>
  );
}