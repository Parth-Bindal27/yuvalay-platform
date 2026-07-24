import "./technologies.css";
import {
  FiCpu,
  FiBox,
  FiCode,
  FiLayers,
  FiMonitor,
  FiActivity,
} from "react-icons/fi";

const technologies = [
  {
    icon: <FiCpu />,
    title: "Artificial Intelligence",
    desc: "Build intelligent applications using modern AI tools."
  },
  {
    icon: <FiActivity />,
    title: "Robotics",
    desc: "Design autonomous robots with sensors and controllers."
  },
  {
    icon: <FiMonitor />,
    title: "Internet of Things",
    desc: "Connect devices to build smart systems and automation."
  },
  {
    icon: <FiBox />,
    title: "3D Printing",
    desc: "Transform digital ideas into physical prototypes."
  },
  {
    icon: <FiCode />,
    title: "Programming",
    desc: "Develop software that powers innovative solutions."
  },
  {
    icon: <FiLayers />,
    title: "Design Thinking",
    desc: "Solve problems creatively through user-centered design."
  },
];

export default function Technologies() {
  return (
    <section className="technologies">

      <div className="technologies-container">

        <span className="section-label">
          Technologies
        </span>

        <h2>
          Technologies You'll Explore
        </h2>

        <p className="technologies-subtitle">
          Learn future-ready technologies through practical projects,
          experimentation and innovation.
        </p>

        <div className="technology-grid">

          {technologies.map((item, index) => (

            <div className="technology-card" key={index}>

              <div className="technology-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}