import "./AcademicInfo.css";
import { FaGraduationCap, FaUniversity, FaBook, FaCalendarAlt, FaEdit } from "react-icons/fa";

export default function AcademicInfo() {
  const academicData = [
    {
      icon: <FaUniversity />,
      label: "College",
      value: "Yuvalay",
    },
    {
      icon: <FaBook />,
      label: "Branch",
      value: "Information Technology",
    },
    {
      icon: <FaGraduationCap />,
      label: "Semester",
      value: "@nd Semester",
    },
    {
      icon: <FaCalendarAlt />,
      label: "Graduation",
      value: "2014",
    },
  ];

  return (
    <section className="academicInfo">
      <div className="sectionHeader">
        <div>
          <h2>Academic Information</h2>
          <p>Your educational details.</p>
        </div>

        <button className="sectionEditBtn">
          <FaEdit />
          Edit
        </button>
      </div>

      <div className="academicGrid">
        {academicData.map((item, index) => (
          <div className="academicCard" key={index}>
            <div className="academicIcon">{item.icon}</div>

            <div>
              <span>{item.label}</span>
              <h4>{item.value}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}