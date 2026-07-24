import "./milestones.css";
import {
  FiUsers,
  FiBriefcase,
  FiAward,
  FiTrendingUp
} from "react-icons/fi";

const milestones = [
  {
    icon: <FiUsers />,
    number: "50+",
    title: "Founders Supported"
  },
  {
    icon: <FiBriefcase />,
    number: "20+",
    title: "Startups Incubated"
  },
  {
    icon: <FiAward />,
    number: "15+",
    title: "National Awards"
  },
  {
    icon: <FiTrendingUp />,
    number: "₹2Cr+",
    title: "Funding Raised"
  }
];

export default function Milestones() {
  return (
    <section className="startupMilestones">

      <div className="startupMilestonesContainer">

        <div className="sectionHeading">

          <span className="section-label">
            Milestones
          </span>

          <h2>Growing Together</h2>

        </div>

        <div className="milestoneGrid">

          {milestones.map((item, index) => (

            <div className="milestoneCard" key={index}>

              <div className="milestoneIcon">
                {item.icon}
              </div>

              <h3>{item.number}</h3>

              <p>{item.title}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}