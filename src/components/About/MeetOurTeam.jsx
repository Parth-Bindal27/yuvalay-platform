import "./MeetOurTeam.css";
import { motion } from "framer-motion";

import {
  FaLinkedinIn,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

const team = [
  {
    name: "Nilesh Patel",
    role: "Founder & Innovation Mentor",
    image: "/images/team/nilesh.jpg",
    description:
      "Leading Yuvalay with a vision to empower students through innovation, creativity and hands-on learning.",
    linkedin: "#",
    email: "mailto:info@yuvalay.org",
  },

  {
    name: "Team Member",
    role: "Innovation Lead",
    image: "/images/team/member1.jpg",
    description:
      "Mentoring students through emerging technologies, workshops and practical innovation projects.",
    linkedin: "#",
    email: "#",
  },

  {
    name: "Team Member",
    role: "Technology Mentor",
    image: "/images/team/member2.jpg",
    description:
      "Helping learners explore AI, Robotics, IoT and future-ready technologies through experiential learning.",
    linkedin: "#",
    email: "#",
  },

  {
    name: "Team Member",
    role: "Program Coordinator",
    image: "/images/team/member3.jpg",
    description:
      "Managing events, innovation programs and community engagement initiatives across institutions.",
    linkedin: "#",
    email: "#",
  },
];

export default function MeetOurTeam() {
  return (
    <section className="meetTeam">

      <div className="teamBlur blurOne"></div>
      <div className="teamBlur blurTwo"></div>

      <div className="teamContainer">

        <motion.div
          className="teamHeading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >

          <span className="teamBadge">
            OUR TEAM
          </span>

          <h2>
            Meet The
            <span> Changemakers </span>
            Behind Yuvalay
          </h2>

          <p>
            Passionate educators, innovators and mentors working together
            to build India's next generation of creators and problem solvers.
          </p>

        </motion.div>

        <div className="teamGrid">

          {team.map((member, index) => (

            <motion.div
              key={member.name + index}
              className="teamCard"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .15,
                duration: .6,
              }}
              whileHover={{ y: -10 }}
            >

              <div className="teamImage">

                <img
                  src={member.image}
                  alt={member.name}
                />

                <div className="teamOverlay">

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a href={member.email}>
                    <FaEnvelope />
                  </a>

                </div>

              </div>

              <div className="teamInfo">

                <h3>{member.name}</h3>

                <h4>{member.role}</h4>

                <p>{member.description}</p>

                <button>

                  Know More

                  <FaArrowRight />

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}