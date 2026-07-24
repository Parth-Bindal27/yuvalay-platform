import "./hero.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="innovationHero">

      <div className="innovationHero-glow"></div>

      <div className="innovationHero-container">

        <span className="innovationHero-tag">
          🌐 Innovation Network
        </span>

        <h1>
          Connecting
          <br />
          <span>Ideas.</span> People.
          <br />
          Innovation.
        </h1>

        <p>
          Yuvalay Makerspace brings together students, educators,
          innovators, startups, industries and communities to build
          solutions that create meaningful impact.
        </p>

        <div className="innovationHero-buttons">

          <Link
            to="/contact"
            className="innovationPrimaryBtn"
          >
            Join The Network
            <FiArrowRight />
          </Link>

          <Link
            to="/about/people-who-build"
            className="innovationSecondaryBtn"
          >
            Meet Our Community
          </Link>

        </div>

      </div>

    </section>
  );
}