import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaRobot,
  FaLeaf,
  FaWifi,
  FaCar,
  FaHelicopter,
  FaMicrochip,
} from "react-icons/fa";
import "./ProjectShowcase.css";

const projects = [
  {
    title: "Autonomous Robot",
    image:
      "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?w=1200",
    description:
      "A self-driving robot capable of obstacle detection and autonomous navigation.",
    tech: ["Arduino", "Sensors", "Robotics"],
    icon: <FaRobot />,
  },
  {
    title: "AI Plant Detection",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200",
    description:
      "Computer vision model that detects plant diseases using AI.",
    tech: ["AI", "Python", "OpenCV"],
    icon: <FaLeaf />,
  },
  {
    title: "Smart Home",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=1200",
    description:
      "IoT-enabled home automation system with mobile control.",
    tech: ["IoT", "ESP32", "WiFi"],
    icon: <FaWifi />,
  },
  {
    title: "Line Follower",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
    description:
      "An autonomous robot capable of following paths with precision.",
    tech: ["Robotics", "Arduino", "IR Sensor"],
    icon: <FaCar />,
  },
  {
    title: "Autonomous Drone",
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200",
    description:
      "Drone capable of intelligent navigation and aerial mapping.",
    tech: ["Drone", "GPS", "AI"],
    icon: <FaHelicopter />,
  },
  {
    title: "Smart Irrigation",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200",
    description:
      "Automatic irrigation using soil moisture and weather monitoring.",
    tech: ["IoT", "Sensors", "ESP32"],
    icon: <FaMicrochip />,
  },
];

export default function ProjectShowcase() {
  return (
    <section className="projectSection">

      <div className="projectHeading">

        <span className="section-tag">
          Student Innovation
        </span>

        <h2>
          What Can You Build?
        </h2>

        <p>
          Every idea begins with curiosity.
          From AI to robotics, our makerspace empowers students
          to transform imagination into real-world solutions.
        </p>

      </div>

      <div className="projectGrid">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            className="projectCard"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: .6,
              delay: index * .08,
            }}
            viewport={{ once: true }}
          >

            <div className="projectImage">

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="projectIcon">
                {project.icon}
              </div>

            </div>

            <div className="projectContent">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="projectTags">

                {project.tech.map((tag, i) => (

                  <span key={i}>
                    {tag}
                  </span>

                ))}

              </div>

              <button>

                View Project

                <FaArrowRight />

              </button>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}