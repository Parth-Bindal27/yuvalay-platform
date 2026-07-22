import "./AboutSection.css";
import { FaUserAlt, FaEdit } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="aboutSection">
      <div className="sectionHeader">
        <div>
          <h2>
            <FaUserAlt /> About Me
          </h2>
          <p>A short introduction about yourself.</p>
        </div>

        <button className="sectionEditBtn">
          <FaEdit />
          Edit
        </button>
      </div>

      <div className="aboutCard">
        <p>
          Passionate engineering student interested in AI, Web Development,
          Robotics and building impactful products. I enjoy participating in
          hackathons, learning new technologies and solving real-world
          problems through innovation.
        </p>
      </div>
    </section>
  );
}