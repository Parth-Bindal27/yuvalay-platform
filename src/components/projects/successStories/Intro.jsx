import "./intro.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function Intro() {
  return (
    <section className="successIntro">

      <div className="successIntroContainer">

        <div className="successIntroContent">

          <span className="section-label">
            Success Stories
          </span>

          <h2>
            Every Success
            <br />
            Starts With One Idea
          </h2>

          <p>
            Meet the students, innovators, entrepreneurs and makers
            who transformed ideas into impactful projects and successful
            careers through Yuvalay Makerspace.
          </p>

          <Link
            to="/contact"
            className="successIntroBtn"
          >
            Become the Next Story
            <FiArrowRight />
          </Link>

        </div>

        <div className="successIntroImage">

          <img
            src="/images/projects/success-story.jpg"
            alt="Success Stories"
          />

        </div>

      </div>

    </section>
  );
}