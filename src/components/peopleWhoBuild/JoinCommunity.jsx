import "./joinCommunity.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function JoinCommunity() {
  return (
    <section className="joinCommunity">

      <div className="joinCommunity-glow"></div>

      <div className="joinCommunity-container">

        <span className="section-label">
          Join Our Community
        </span>

        <h2>
          Become One Of
          <br />
          <span>The People Who Build.</span>
        </h2>

        <p>
          Whether you're a student, mentor, educator or innovator,
          there's a place for you at Yuvalay Makerspace.
        </p>

        <div className="joinCommunity-buttons">

          <Link
            to="/programs"
            className="join-btn"
          >
            Join a Program
            <FiArrowRight />
          </Link>

          <Link
            to="/contact"
            className="contact-btn"
          >
            Contact Us
          </Link>

        </div>

        <div className="joinCommunity-stats">

          <div className="joinStat">
            <h3>1000+</h3>
            <span>Learners</span>
          </div>

          <div className="joinStat">
            <h3>50+</h3>
            <span>Mentors</span>
          </div>

          <div className="joinStat">
            <h3>100+</h3>
            <span>Projects</span>
          </div>

          <div className="joinStat">
            <h3>25+</h3>
            <span>Workshops</span>
          </div>

        </div>

      </div>

    </section>
  );
}