import "./cta.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function CTA() {
  return (
    <section className="successCTA">

      <div className="successCTAContainer">

        <span className="section-label">
          Your Story Starts Here
        </span>

        <h2>
          Build, Learn &
          <br />
          Inspire Others
        </h2>

        <p>
          Join Yuvalay Makerspace and become part of a growing community
          of innovators creating meaningful impact through technology.
        </p>

        <Link
          to="/contact"
          className="successPrimaryBtn"
        >
          Join the Community
          <FiArrowRight />
        </Link>

      </div>

    </section>
  );
}