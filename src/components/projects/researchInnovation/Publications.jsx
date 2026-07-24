import "./publications.css";
import { FiFileText, FiCalendar } from "react-icons/fi";

const publications = [
  {
    title: "AI Based Smart Farming",
    type: "Research Paper",
    year: "2026"
  },
  {
    title: "IoT Enabled Water Monitoring",
    type: "Conference Paper",
    year: "2025"
  },
  {
    title: "Autonomous Delivery Robot",
    type: "Technical Report",
    year: "2025"
  }
];

export default function Publications() {
  return (
    <section className="publications">

      <div className="publicationsContainer">

        <div className="sectionHeading">

          <span className="section-label">
            Publications
          </span>

          <h2>Research Contributions</h2>

        </div>

        {publications.map((item, index) => (

          <div className="publicationCard" key={index}>

            <FiFileText />

            <div>

              <h3>{item.title}</h3>

              <span>{item.type}</span>

            </div>

            <p>
              <FiCalendar />
              {item.year}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}