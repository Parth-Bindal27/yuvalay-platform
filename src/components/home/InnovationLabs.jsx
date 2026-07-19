import { motion } from "framer-motion";
import {
  RiRobot2Line,
  RiCpuLine,
  RiPrinterLine,
  RiLightbulbFlashLine,
  RiArrowRightUpLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import "../../styles/home/innovationLabs.css";

const labs = [
  {
    title: "AI & Machine Learning Lab",
    icon: <RiRobot2Line />,
    image: "/images/labs/ai.jpg",
    desc: "Build intelligent applications using Computer Vision, LLMs and Machine Learning.",
  },
  {
    title: "Robotics Lab",
    icon: <RiCpuLine />,
    image: "/images/labs/robotics.jpg",
    desc: "Arduino, Raspberry Pi, Embedded Systems and autonomous robots.",
  },
  {
    title: "Digital Fabrication",
    icon: <RiPrinterLine />,
    image: "/images/labs/printing.jpg",
    desc: "3D Printing, Laser Cutting and rapid prototyping for innovators.",
  },
  {
    title: "Innovation Studio",
    icon: <RiLightbulbFlashLine />,
    image: "/images/labs/studio.jpg",
    desc: "Collaborative workspace for startups, hackathons and creative projects.",
  },
];

export default function InnovationLabs() {
  return (
    <section className="innovation-labs">

      <motion.div
        className="labs-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-tag">
          Innovation Labs
        </span>

        <h2>
          Experience Learning
          <br />
          Beyond Classrooms
        </h2>

        <p>
          Explore state-of-the-art labs where students transform
          imagination into real-world innovations.
        </p>
      </motion.div>

      <div className="labs-scroll">

        {labs.map((lab, index) => (

          <motion.div
            className="lab-card"
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.08,
              duration: 0.45,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -12,
            }}
          >

            <img
              src={lab.image}
              alt={lab.title}
            />

            <div className="lab-overlay">

              <div className="lab-icon">
                {lab.icon}
              </div>

              <h3>
                {lab.title}
              </h3>

              <p>
                {lab.desc}
              </p>

              <Link
                to="/programs"
                className="lab-link"
              >
                Explore Lab
                <RiArrowRightUpLine />
              </Link>

            </div>

          </motion.div>

        ))}

      </div>

      <div className="labs-stats">

        <motion.div
          className="stat-box"
          whileHover={{ y: -8 }}
        >
          <h2>8+</h2>
          <span>Innovation Labs</span>
        </motion.div>

        <motion.div
          className="stat-box"
          whileHover={{ y: -8 }}
        >
          <h2>500+</h2>
          <span>Projects Built</span>
        </motion.div>

        <motion.div
          className="stat-box"
          whileHover={{ y: -8 }}
        >
          <h2>150+</h2>
          <span>Workshops Conducted</span>
        </motion.div>

        <motion.div
          className="stat-box"
          whileHover={{ y: -8 }}
        >
          <h2>1000+</h2>
          <span>Students Trained</span>
        </motion.div>

      </div>

    </section>
  );
}