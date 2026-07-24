import "./contactCTA.css";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiMail,
  FiPhone,
  FiMessageCircle,
} from "react-icons/fi";

export default function ContactCTA() {
  return (
    <section className="faqCTA">

      <div className="faqCTA-glow"></div>

      <div className="faqCTA-container">

        <span className="section-label">
          Still Need Help?
        </span>

        <h2>
          Couldn't Find
          <br />
          <span>Your Answer?</span>
        </h2>

        <p>
          Our team is happy to assist you. Whether you have questions
          about programs, workshops, partnerships or volunteering,
          we're just a message away.
        </p>

        <div className="faqContactGrid">

          <div className="faqContactCard">

            <div className="faqIcon">
              <FiMail />
            </div>

            <h3>Email Us</h3>

            <span>support@yuvalay.org</span>

          </div>

          <div className="faqContactCard">

            <div className="faqIcon">
              <FiPhone />
            </div>

            <h3>Call Us</h3>

            <span>+91 XXXXX XXXXX</span>

          </div>

          <div className="faqContactCard">

            <div className="faqIcon">
              <FiMessageCircle />
            </div>

            <h3>Live Support</h3>

            <span>Monday - Saturday</span>

          </div>

        </div>

        <Link
          to="/contact"
          className="faqCTAButton"
        >
          Contact Our Team
          <FiArrowRight />
        </Link>

      </div>

    </section>
  );
}