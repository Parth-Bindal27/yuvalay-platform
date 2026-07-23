import "./MeetOurTeam.css";
import { motion } from "framer-motion";

import {
  FaLinkedinIn,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

const team = [
  {
    name: "H. T. Patel",
    role: "Founder & Managing Trustee",
    image: "/images/team/H.T.png",
    description:
      "Leading Yuvalay with a vision to empower students through innovation, creativity and hands-on learning.",
    linkedin: "#",
    email: "mailto:info@yuvalay.org",
  },

  {
    name: "Hemangini Patel",
    role: "Founding Trustee",
    image: "/images/team/Hemangini.jpg",
    description:
      "Founding Trustee dedicated to educational excellence and community development.",
    linkedin: "#",
    email: "#",
  },

  {
    name: "Suresh Purohit",
    role: "Innovation Mentor",
    image: "/images/team/Suresh.jpg",
    description:
      "Innovation mentor inspiring creativity through makerspaces, design thinking, and hands-on learning.",
    linkedin: "#",
    email: "#",
  },

  {
    name: "Moksha Udani",
    role: "Entrepreneur and Trustee",
    image: "/images/team/Moksha.jpg",
    description:
      "Entrepreneur and Trustee mentoring young innovators in business and leadership.",
    linkedin: "#",
    email: "#",
  },

  {
    name: "Nirmal Parekh",
    role: "Leadership Coach",
    image: "/images/team/Nirmal.jpg",
    description:
      "Leadership coach helping youth develop confidence, communication, and professional skills.",
    linkedin: "#",
    email: "#",
  },

  {
    name: "Kamlesh Udani",
    role: "Corporate Leader",
    image: "/images/team/Kamlesh.jpg",
    description:
      "Corporate leader supporting Yuvalay's growth through strategic guidance and governance.",
    linkedin: "#",
    email: "#",
  },

  {
    name: "Snehal Sheth",
    role: "Industry Expert",
    image: "/images/team/Snehal.jpg",
    description:
      "Industry expert connecting education with real-world innovation and practical learning.",
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