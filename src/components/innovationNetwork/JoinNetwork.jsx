import "./joinNetwork.css";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiUsers,
  FiBookOpen,
  FiBriefcase,
  FiHeart,
} from "react-icons/fi";

const opportunities = [
  {
    icon: <FiUsers />,
    title: "Become a Mentor",
  },
  {
    icon: <FiBookOpen />,
    title: "Educational Institution",
  },
  {
    icon: <FiBriefcase />,
    title: "Industry Partner",
  },
  {
    icon: <FiHeart />,
    title: "Volunteer With Us",
  },
];

export default function JoinNetwork() {
  return (
    <section className="joinNetwork">

      <div className="joinNetwork-glow"></div>

      <div className="joinNetwork-container">

        <span className="section-label">
          Join The Innovation Network
        </span>

        <h2>
          Let's Build The
          <br />
          <span>Future Together.</span>
        </h2>

        <p>
          Join a growing network of innovators, educators, mentors,
          organizations and industry leaders working together to inspire
          creativity and solve real-world challenges.
        </p>

        <div className="joinNetwork-grid">

          {opportunities.map((item, index) => (

            <div
              className="networkOpportunity"
              key={index}
            >

              <div className="networkOpportunity-icon">

                {item.icon}

              </div>

              <h3>{item.title}</h3>

            </div>

          ))}

        </div>

        <div className="joinNetwork-buttons">

          <Link
            to="/contact"
            className="joinNetwork-primary"
          >
            Become A Partner
            <FiArrowRight />
          </Link>

          <Link
            to="/contact"
            className="joinNetwork-secondary"
          >
            Contact Us
          </Link>

        </div>

      </div>

    </section>
  );
}