import "./startupGrid.css";
import {
  FiTrendingUp,
  FiCpu,
  FiHeart,
  FiShoppingBag,
  FiGlobe,
  FiBox
} from "react-icons/fi";

const startups = [
  {
    icon: <FiCpu />,
    title: "AI Vision",
    sector: "Artificial Intelligence"
  },
  {
    icon: <FiBox />,
    title: "GreenTech",
    sector: "Sustainability"
  },
  {
    icon: <FiHeart />,
    title: "MediLink",
    sector: "Healthcare"
  },
  {
    icon: <FiShoppingBag />,
    title: "RetailX",
    sector: "Retail Tech"
  },
  {
    icon: <FiGlobe />,
    title: "AgriSense",
    sector: "AgriTech"
  },
  {
    icon: <FiTrendingUp />,
    title: "FinGrow",
    sector: "FinTech"
  }
];

export default function StartupGrid() {
  return (
    <section className="startupGrid">

      <div className="startupGridContainer">

        <div className="sectionHeading">

          <span className="section-label">
            Startups
          </span>

          <h2>Featured Ventures</h2>

        </div>

        <div className="startupCards">

          {startups.map((startup, index) => (

            <div className="startupCard" key={index}>

              <div className="startupIcon">
                {startup.icon}
              </div>

              <span>{startup.sector}</span>

              <h3>{startup.title}</h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}