import "./intro.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function Intro() {
  return (
    <section className="allProjectsIntro">

      <div className="allProjectsIntroContainer">

        <div className="allProjectsContent">

          <span className="section-label">
            All Projects
          </span>

          <h2>
            Building Ideas
            <br />
            Into Reality
          </h2>

          <p>
            Discover innovative projects developed by students,
            mentors and innovators across Artificial Intelligence,
            Robotics, IoT, Electronics, Design Thinking,
            Sustainability and emerging technologies.
          </p>

          <Link
            to="/contact"
            className="allProjectsBtn"
          >
            Start Your Project
            <FiArrowRight />
          </Link>

        </div>

        <div className="allProjectsImage">

          <img
            src="/images/projects/all-projects.jpg"
            alt="Projects"
          />

        </div>

      </div>

    </section>
  );
}