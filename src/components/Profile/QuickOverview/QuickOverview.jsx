import "./QuickOverview.css";
import { useAuth } from "../../../context/AuthContext";
import {
  FaGraduationCap,
  FaCode,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

export default function QuickOverview() {
  const { currentUser } = useAuth();

  const joined = currentUser?.metadata?.creationTime
    ? new Date(currentUser.metadata.creationTime).toLocaleDateString("en-IN", {
        month: "short",
        year: "numeric",
      })
    : "Recently";

  const cards = [
    {
      icon: <FaGraduationCap />,
      value: "Yuvalay",
      label: "Makerspace",
    },
    {
      icon: <FaCode />,
      value: "Information Technology",
      label: "Branch",
    },
    {
      icon: <FaMapMarkerAlt />,
      value: "Vadodara",
      label: "Location",
    },
    {
      icon: <FaCalendarAlt />,
      value: joined,
      label: "Joined",
    },
  ];

  return (
    <section className="quickOverview">
      <div className="overviewGrid">
        {cards.map((card, index) => (
          <div className="overviewCard" key={index}>
            <div className="overviewIcon">{card.icon}</div>

            <h3>{card.value}</h3>

            <p>{card.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}