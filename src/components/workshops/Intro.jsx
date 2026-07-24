import "./intro.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function Intro() {
  return (
    <section className="workshopIntro">

      <div className="workshopIntroContainer">

        <div className="workshopIntroContent">

          <span className="section-label">
            Workshops
          </span>

          <h2>
            Learn by Building,
            <br />
            Create by Doing
          </h2>

          <p>
            Yuvalay Workshops offer practical learning experiences in AI,
            Robotics, Coding, IoT, Design Thinking and emerging technologies
            through expert-led hands-on sessions.
          </p>

          <Link
            to="/contact"
            className="workshopIntroBtn"
          >
            Register Now
            <FiArrowRight />
          </Link>

        </div>

        <div className="workshopIntroImage">

          <img
            src="/images/programs/workshop.jpg"
            alt="Workshops"
          />

        </div>

      </div>

    </section>
  );
}