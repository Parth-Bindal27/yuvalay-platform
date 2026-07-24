import "./mentors.css";
import {
  FiCheckCircle,
  FiUsers,
  FiAward,
  FiZap,
} from "react-icons/fi";

const points = [
  {
    icon: <FiAward />,
    title: "Industry Experience",
    desc: "Learn from professionals who have built real products and solutions."
  },
  {
    icon: <FiUsers />,
    title: "Personal Mentorship",
    desc: "Receive guidance, feedback and support throughout your learning journey."
  },
  {
    icon: <FiZap />,
    title: "Hands-on Innovation",
    desc: "Apply concepts immediately through practical projects and challenges."
  },
  {
    icon: <FiCheckCircle />,
    title: "Growth Mindset",
    desc: "Develop confidence, creativity and problem-solving skills."
  }
];

export default function Mentors() {
  return (
    <section className="mentors">

      <div className="mentors-container">

        <div className="mentor-images">

          <div className="mentor-main">
            <img
              src="/images/team/mentor-main.jpg"
              alt="Mentor"
            />
          </div>

          <div className="mentor-small mentor-one">
            <img
              src="/images/team/mentor1.jpg"
              alt="Mentor"
            />
          </div>

          <div className="mentor-small mentor-two">
            <img
              src="/images/team/mentor2.jpg"
              alt="Mentor"
            />
          </div>

        </div>

        <div className="mentor-content">

          <span className="section-label">
            Our Mentors
          </span>

          <h2>
            Learn From
            <br />
            People Who Have
            <span> Built It.</span>
          </h2>

          <p className="mentor-intro">
            Our mentors bring together technical expertise,
            creativity and real-world experience to help every
            learner grow with confidence.
          </p>

          <div className="mentor-list">

            {points.map((item, index) => (

              <div className="mentor-item" key={index}>

                <div className="mentor-icon">
                  {item.icon}
                </div>

                <div>

                  <h3>{item.title}</h3>

                  <p>{item.desc}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}