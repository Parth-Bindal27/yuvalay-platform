import "./researchAreas.css";
import {
  FiCpu,
  FiActivity,
  FiBox,
  FiLayers,
  FiZap,
  FiGlobe
} from "react-icons/fi";

const areas = [
  {
    icon: <FiCpu />,
    title: "Artificial Intelligence",
    description:
      "Exploring intelligent systems and real-world AI applications."
  },
  {
    icon: <FiActivity />,
    title: "Robotics",
    description:
      "Autonomous systems, robotic prototypes and automation."
  },
  {
    icon: <FiZap />,
    title: "IoT",
    description:
      "Smart connected devices for homes, industries and agriculture."
  },
  {
    icon: <FiLayers />,
    title: "Electronics",
    description:
      "PCB design, embedded systems and hardware innovations."
  },
  {
    icon: <FiBox />,
    title: "3D Prototyping",
    description:
      "Rapid prototyping using CAD and additive manufacturing."
  },
  {
    icon: <FiGlobe />,
    title: "Sustainability",
    description:
      "Technology-driven solutions for environmental challenges."
  }
];

export default function ResearchAreas() {
  return (
    <section className="researchAreas">

      <div className="researchAreasContainer">

        <div className="sectionHeading">

          <span className="section-label">
            Focus Areas
          </span>

          <h2>Research Domains</h2>

        </div>

        <div className="researchGrid">

          {areas.map((item, index) => (

            <div className="researchCard" key={index}>

              <div className="researchIcon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}