import "./hero.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="faqHero">

      <div className="faqHeroGlow"></div>

      <div className="faqHeroContainer">

        <span className="faqHeroTag">
          ❓ Frequently Asked Questions
        </span>

        <h1>
          Have Questions?
          <br />
          <span>We've Got Answers.</span>
        </h1>

        <p>
          Explore answers to the most common questions about Yuvalay
          Makerspace, our programs, workshops, events, memberships,
          collaborations and community.
        </p>

        <div className="faqHeroButtons">

          <Link
            to="/contact"
            className="faqPrimaryBtn"
          >
            Contact Us
            <FiArrowRight />
          </Link>

          <Link
            to="/programs"
            className="faqSecondaryBtn"
          >
            Explore Programs
          </Link>

        </div>

      </div>

    </section>
  );
}