import "./VisionMission.css";
import { motion } from "framer-motion";
import { FaArrowRight, FaEye, FaHeart, FaLightbulb, FaUsers } from "react-icons/fa";

const principles = [
  { icon: FaLightbulb, label: "Learn by doing" },
  { icon: FaUsers, label: "Grow together" },
];

export default function VisionMission() {
  return (
    <section className="visionMission" id="vision">
      <div className="visionContainer">
        <motion.div
          className="visionHeading"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span>OUR PURPOSE</span>
          <h2>Guided by purpose. Built for possibility.</h2>
        </motion.div>

        <div className="purposeGrid">
          <motion.article
            className="purposeCard visionCard"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
          >
            <div className="purposeIcon"><FaEye /></div>
            <span className="purposeLabel">OUR VISION</span>
            <h3>Every young mind sees themselves as a creator.</h3>
            <p>
              We envision an inclusive future where innovation is accessible,
              confidence is built through making, and every learner feels able
              to shape the world around them.
            </p>
            <div className="purposeAccent">01</div>
          </motion.article>

          <motion.article
            className="purposeCard missionCard"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <div className="purposeIcon"><FaHeart /></div>
            <span className="purposeLabel">OUR MISSION</span>
            <h3>Turn curiosity into meaningful action.</h3>
            <p>
              Through hands-on learning, mentorship and collaborative projects,
              we help students explore technology, solve real problems and grow
              into thoughtful innovators.
            </p>
            <div className="purposeAccent">02</div>
          </motion.article>
        </div>

        <motion.div
          className="principlesBar"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          <p>How we bring this to life</p>

          <div className="principleList">
            {principles.map((item) => {
              const Icon = item.icon;
              return (
                <div className="principle" key={item.label}>
                  <Icon />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>

          <a href="#contact" className="principlesLink">
            Join the journey <FaArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
