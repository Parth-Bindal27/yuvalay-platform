import { motion } from "framer-motion";
import {
  FiSun,
  FiEdit3,
  FiBox,
  FiTool,
  FiCheckCircle,
  FiSend,
} from "react-icons/fi";

const journey = [
  {
    icon: <FiSun />,
    title: "Ideate",
    desc: "Every innovation begins with curiosity, research and identifying real-world problems.",
  },
  {
    icon: <FiEdit3 />,
    title: "Design",
    desc: "Transform ideas into sketches, CAD models and detailed digital concepts.",
  },
  {
    icon: <FiBox />,
    title: "Prototype",
    desc: "Build functional prototypes quickly using 3D printers, laser cutters and fabrication tools.",
  },
  {
    icon: <FiTool />,
    title: "Build",
    desc: "Assemble, integrate electronics and manufacture your working solution.",
  },
  {
    icon: <FiCheckCircle />,
    title: "Test",
    desc: "Validate, refine and improve your prototype through continuous testing.",
  },
  {
    icon: <FiSend />,
    title: "Launch",
    desc: "Present, deploy or transform your innovation into a real-world product.",
  },
];

export default function JourneySection() {
  return (
    <section className="journeySection">

      <div className="sectionHeading">

        <span>INNOVATION JOURNEY</span>

        <h2>
          <span> From </span> Idea <span> to </span> Impact
        </h2>

        <p>
          Every project at Yuvalay Makerspace follows a structured
          innovation journey that converts ideas into impactful
          real-world solutions.
        </p>

      </div>

      <div className="journeyTimeline">

        {journey.map((item, index) => (

          <motion.div
            key={item.title}
            className="journeyCard"
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{
              duration:.6,
              delay:index*.08
            }}
          >

            <div className="journeyTop">

    <div className="journeyIcon">
        {item.icon}
    </div>

    <span className="journeyNumber">
        {String(index + 1).padStart(2,"0")}
    </span>

</div>

<h3>{item.title}</h3>

<p>{item.desc}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}