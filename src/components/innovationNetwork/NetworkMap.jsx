import "./networkMap.css";
import {
  FiUsers,
  FiBookOpen,
  FiHome,
  FiCpu,
  FiBriefcase,
  FiGlobe,
  FiAward,
  FiLayers,
  FiActivity,
} from "react-icons/fi";

const nodes = [
  {
    title: "Students",
    icon: <FiUsers />,
    className: "node1",
  },
  {
    title: "Schools",
    icon: <FiBookOpen />,
    className: "node2",
  },
  {
    title: "Universities",
    icon: <FiHome />,
    className: "node3",
  },
  {
    title: "Startups",
    icon: <FiCpu />,
    className: "node4",
  },
  {
    title: "Industry",
    icon: <FiBriefcase />,
    className: "node5",
  },
  {
    title: "NGOs",
    icon: <FiGlobe />,
    className: "node6",
  },
  {
    title: "Mentors",
    icon: <FiAward />,
    className: "node7",
  },
  {
    title: "Researchers",
    icon: <FiActivity />,
    className: "node8",
  },
];

export default function NetworkMap() {
  return (
    <section className="networkMap">

      <div className="networkContainer">

        <div className="networkHeading">

          <span className="section-label">
            Our Ecosystem
          </span>

          <h2>
            Connecting Every
            <span> Innovator.</span>
          </h2>

          <p>
            Yuvalay serves as the bridge between learners, educators,
            institutions and industry to create an innovation-driven
            ecosystem.
          </p>

        </div>

        <div className="networkCircle">

          {nodes.map((node, index) => (
            <div
              key={index}
              className={`networkNode ${node.className}`}
            >
              <div className="nodeIcon">
                {node.icon}
              </div>

              <span>{node.title}</span>
            </div>
          ))}

          <div className="centerNode">

            <div className="centerGlow"></div>

            <div className="centerCircle">

              <FiLayers />

              <h3>Yuvalay</h3>

              <p>Makerspace</p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}