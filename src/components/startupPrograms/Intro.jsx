import "./intro.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function Intro() {
  return (
    <section className="startupIntro">

      <div className="startupIntroContainer">

        <div className="startupIntroContent">

          <span className="section-label">
            Startup Programs
          </span>

          <h2>
            Turning Innovative
            <br />
            Ideas into Reality
          </h2>

          <p>
            Yuvalay supports aspiring entrepreneurs through mentorship,
            incubation, networking opportunities and innovation-driven
            programs that help transform ideas into impactful ventures.
          </p>

          <Link
            to="/contact"
            className="startupIntroBtn"
          >
            Partner With Us
            <FiArrowRight />
          </Link>

        </div>

        <div className="startupIntroImage">

          <img
            src="/images/programs/startup.jpg"
            alt="Startup Programs"
          />

        </div>

      </div>

    </section>
  );
}