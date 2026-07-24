import "./intro.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function Intro() {
  return (
    <section className="startupShowcaseIntro">

      <div className="startupShowcaseContainer">

        <div className="startupShowcaseContent">

          <span className="section-label">
            Startup Showcase
          </span>

          <h2>
            Turning Innovative
            <br />
            Ideas Into Startups
          </h2>

          <p>
            Discover startups nurtured at Yuvalay Makerspace, where
            innovation meets mentorship, prototyping and entrepreneurial
            support to build impactful ventures.
          </p>

          <Link
            to="/contact"
            className="startupShowcaseBtn"
          >
            Build Your Startup
            <FiArrowRight />
          </Link>

        </div>

        <div className="startupShowcaseImage">

          <img
            src="/images/projects/startup-showcase.jpg"
            alt="Startup Showcase"
          />

        </div>

      </div>

    </section>
  );
}