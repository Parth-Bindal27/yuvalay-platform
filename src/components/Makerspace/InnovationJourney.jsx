import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaBookOpen,
  FaTools,
  FaCogs,
  FaTrophy,
  FaRocket,
} from "react-icons/fa";

import "./InnovationJourney.css";

const journey = [
  {
    icon: <FaLightbulb />,
    title: "Imagine",
    text: "Every innovation starts with an idea worth exploring.",
  },
  {
    icon: <FaBookOpen />,
    title: "Learn",
    text: "Attend workshops and master practical technical skills.",
  },
  {
    icon: <FaTools />,
    title: "Build",
    text: "Turn concepts into working prototypes using modern tools.",
  },
  {
    icon: <FaCogs />,
    title: "Prototype",
    text: "Test, improve and iterate with mentor guidance.",
  },
  {
    icon: <FaTrophy />,
    title: "Compete",
    text: "Present projects in hackathons and innovation challenges.",
  },
  {
    icon: <FaRocket />,
    title: "Launch",
    text: "Transform your project into research, startups or careers.",
  },
];

export default function InnovationJourney() {
  return (
    <section className="journeySection">

      <div className="journeyHeading">
        <span className="section-tag">
          Your Journey
        </span>

        <h2>
          From Idea To Innovation
        </h2>

        <p>
          Every innovator follows a journey. Yuvalay Makerspace
          provides the environment, mentors and technology
          required at every step.
        </p>
      </div>

      <div className="journeyTimeline">

        {journey.map((item, index) => (

          <motion.div
            className="journeyItem"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: .6,
              delay: index * .1,
            }}
            viewport={{ once: true }}
          >

            <div className="journeyIcon">
              {item.icon}
            </div>

            <div className="journeyCard">

              <span>
                Step {index + 1}
              </span>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}