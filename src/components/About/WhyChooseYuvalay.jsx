import "./WhyChooseYuvalay.css";
import { motion } from "framer-motion";

import {
  FaHammer,
  FaUserGraduate,
  FaRocket,
  FaLightbulb,
  FaIndustry,
  FaGlobeAsia,
  FaCheckCircle,
} from "react-icons/fa";

const features = [
  {
    icon: <FaHammer />,
    title: "Hands-on Learning",
    description:
      "Learn through practical workshops, experiments and real-world projects that build confidence and technical skills.",
  },
  {
    icon: <FaUserGraduate />,
    title: "Expert Mentorship",
    description:
      "Receive guidance from experienced educators, innovators, entrepreneurs and industry professionals.",
  },
  {
    icon: <FaRocket />,
    title: "Real-World Projects",
    description:
      "Work on impactful challenges that encourage creativity, teamwork and innovative problem solving.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation Culture",
    description:
      "Develop creative thinking and transform ideas into practical solutions with modern technologies.",
  },
  {
    icon: <FaIndustry />,
    title: "Industry Exposure",
    description:
      "Participate in hackathons, workshops, industrial visits and collaborative innovation programs.",
  },
  {
    icon: <FaGlobeAsia />,
    title: "Future Ready Skills",
    description:
      "Build AI, Robotics, IoT, Design Thinking, leadership and entrepreneurial skills for tomorrow.",
  },
];

export default function WhyChooseYuvalay() {
  return (
    <section className="whyChoose">

      <div className="whyBlur blurLeft"></div>
      <div className="whyBlur blurRight"></div>

      <div className="whyContainer">

        {/* LEFT IMAGE */}

        <motion.div
          className="whyImage"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="imageWrapper">

            <img
              src="/images/about/why-choose.jpg"
              alt="Why Choose Yuvalay"
            />

            <div className="glassOverlay"></div>

            <motion.div
              className="floatingBadge badgeOne"
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
            >
              <h3>10,000+</h3>
              <span>Young Innovators</span>
            </motion.div>

            <motion.div
              className="floatingBadge badgeTwo"
              animate={{ y: [0, -12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
            >
              <h3>500+</h3>
              <span>Innovation Projects</span>
            </motion.div>

          </div>

        </motion.div>

        {/* RIGHT CONTENT */}

        <motion.div
          className="whyContent"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <span className="whyBadge">
            WHY CHOOSE YUVALAY
          </span>

          <h2>
            Building Skills,
            <span> Confidence </span>
            & Innovation Through Experience
          </h2>

          <p className="whyDesc">
            Yuvalay Makerspace is more than a learning space.
            It is a thriving innovation ecosystem where students,
            educators and creators collaborate, experiment and
            transform ideas into meaningful real-world solutions.
          </p>

          <div className="featuresGrid">

            {features.map((feature, index) => (

              <motion.div
                key={feature.title}
                className="featureCard"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >

                <div className="featureIcon">
                  {feature.icon}
                </div>

                <div>

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>

                  <span className="learnMore">

                    <FaCheckCircle />

                    Learn by Doing

                  </span>

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}