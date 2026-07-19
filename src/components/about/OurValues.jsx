import "./OurValues.css";
import { motion } from "framer-motion";

import {
  FaLightbulb,
  FaUsers,
  FaLeaf,
  FaRocket,
  FaHandsHelping,
  FaGlobeAsia,
} from "react-icons/fa";

const values = [
  {
    icon: <FaLightbulb />,
    title: "Innovation First",
    description:
      "We encourage creative thinking, experimentation and problem-solving to transform ideas into impactful solutions.",
  },

  {
    icon: <FaUsers />,
    title: "Collaborative Learning",
    description:
      "Learning grows stronger when students, mentors, educators and communities innovate together.",
  },

  {
    icon: <FaLeaf />,
    title: "Sustainability",
    description:
      "Every initiative is designed with environmental responsibility and long-term community impact in mind.",
  },

  {
    icon: <FaRocket />,
    title: "Future Ready",
    description:
      "Preparing learners with practical skills, emerging technologies and entrepreneurial thinking for tomorrow.",
  },

  {
    icon: <FaHandsHelping />,
    title: "Community Impact",
    description:
      "We believe innovation should solve real-world challenges and improve lives across society.",
  },

  {
    icon: <FaGlobeAsia />,
    title: "Inclusive Growth",
    description:
      "Creating opportunities where every learner can explore, build and contribute regardless of background.",
  },
];

export default function OurValues() {
  return (
    <section className="ourValues">

      <div className="valuesBlur leftBlur"></div>
      <div className="valuesBlur rightBlur"></div>

      <div className="valuesContainer">

        <motion.div
          className="valuesHeading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <span className="valuesBadge">
            OUR VALUES
          </span>

          <h2>

            The Principles That
            <span> Guide Everything </span>
            We Build

          </h2>

          <p>

            At Yuvalay, innovation is more than technology.
            It's about empowering people, strengthening communities
            and creating sustainable change through meaningful action.

          </p>

        </motion.div>

        <div className="valuesGrid">

          {values.map((value, index) => (

            <motion.div
              key={value.title}
              className="valueCard"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
              }}
              whileHover={{ y: -8 }}
            >

              <div className="valueIcon">

                {value.icon}

              </div>

              <h3>{value.title}</h3>

              <p>{value.description}</p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}