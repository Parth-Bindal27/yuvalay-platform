import "./community.css";
import {
  FiUsers,
  FiBookOpen,
  FiCpu,
  FiMapPin,
} from "react-icons/fi";

const stats = [
  {
    icon: <FiUsers />,
    number: "1000+",
    title: "Learners",
  },
  {
    icon: <FiBookOpen />,
    number: "50+",
    title: "Mentors",
  },
  {
    icon: <FiCpu />,
    number: "100+",
    title: "Projects",
  },
  {
    icon: <FiMapPin />,
    number: "20+",
    title: "Partner Institutions",
  },
];

export default function Community() {
  return (
    <section className="community">

      <div className="community-container">

        <div className="community-image">

          <img
            src="/images/community/network.jpg"
            alt="Innovation Community"
          />

        </div>

        <div className="community-content">

          <span className="section-label">
            Growing Together
          </span>

          <h2>
            Building A Strong
            <span> Innovation Community.</span>
          </h2>

          <p>
            Our community thrives on collaboration, creativity and shared
            learning. Every member contributes to building solutions that
            positively impact society.
          </p>

          <div className="community-grid">

            {stats.map((item, index) => (

              <div className="community-card" key={index}>

                <div className="community-icon">

                  {item.icon}

                </div>

                <h3>{item.number}</h3>

                <span>{item.title}</span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}