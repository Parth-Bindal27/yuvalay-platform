import { motion } from "framer-motion";
import {
  FaMicrochip,
  FaBrain,
  FaCube,
  FaCameraRetro,
} from "react-icons/fa";

import "./InnovationLabs.css";

const labs = [
  {
    icon: <FaCube />,
    title: "Maker Lab",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900&q=80",
    description:
      "Bring ideas to life using 3D printers, laser cutting, rapid prototyping tools, electronics and fabrication equipment.",
    features: [
      "3D Printing",
      "Laser Cutting",
      "Arduino",
      "Electronics",
      "Rapid Prototyping",
    ],
  },

  {
    icon: <FaBrain />,
    title: "AI Innovation Lab",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80",
    description:
      "Explore Artificial Intelligence, Machine Learning, LLMs, Computer Vision and Data Science through practical projects.",
    features: [
      "Python",
      "Machine Learning",
      "Computer Vision",
      "LLMs",
      "Deep Learning",
    ],
  },

  {
    icon: <FaMicrochip />,
    title: "IoT & Robotics Lab",
    image:
      "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?w=900&q=80",
    description:
      "Design smart devices and automation systems using sensors, robotics kits and embedded hardware.",
    features: [
      "ESP32",
      "Arduino",
      "Sensors",
      "Automation",
      "Robotics",
    ],
  },

  {
    icon: <FaCameraRetro />,
    title: "Media Studio",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&q=80",
    description:
      "Create podcasts, videos, digital campaigns and professional creative content with modern media tools.",
    features: [
      "Podcast",
      "Photography",
      "Video Editing",
      "Content Creation",
      "Branding",
    ],
  },
];

export default function InnovationLabs() {
  return (
    <section className="innovation-labs">

      <div className="labs-heading">

        <span>INNOVATION LABS</span>

        <h2>
          Where Ideas Become
          <br />
          Reality
        </h2>

        <p>
          Discover world-class innovation spaces designed for
          experimentation, collaboration and real-world creation.
        </p>

      </div>

      {labs.map((lab, index) => (

        <motion.div
          key={index}
          className={`lab-row ${index % 2 !== 0 ? "reverse" : ""}`}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <div className="lab-image">

            <img
              src={lab.image}
              alt={lab.title}
            />

          </div>

          <div className="lab-content">

            <div className="lab-icon">
              {lab.icon}
            </div>

            <h3>{lab.title}</h3>

            <p>{lab.description}</p>

            <div className="feature-list">

              {lab.features.map((item, i) => (

                <span key={i}>
                  {item}
                </span>

              ))}

            </div>

            <button>
              Explore Lab →
            </button>

          </div>

        </motion.div>

      ))}

    </section>
  );
}