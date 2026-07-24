import "./journeyHighlight.css";
import { FiArrowRight } from "react-icons/fi";

export default function JourneyHighlight() {
  return (
    <section className="journeyHighlight">

      <div className="journeyHighlight-container">

        <div className="journeyHighlight-image">

          <img
            src="/images/impact/highlight.jpg"
            alt="Impact Journey"
          />

        </div>

        <div className="journeyHighlight-content">

          <span className="section-label">
            Journey Highlight
          </span>

          <h2>
            One Workshop.
            <br />
            One Mentor.
            <br />
            <span>One Life Changed.</span>
          </h2>

          <p>
            What started as a simple workshop became the beginning of an
            innovation journey. Through mentorship, collaboration and
            continuous experimentation, ideas evolved into impactful
            solutions that continue to inspire others.
          </p>

          <button>

            Read Full Story

            <FiArrowRight />

          </button>

        </div>

      </div>

    </section>
  );
}