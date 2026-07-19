import { motion } from "framer-motion";
import {
  FaSearch,
  FaBookOpen,
  FaTools,
  FaCubes,
  FaBullhorn,
  FaRocket,
} from "react-icons/fa";

import "./LearningJourney.css";

const journey = [
  {
    icon: <FaSearch />,
    title: "Discover",
    desc: "Identify real-world challenges, explore opportunities, and develop curiosity through observation and research.",
  },
  {
    icon: <FaBookOpen />,
    title: "Learn",
    desc: "Gain practical knowledge from mentors, workshops, hands-on sessions, and collaborative activities.",
  },
  {
    icon: <FaTools />,
    title: "Build",
    desc: "Transform ideas into functional prototypes using digital tools, electronics, design, and fabrication.",
  },
  {
    icon: <FaCubes />,
    title: "Prototype",
    desc: "Test, iterate and refine your solution while receiving continuous feedback from mentors.",
  },
  {
    icon: <FaBullhorn />,
    title: "Pitch",
    desc: "Present your innovation confidently to experts, investors, judges and the community.",
  },
  {
    icon: <FaRocket />,
    title: "Launch",
    desc: "Take your project beyond the classroom and create measurable impact in society.",
  },
];

export default function LearningJourney() {
  return (
    <section className="learning-journey">

      <motion.div
        className="journey-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>LEARNING JOURNEY</span>

        <h2>
          Your Innovation
          <br />
          Roadmap
        </h2>

        <p>
          Every learner follows a structured pathway that transforms
          ideas into meaningful solutions through hands-on innovation.
        </p>
      </motion.div>

      <div className="timeline">

        {journey.map((step, index) => (

          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
          >

            <div className="timeline-icon">
              {step.icon}
            </div>

            <div className="timeline-card">

              <h3>{step.title}</h3>

              <p>{step.desc}</p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}