import { motion } from "framer-motion";
import {
  FiCpu,
  FiBox,
  FiTool,
  FiZap,
  FiPenTool,
  FiSettings,
  FiArrowRight,
} from "react-icons/fi";

const zones = [
  {
    icon: <FiBox />,
    title: "3D Printing Lab",
    description:
      "Transform digital concepts into physical prototypes using advanced 3D printing technology.",
    tag: "Rapid Prototyping",
  },
  {
    icon: <FiZap />,
    title: "Electronics & IoT",
    description:
      "Build smart devices with Arduino, Raspberry Pi, ESP32 and modern sensor technologies.",
    tag: "Embedded Systems",
  },
  {
    icon: <FiSettings />,
    title: "Robotics Arena",
    description:
      "Design autonomous robots and intelligent machines for real-world applications.",
    tag: "Automation",
  },
  {
    icon: <FiPenTool />,
    title: "Design Studio",
    description:
      "Create product designs, CAD models, UI/UX interfaces and engineering concepts.",
    tag: "Creative Design",
  },
  {
    icon: <FiCpu />,
    title: "AI & Computing Hub",
    description:
      "Develop AI models, computer vision projects and next-generation software solutions.",
    tag: "Artificial Intelligence",
  },
  {
    icon: <FiTool />,
    title: "Mechanical Workshop",
    description:
      "Professional fabrication space equipped with precision tools for building prototypes.",
    tag: "Fabrication",
  },
];

export default function InnovationZones() {
  return (
    <section className="innovationZones" id="zones">
      <div className="sectionHeading">

        <span>INNOVATION ZONES</span>

        <h2>
          Explore Every Corner of the
          Makerspace
        </h2>

        <p>
          Every zone is designed to encourage experimentation,
          collaboration and hands-on innovation across multiple
          engineering disciplines.
        </p>

      </div>

      <div className="zonesGrid">

        {zones.map((zone, index) => (

          <motion.div
            key={zone.title}
            className="zoneCard"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
          >

            <div className="zoneIcon">
              {zone.icon}
            </div>

            <span className="zoneTag">
              {zone.tag}
            </span>

            <h3>
              {zone.title}
            </h3>

            <p>
              {zone.description}
            </p>

            <button className="zoneButton">

              Explore

              <FiArrowRight />

            </button>

          </motion.div>

        ))}

      </div>
    </section>
  );
}