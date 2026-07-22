import { motion } from "framer-motion";
import {
  FiCpu,
  FiDroplet,
  FiActivity,
  FiTruck,
  FiWind,
  FiSmartphone,
} from "react-icons/fi";

const projects = [
  {
    icon: <FiDroplet />,
    title: "Smart Irrigation System",
    category: "IoT",
    desc: "Automated irrigation system using soil moisture sensors and ESP32.",
  },
  {
    icon: <FiCpu />,
    title: "Robotic Arm",
    category: "Robotics",
    desc: "Programmable robotic arm for industrial automation and learning.",
  },
  {
    icon: <FiTruck />,
    title: "Autonomous Rover",
    category: "AI + Robotics",
    desc: "Obstacle avoiding autonomous vehicle powered by computer vision.",
  },
  {
    icon: <FiActivity />,
    title: "Health Monitoring",
    category: "Healthcare",
    desc: "Wearable device that continuously tracks vital signs.",
  },
  {
    icon: <FiWind />,
    title: "Smart Air Monitor",
    category: "Environment",
    desc: "Real-time air quality monitoring with cloud dashboard.",
  },
  {
    icon: <FiSmartphone />,
    title: "Campus Safety App",
    category: "Software",
    desc: "Mobile application for emergency alerts and incident reporting.",
  },
];

export default function ProjectsSection() {
  return (
    <section className="projectsSection">

      <div className="sectionHeading">

        <span>FEATURED PROJECTS</span>

        <h2>
          Ideas Built
          <span> Inside Yuvalay</span>
        </h2>

        <p>
          Discover some of the innovative prototypes and real-world
          solutions developed by students, makers and young innovators.
        </p>

      </div>

      <div className="projectsGrid">

        {projects.map((project, index) => (

          <motion.div
            key={project.title}
            className="projectCard"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
            }}
          >

            <div className="projectIcon">
              {project.icon}
            </div>

            <span className="projectCategory">
              {project.category}
            </span>

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <button>
              View Project →
            </button>

          </motion.div>

        ))}

      </div>

    </section>
  );
}