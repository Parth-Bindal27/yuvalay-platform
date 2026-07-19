import { motion } from "framer-motion";
import {
  FaRobot,
  FaCode,
  FaMicrochip,
  FaLeaf,
  FaBullhorn,
  FaCertificate,
  FaClock,
  FaUserGraduate,
} from "react-icons/fa";

import "./Workshops.css";

const workshops = [
  {
    icon: <FaRobot />,
    title: "Artificial Intelligence",
    duration: "2 Days",
    level: "Beginner",
    description:
      "Learn AI fundamentals, ChatGPT, Machine Learning, and Computer Vision through hands-on projects.",
  },
  {
    icon: <FaCode />,
    title: "Web Development",
    duration: "5 Days",
    level: "Intermediate",
    description:
      "Build responsive websites using HTML, CSS, JavaScript, React and modern development tools.",
  },
  {
    icon: <FaMicrochip />,
    title: "IoT & Robotics",
    duration: "3 Days",
    level: "Beginner",
    description:
      "Create smart automation projects using Arduino, ESP32, sensors and robotics kits.",
  },
  {
    icon: <FaLeaf />,
    title: "Green Innovation",
    duration: "1 Day",
    level: "Open",
    description:
      "Design sustainable solutions that positively impact communities and the environment.",
  },
  {
    icon: <FaBullhorn />,
    title: "Startup & Pitching",
    duration: "2 Days",
    level: "Intermediate",
    description:
      "Learn business model development, storytelling, pitching and startup validation.",
  },
  {
    icon: <FaUserGraduate />,
    title: "Career Readiness",
    duration: "1 Day",
    level: "All Levels",
    description:
      "Resume building, LinkedIn optimization, interview preparation and communication skills.",
  },
];

export default function Workshops() {
  return (
    <section className="workshops">

      <motion.div
        className="workshops-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>WORKSHOPS</span>

        <h2>Hands-on Learning Experiences</h2>

        <p>
          Interactive workshops designed to help learners gain practical
          experience, industry exposure and real-world problem-solving skills.
        </p>
      </motion.div>

      <div className="workshop-grid">

        {workshops.map((workshop, index) => (

          <motion.div
            key={index}
            className="workshop-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
          >

            <div className="workshop-icon">
              {workshop.icon}
            </div>

            <h3>{workshop.title}</h3>

            <div className="workshop-meta">

              <span>
                <FaClock />
                {workshop.duration}
              </span>

              <span>
                <FaCertificate />
                {workshop.level}
              </span>

            </div>

            <p>{workshop.description}</p>

            <button>
              Register Now →
            </button>

          </motion.div>

        ))}

      </div>

    </section>
  );
}