import "./cta.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function CTA() {
  return (
    <section className="schoolCTA">

      <div className="schoolCTAContainer">

        <span className="section-label">
          Join the Innovation Journey
        </span>

        <h2>
          Prepare for
          <br />
          Tomorrow's Careers
        </h2>

        <p>
          Collaborate with Yuvalay Makerspace to bring innovation,
          entrepreneurship and emerging technologies to your campus.
        </p>

        <div className="schoolCTAButtons">

          <Link
            to="/contact"
            className="schoolPrimaryBtn"
          >
            Get Started
            <FiArrowRight />
          </Link>

        </div>

      </div>

    </section>
  );
}