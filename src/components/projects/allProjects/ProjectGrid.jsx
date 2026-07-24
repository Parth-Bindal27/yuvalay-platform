import "./projectGrid.css";
import {
  FiCpu,
  FiCode,
  FiSettings,
  FiZap,
  FiBox,
  FiGlobe
} from "react-icons/fi";

const projects = [
  {
    icon: <FiCpu />,
    title: "AI Assistant",
    category: "Artificial Intelligence"
  },
  {
    icon: <FiSettings />,
    title: "Smart Robot",
    category: "Robotics"
  },
  {
    icon: <FiZap />,
    title: "IoT Home Automation",
    category: "IoT"
  },
  {
    icon: <FiBox />,
    title: "3D Printed Drone",
    category: "3D Printing"
  },
  {
    icon: <FiCode />,
    title: "STEM Learning Kit",
    category: "STEM"
  },
  {
    icon: <FiGlobe />,
    title: "Smart Farming System",
    category: "Sustainability"
  }
];

export default function ProjectGrid() {
  return (
    <section className="projectGrid">

      <div className="projectGridContainer">

        {projects.map((project, index) => (

          <div className="projectCard" key={index}>

            <div className="projectIcon">
              {project.icon}
            </div>

            <span>{project.category}</span>

            <h3>{project.title}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}