import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import "./EquipmentShowcase.css";

const equipment = [
  {
    name: "Arduino UNO",
    category: "Microcontroller",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
  },
  {
    name: "ESP32",
    category: "IoT Development",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200",
  },
  {
    name: "Raspberry Pi",
    category: "Single Board Computer",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
  },
  {
    name: "3D Printer",
    category: "Rapid Prototyping",
    image:
      "https://images.unsplash.com/photo-1581092335878-5d9ff86ca2bf?w=1200",
  },
  {
    name: "Drone Kit",
    category: "Aerial Robotics",
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200",
  },
  {
    name: "Laser Cutter",
    category: "Fabrication",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200",
  },
];

export default function EquipmentShowcase() {
  return (
    <section className="equipmentSection">

      <div className="equipmentHeading">

        <span className="section-tag">
          Innovation Tools
        </span>

        <h2>
          Equipment That Powers Ideas
        </h2>

        <p>
          Learn with professional tools used by engineers,
          designers and innovators to transform concepts into
          working prototypes.
        </p>

      </div>

      <div className="equipmentSlider">

        {equipment.map((item, index) => (

          <motion.div
            key={index}
            className="equipmentCard"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: .6,
              delay: index * .08,
            }}
            viewport={{ once: true }}
          >

            <div className="equipmentImage">

              <img
                src={item.image}
                alt={item.name}
              />

            </div>

            <div className="equipmentContent">

              <span>
                {item.category}
              </span>

              <h3>
                {item.name}
              </h3>

              <button>
                View Details
                <FaArrowRight />
              </button>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}