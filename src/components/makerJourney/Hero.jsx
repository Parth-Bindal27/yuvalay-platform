import "./hero.css";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="makerHero">

      <div className="makerHero-bg"></div>

      <div className="makerHero-container">

        <span className="makerHero-tag">
          🚀 Maker Journey
        </span>

        <h1>
          Every Great Innovation
          <br />
          Begins With
          <span> Curiosity.</span>
        </h1>

        <p>
          Learn from mentors, experiment with technology, build innovative
          projects and showcase your ideas to the world.
        </p>

        <div className="makerHero-buttons">

          <Link to="/programs" className="maker-primary-btn">
            Start Your Journey
            <FiArrowRight />
          </Link>

          <Link to="/projects" className="maker-secondary-btn">
            Explore Projects
          </Link>

        </div>

      </div>

    </section>
  );
}