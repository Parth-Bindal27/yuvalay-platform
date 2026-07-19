// src/components/home/WhyChooseUs.jsx

import { motion } from "framer-motion";
import {
  RiLightbulbFlashLine,
  RiTeamLine,
  RiMedalLine,
  RiRocket2Line,
  RiArrowRightUpLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import "../../styles/home/whyChooseUs.css";

const reasons = [
  {
    icon: <RiLightbulbFlashLine />,
    number: "01",
    title: "Project Based Learning",
    description:
      "Every workshop focuses on building real products instead of just theory. Learn by creating meaningful solutions.",
  },
  {
    icon: <RiRocket2Line />,
    number: "02",
    title: "Startup Ecosystem",
    description:
      "Work alongside founders, mentors and innovators while transforming ideas into scalable ventures.",
  },
  {
    icon: <RiTeamLine />,
    number: "03",
    title: "Strong Community",
    description:
      "Collaborate with passionate students, professionals and creators across different disciplines.",
  },
  {
    icon: <RiMedalLine />,
    number: "04",
    title: "Industry Exposure",
    description:
      "Hackathons, industrial visits, competitions and networking opportunities prepare students for the future.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-section">

      <motion.div
        className="why-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-tag">
          Why Yuvalay
        </span>

        <h2>
          More Than A Makerspace.
          <br />
          A Place To Build Your Future.
        </h2>

        <p>
          We don't just teach technology—we create innovators,
          entrepreneurs and problem solvers through practical,
          collaborative and industry-driven experiences.
        </p>
      </motion.div>

      <div className="why-grid">

        {reasons.map((item, index) => (

          <motion.div
            key={index}
            className="why-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.08,
            }}
            whileHover={{
              y: -12,
            }}
          >

            <div className="why-number">
              {item.number}
            </div>

            <div className="why-icon">
              {item.icon}
            </div>

            <h3>
              {item.title}
            </h3>

            <p>
              {item.description}
            </p>

          </motion.div>

        ))}

      </div>

      <motion.div
        className="why-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >

        <div>

          <h3>
            Ready to start building?
          </h3>

          <p>
            Join workshops, innovation labs and startup programs
            designed to help you create real impact.
          </p>

        </div>

        <Link
          to="/programs"
          className="why-btn"
        >
          Explore Programs
          <RiArrowRightUpLine />
        </Link>

      </motion.div>

    </section>
  );
}