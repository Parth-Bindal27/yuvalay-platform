import "./cta.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function CTA() {
  return (
    <section className="workshopCTA">

      <div className="workshopCTAContainer">

        <span className="section-label">
          Join Our Workshops
        </span>

        <h2>
          Learn New Skills,
          <br />
          Build Your Future
        </h2>

        <p>
          Participate in hands-on workshops designed to inspire creativity,
          innovation and future-ready technical skills.
        </p>

        <div className="workshopCTAButtons">

          <Link
            to="/contact"
            className="workshopPrimaryBtn"
          >
            Register Today
            <FiArrowRight />
          </Link>

        </div>

      </div>

    </section>
  );
}