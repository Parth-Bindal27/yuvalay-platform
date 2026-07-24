import "./intro.css";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <section className="schoolIntro">

      <div className="schoolIntroContainer">

        <div className="schoolIntroContent">

          <span className="section-label">
            School Programs
          </span>

          <h2>
            Inspiring Young Innovators
            <br />
            Through Hands-On Learning
          </h2>

          <p>
            Yuvalay's School Programs introduce students to Robotics,
            Artificial Intelligence, Coding, STEM, Electronics and Design
            Thinking through engaging activities, practical experiments and
            real-world projects that make learning exciting.
          </p>

          <Link
            to="/contact"
            className="schoolIntroBtn"
          >
            Partner With Us
            <FiArrowRight />
          </Link>

        </div>

        <div className="schoolIntroImage">

          <img
            src="/images/programs/school.jpg"
            alt="School Programs"
          />

        </div>

      </div>

    </section>
  );
}