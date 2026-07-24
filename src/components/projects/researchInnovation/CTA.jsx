import "./cta.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function CTA() {
  return (
    <section className="researchCTA">

      <div className="researchCTAContainer">

        <span className="section-label">
          Collaborate
        </span>

        <h2>
          Have a Research Idea?
          <br />
          Let's Build It Together
        </h2>

        <p>
          Collaborate with Yuvalay Makerspace to transform research ideas
          into impactful innovations through mentorship, prototyping and
          real-world implementation.
        </p>

        <Link
          to="/contact"
          className="researchPrimaryBtn"
        >
          Start Collaborating
          <FiArrowRight />
        </Link>

      </div>

    </section>
  );
}