import { motion } from "framer-motion";
import {
  FaRobot,
  FaMicrochip,
  FaBrain,
  FaWifi,
  FaCube,
  FaHelicopter,
  FaArrowRight,
} from "react-icons/fa";
import "./ExploreLabs.css";

const labs = [
  {
    title: "Robotics Lab",
    icon: <FaRobot />,
    image:
      "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?w=1200",
    description:
      "Design, assemble and program intelligent robots for real-world challenges.",
    tags: ["Arduino", "Sensors", "Automation"],
  },
  {
    title: "Electronics Lab",
    icon: <FaMicrochip />,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
    description:
      "Prototype electronic circuits and embedded systems using modern hardware.",
    tags: ["ESP32", "PCB", "Embedded"],
  },
  {
    title: "AI & ML Lab",
    icon: <FaBrain />,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200",
    description:
      "Build intelligent applications powered by machine learning and computer vision.",
    tags: ["AI", "Python", "Vision"],
  },
  {
    title: "IoT Lab",
    icon: <FaWifi />,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200",
    description:
      "Create connected devices that communicate and automate everyday life.",
    tags: ["IoT", "Cloud", "WiFi"],
  },
  {
    title: "3D Printing",
    icon: <FaCube />,
    image:
      "https://images.unsplash.com/photo-1581092335878-5d9ff86ca2bf?w=1200",
    description:
      "Transform digital ideas into physical prototypes using advanced printers.",
    tags: ["PLA", "PETG", "CAD"],
  },
  {
    title: "Drone Lab",
    icon: <FaHelicopter />,
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200",
    description:
      "Learn aerial robotics, autonomous navigation and drone technologies.",
    tags: ["Drone", "GPS", "Flight"],
  },
];

export default function ExploreLabs() {
  return (
    <section className="exploreLabs">

      <div className="labsHeading">
        <span className="section-tag">Our Facilities</span>

        <h2>Explore Our Innovation Labs</h2>

        <p>
          Every lab is designed to provide hands-on learning, experimentation
          and rapid prototyping with industry-relevant technologies.
        </p>
      </div>

      <div className="labsGrid">
        {labs.map((lab, index) => (
          <motion.div
            key={index}
            className="labCard"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
          >
            <div className="labImage">
              <img src={lab.image} alt={lab.title} />

              <div className="overlay">
                <div className="labIcon">
                  {lab.icon}
                </div>
              </div>
            </div>

            <div className="labContent">

              <h3>{lab.title}</h3>

              <p>{lab.description}</p>

              <div className="labTags">
                {lab.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>

              <button>
                Explore Lab
                <FaArrowRight />
              </button>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}