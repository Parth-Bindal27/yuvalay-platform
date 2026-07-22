import "./PersonalInfo.css";
import { useAuth } from "../../../context/AuthContext";
import {
  FaEnvelope,
  FaPhone,
  FaUser,
  FaBirthdayCake,
  FaVenusMars,
  FaEdit,
} from "react-icons/fa";

export default function PersonalInfo() {
  const { currentUser } = useAuth();

  const personalData = [
    {
      icon: <FaUser />,
      label: "Full Name",
      value: currentUser?.displayName || "Not Added",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: currentUser?.email || "Not Added",
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+91 XXXXX XXXXX",
    },
    {
      icon: <FaBirthdayCake />,
      label: "Date of Birth",
      value: "Not Added",
    },
    {
      icon: <FaVenusMars />,
      label: "Gender",
      value: "Not Added",
    },
  ];

  return (
    <section className="personalInfo">
      <div className="sectionHeader">
        <div>
          <h2>Personal Information</h2>
          <p>Your basic personal details.</p>
        </div>

        <button className="sectionEditBtn">
          <FaEdit />
          Edit
        </button>
      </div>

      <div className="personalGrid">
        {personalData.map((item, index) => (
          <div className="infoCard" key={index}>
            <div className="infoIcon">
              {item.icon}
            </div>

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