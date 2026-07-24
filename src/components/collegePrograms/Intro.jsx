import "./intro.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function Intro() {
  return (
    <section className="collegeIntro">

      <div className="collegeIntroContainer">

        <div className="collegeIntroContent">

          <span className="section-label">
            College Programs
          </span>

          <h2>
            Empowering Students
            <br />
            Beyond the Classroom
          </h2>

          <p>
            Yuvalay's College Programs help students develop industry-ready
            skills through AI, Robotics, IoT, Hackathons, Innovation Challenges,
            Research Projects and Startup exposure.
          </p>

          <Link
            to="/contact"
            className="collegeIntroBtn"
          >
            Collaborate With Us
            <FiArrowRight />
          </Link>

        </div>

        <div className="collegeIntroImage">

          <img
            src="/images/programs/college.jpg"
            alt="College Programs"
          />

        </div>

      </div>

    </section>
  );
}