import "./highlights.css";
import {
  FiCpu,
  FiCode,
  FiTool,
  FiUsers,
} from "react-icons/fi";

const highlights = [
  {
    icon: <FiCpu />,
    title: "AI & Robotics",
    description:
      "Hands-on sessions on Artificial Intelligence and Robotics.",
  },
  {
    icon: <FiCode />,
    title: "Coding",
    description:
      "Learn programming through interactive practical workshops.",
  },
  {
    icon: <FiTool />,
    title: "Maker Activities",
    description:
      "Build prototypes using electronics, IoT and hardware tools.",
  },
  {
    icon: <FiUsers />,
    title: "Expert Sessions",
    description:
      "Learn directly from mentors and industry professionals.",
  },
];

export default function Highlights() {
  return (
    <section className="workshopHighlights">

      <div className="workshopHighlightsContainer">

        <div className="sectionHeading">

          <span className="section-label">
            Workshop Highlights
          </span>

          <h2>Learn Practical Skills</h2>

        </div>

        <div className="highlightGrid">

          {highlights.map((item, index) => (

            <div className="highlightCard" key={index}>

              <div className="highlightIcon">
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