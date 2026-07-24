import "./intro.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function Intro() {
  return (
    <section className="researchIntro">

      <div className="researchIntroContainer">

        <div className="researchIntroContent">

          <span className="section-label">
            Research & Innovation
          </span>

          <h2>
            Where Curiosity
            <br />
            Becomes Innovation
          </h2>

          <p>
            Yuvalay fosters a culture of research, experimentation and
            innovation by encouraging learners to solve real-world
            challenges through emerging technologies.
          </p>

          <Link
            to="/contact"
            className="researchIntroBtn"
          >
            Collaborate With Us
            <FiArrowRight />
          </Link>

        </div>

        <div className="researchIntroImage">

          <img
            src="/images/projects/research.jpg"
            alt="Research & Innovation"
          />

        </div>

      </div>

    </section>
  );
}