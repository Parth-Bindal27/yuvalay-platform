import "./patents.css";
import { FiAward } from "react-icons/fi";

const patents = [
  {
    title: "Smart Irrigation Controller",
    status: "Patent Filed"
  },
  {
    title: "Portable STEM Learning Kit",
    status: "Prototype Developed"
  },
  {
    title: "Autonomous Cleaning Robot",
    status: "Innovation Under Development"
  }
];

export default function Patents() {
  return (
    <section className="patents">

      <div className="patentsContainer">

        <div className="sectionHeading">

          <span className="section-label">
            Innovation Pipeline
          </span>

          <h2>Patents & Prototypes</h2>

        </div>

        <div className="patentGrid">

          {patents.map((item, index) => (

            <div className="patentCard" key={index}>

              <FiAward className="patentIcon" />

              <h3>{item.title}</h3>

              <span>{item.status}</span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}