import "./cta.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function CTA() {
  return (
    <section className="makerCTA">

      <div className="makerCTA-box">

        <span>🚀 Ready to Start?</span>

        <h2>
          Begin Your Maker Journey Today
        </h2>

        <p>
          Join Yuvalay Makerspace and transform ideas into meaningful innovations.
        </p>

        <Link to="/programs" className="makerCTA-btn">
          Join a Program
          <FiArrowRight />
        </Link>

      </div>

    </section>
  );
}