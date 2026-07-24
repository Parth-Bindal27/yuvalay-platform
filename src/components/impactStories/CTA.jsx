import "./cta.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function CTA() {
  return (
    <section className="impactCTA">

      <div className="impactCTA-box">

        <span>✨ Your Story Starts Here</span>

        <h2>
          Ready To Create
          <br />
          Your Own Impact Story?
        </h2>

        <p>
          Join Yuvalay Makerspace, learn emerging technologies, collaborate
          with innovators and turn your ideas into meaningful solutions.
        </p>

        <Link
          to="/programs"
          className="impactCTA-btn"
        >
          Start Your Journey
          <FiArrowRight />
        </Link>

      </div>

    </section>
  );
}