import "./WhatWeDo.css";
import { motion } from "framer-motion";

import {
  FaRobot,
  FaBrain,
  FaMicrochip,
  FaCube,
  FaRocket,
  FaLightbulb,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaRobot />,
    title: "Robotics",
    desc: "Build intelligent robots through hands-on projects, competitions, and real-world engineering experiences.",
  },
  {
    icon: <FaBrain />,
    title: "Artificial Intelligence",
    desc: "Learn AI, Machine Learning, Computer Vision and Generative AI through practical applications.",
  },
  {
    icon: <FaMicrochip />,
    title: "Internet of Things",
    desc: "Create smart connected devices using sensors, embedded systems and cloud technologies.",
  },
  {
    icon: <FaCube />,
    title: "3D Printing",
    desc: "Transform ideas into functional prototypes with modern fabrication and rapid prototyping tools.",
  },
  {
    icon: <FaRocket />,
    title: "Entrepreneurship",
    desc: "Develop startup ideas, business thinking and innovation skills with expert mentorship.",
  },
  {
    icon: <FaLightbulb />,
    title: "Design Thinking",
    desc: "Solve real-world challenges through creativity, collaboration and human-centered innovation.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="whatWeDo">

      <div className="sectionContainer">

        <motion.div
          className="sectionHeading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >
          <span className="sectionBadge">
            WHAT WE DO
          </span>

          <h2>
            Empowering Every Innovator Through Practical Learning
          </h2>

          <p>
            Yuvalay Makerspace combines creativity, technology and innovation
            through immersive experiences that inspire students to build,
            experiment and solve real-world problems.
          </p>

        </motion.div>

        <div className="servicesGrid">

          {services.map((item, index) => (

            <motion.div
              key={item.title}
              className="serviceCard"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .12,
                duration: .6,
              }}
              whileHover={{ y: -10 }}
            >

              <div className="serviceIcon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <button>
                Learn More
                <FaArrowRight />
              </button>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}