import "./hero.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="peopleHero">

      <div className="peopleHero-glow"></div>

      <div className="peopleHero-container">

        <span className="peopleHero-tag">
          👥 People Who Build
        </span>

        <h1>
          Meet The People
          <br />
          Behind
          <span> Every Innovation.</span>
        </h1>

        <p>
          Yuvalay is powered by passionate mentors, makers, innovators and
          volunteers who inspire learners to imagine, create and build
          technology that makes a difference.
        </p>

        <div className="peopleHero-buttons">

          <Link
            to="/about/people"
            className="peoplePrimaryBtn"
          >
            Meet The Team
            <FiArrowRight />
          </Link>

          <Link
            to="/programs"
            className="peopleSecondaryBtn"
          >
            Join Our Community
          </Link>

        </div>

      </div>

    </section>
  );
}