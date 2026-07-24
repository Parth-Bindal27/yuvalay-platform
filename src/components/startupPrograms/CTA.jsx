import "./cta.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function CTA() {
  return (
    <section className="startupCTA">

      <div className="startupCTAContainer">

        <span className="section-label">
          Ready to Build?
        </span>

        <h2>
          Launch Your Startup
          <br />
          With Yuvalay
        </h2>

        <p>
          Join a community of innovators, entrepreneurs and mentors
          dedicated to building impactful solutions for the future.
        </p>

        <div className="startupCTAButtons">

          <Link
            to="/contact"
            className="startupPrimaryBtn"
          >
            Get Started
            <FiArrowRight />
          </Link>

        </div>

      </div>

    </section>
  );
}