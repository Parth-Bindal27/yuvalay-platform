import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaRobot,
  FaLeaf,
  FaLaptopCode,
  FaRocket,
  FaUsers,
} from "react-icons/fa";

import "./FeaturedPrograms.css";

const programs = [
  {
    icon: <FaLightbulb />,
    title: "Innovation & Design",
    desc: "Master design thinking, rapid prototyping and creative problem-solving to transform ideas into impactful solutions.",
  },
  {
    icon: <FaRobot />,
    title: "AI & Robotics",
    desc: "Explore Artificial Intelligence, Robotics, IoT, Arduino and automation through practical projects.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Digital Skills",
    desc: "Build websites, apps, software and modern digital solutions using industry-standard technologies.",
  },
  {
    icon: <FaRocket />,
    title: "Entrepreneurship",
    desc: "Validate ideas, build startups, pitch confidently and develop a mindset for innovation and leadership.",
  },
  {
    icon: <FaLeaf />,
    title: "Sustainability",
    desc: "Create eco-friendly innovations that contribute towards a greener and more sustainable future.",
  },
  {
    icon: <FaUsers />,
    title: "Community Leadership",
    desc: "Develop communication, teamwork and leadership through impactful community-driven initiatives.",
  },
];

export default function FeaturedPrograms() {
  return (
    <section className="featured-programs">

      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>OUR PROGRAMS</span>

        <h2>
          Learn. Build.
          <br />
          Create Impact.
        </h2>

        <p>
          Every Yuvalay program is designed with one goal — transforming
          curiosity into real-world innovation through experiential learning.
        </p>
      </motion.div>

      <div className="program-grid">

        {programs.map((item, index) => (

          <motion.div
            key={index}
            className="program-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
          >

            <div className="program-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <button>
              Learn More →
            </button>

          </motion.div>

        ))}

      </div>

    </section>
  );
}