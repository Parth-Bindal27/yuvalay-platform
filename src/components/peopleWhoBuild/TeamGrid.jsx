import "./teamGrid.css";
import { FiLinkedin } from "react-icons/fi";

const team = [
  {
    name: "Nilesh Sir",
    role: "Founder",
    image: "/images/team/founder.jpg",
    bio: "Leading Yuvalay's mission to make innovation accessible to every learner.",
    linkedin: "#",
  },
  {
    name: "Team Member",
    role: "AI Mentor",
    image: "/images/team/mentor1.jpg",
    bio: "Guiding students through artificial intelligence and machine learning.",
    linkedin: "#",
  },
  {
    name: "Team Member",
    role: "Robotics Mentor",
    image: "/images/team/mentor2.jpg",
    bio: "Helping makers design, prototype and build intelligent robots.",
    linkedin: "#",
  },
  {
    name: "Team Member",
    role: "Maker",
    image: "/images/team/maker1.jpg",
    bio: "Passionate about solving real-world problems through technology.",
    linkedin: "#",
  },
  {
    name: "Team Member",
    role: "Volunteer",
    image: "/images/team/volunteer.jpg",
    bio: "Supporting workshops, community outreach and innovation events.",
    linkedin: "#",
  },
  {
    name: "You?",
    role: "Future Innovator",
    image: "/images/team/placeholder.jpg",
    bio: "The next inspiring maker could be you.",
    linkedin: "#",
  },
];

export default function TeamGrid() {
  return (
    <section className="teamSection">

      <div className="teamContainer">

        <span className="section-label">
          Our Community
        </span>

        <h2>
          Meet The People Who Build
        </h2>

        <p className="teamSubtitle">
          Behind every innovation is a passionate community of mentors,
          makers and learners working together.
        </p>

        <div className="teamGrid">

          {team.map((member, index) => (

            <div className="teamCard" key={index}>

              <img
                src={member.image}
                alt={member.name}
              />

              <h3>{member.name}</h3>

              <span>{member.role}</span>

              <p>{member.bio}</p>

              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="linkedinBtn"
              >
                <FiLinkedin />
                LinkedIn
              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}