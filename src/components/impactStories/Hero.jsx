import "./hero.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="impactHero">

      <div className="impactHero-glow"></div>

      <div className="impactHero-container">

        <span className="impactHero-tag">
          ✨ Impact Stories
        </span>

        <h1>
          Every Story Starts
          <br />
          With
          <span> One Bold Idea.</span>
        </h1>

        <p>
          Discover how learners, mentors and innovators transformed
          curiosity into meaningful projects that created lasting impact.
        </p>

        <div className="impactHero-buttons">

          <Link
            to="/projects"
            className="impactPrimaryBtn"
          >
            Explore Stories
            <FiArrowRight />
          </Link>

          <Link
            to="/programs"
            className="impactSecondaryBtn"
          >
            Join Yuvalay
          </Link>

        </div>

      </div>

    </section>
  );
}