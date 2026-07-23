// src/components/home/FeaturedPrograms.jsx

import { motion } from "framer-motion";
import {
  RiRobot2Line,
  RiCpuLine,
  RiBuilding2Line,
  RiPrinterCloudLine,
  RiLightbulbFlashLine,
  RiWifiLine,
  RiArrowRightUpLine,
} from "react-icons/ri";

import { Link } from "react-router-dom";
import "../../styles/home/featuredPrograms.css";

const programs = [
  {
    title: "Artificial Intelligence",
    icon: <RiRobot2Line />,
    image: "/images/programs/ai.jpg",
    desc: "Machine Learning, Computer Vision and Generative AI.",
  },
  {
    title: "Robotics",
    icon: <RiCpuLine />,
    image: "/images/programs/robotics.jpg",
    desc: "Hands-on robotics, embedded systems and automation.",
  },
  {
    title: "Startup Incubation",
    icon: <RiBuilding2Line />,
    image: "/images/programs/startup.jpg",
    desc: "Mentorship, pitching and funding support.",
  },
  {
    title: "3D Printing",
    icon: <RiPrinterCloudLine />,
    image: "/images/programs/printing.jpg",
    desc: "Prototype your ideas with modern fabrication tools.",
  },
  {
    title: "Innovation Lab",
    icon: <RiLightbulbFlashLine />,
    image: "/images/programs/lab.jpg",
    desc: "A collaborative space where ideas become reality.",
  },
  {
  title: "IoT & Embedded Systems",
  icon: <RiWifiLine />,
  image: "/images/programs/iot.jpg",
  desc: "Arduino, ESP32 and sensors."
}
];

export default function FeaturedPrograms() {
  return (
    <section className="featured-programs">

      <motion.div
        className="programs-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-tag">
          Programs
        </span>

        <h2>
          Explore Our
          <br />
          Flagship Programs
        </h2>

        <p>
          Practical learning experiences designed to transform students
          into innovators, entrepreneurs and future technology leaders.
        </p>
      </motion.div>

      <div className="program-grid">

        {programs.map((program, index) => (

          <motion.div
            key={index}
            className={`program-card ${program.size}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{
              duration: 0.45,
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
          >

            <img
              src={program.image}
              alt={program.title}
            />

            <div className="program-overlay">

              <div className="program-icon">
                {program.icon}
              </div>

              <h3>
                {program.title}
              </h3>

              <p>
                {program.desc}
              </p>

              <Link
                to="/programs"
                className="program-link"
              >
                Explore
                <RiArrowRightUpLine />
              </Link>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}