import { motion } from "framer-motion";
import {
  FiBox,
  FiCpu,
  FiTool,
  FiMonitor,
  FiActivity,
  FiLayers,
} from "react-icons/fi";

const equipment = [
  {
    icon: <FiBox />,
    title: "3D Printers",
    subtitle: "Rapid Prototyping",
    desc: "Create accurate prototypes and functional models with industrial-grade 3D printers.",
    badge: "Available",
  },
  {
    icon: <FiCpu />,
    title: "Arduino & IoT Kits",
    subtitle: "Embedded Systems",
    desc: "Experiment with sensors, automation, IoT and smart devices.",
    badge: "120+ Kits",
  },
  {
    icon: <FiTool />,
    title: "Mechanical Tools",
    subtitle: "Fabrication",
    desc: "Professional tools for drilling, cutting, assembling and prototyping.",
    badge: "Workshop",
  },
  {
    icon: <FiMonitor />,
    title: "High-End PCs",
    subtitle: "AI & Design",
    desc: "Powerful workstations for CAD, simulations and machine learning.",
    badge: "RTX Ready",
  },
  {
    icon: <FiActivity />,
    title: "Electronics Bench",
    subtitle: "Circuit Design",
    desc: "Oscilloscopes, soldering stations and testing equipment.",
    badge: "Fully Equipped",
  },
  {
    icon: <FiLayers />,
    title: "Laser & CNC",
    subtitle: "Precision Manufacturing",
    desc: "Manufacture parts with precision cutting and engraving.",
    badge: "Coming Soon",
  },
];

export default function EquipmentSection() {
  return (
    <section className="equipmentSection">

      <div className="sectionHeading">

        <span>TOOLS & MACHINES</span>

        <h2>
          Equipment That Powers
          <span> Innovation</span>
        </h2>

        <p>
          Explore professional-grade machines and tools that
          enable students to transform concepts into working
          prototypes and real-world products.
        </p>

      </div>

      <div className="equipmentGrid">

        {equipment.map((item, index) => (

          <motion.div
            key={item.title}
            className="equipmentCard"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: .6,
              delay: index * .08,
            }}
          >

            <div className="equipmentTop">

              <div className="equipmentIcon">

                {item.icon}

              </div>

              <span className="equipmentBadge">

                {item.badge}

              </span>

            </div>

            <h3>

              {item.title}

            </h3>

            <h5>

              {item.subtitle}

            </h5>

            <p>

              {item.desc}

            </p>

            <button>

              Learn More →

            </button>

          </motion.div>

        ))}

      </div>

    </section>
  );
}