import "./PartnersAndSupporters.css";
import { motion } from "framer-motion";
import {
  FaUniversity,
  FaIndustry,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";

const partners = [
  {
    logo: "/images/partners/vic.png",
    name: "Vadodara Innovation Council",
    type: "Innovation Partner",
    icon: <FaUniversity />,
  },

  {
    logo: "/images/partners/msme.png",
    name: "MSME",
    type: "Government Support",
    icon: <FaHandshake />,
  },

  {
    logo: "/images/partners/industry.png",
    name: "Industry Partner",
    type: "Industry Collaboration",
    icon: <FaIndustry />,
  },

  {
    logo: "/images/partners/school.png",
    name: "Education Partner",
    type: "School Network",
    icon: <FaUniversity />,
  },

  {
    logo: "/images/partners/startup.png",
    name: "Startup Ecosystem",
    type: "Innovation Hub",
    icon: <FaHandshake />,
  },

  {
    logo: "/images/partners/community.png",
    name: "Community Partner",
    type: "Social Impact",
    icon: <FaHandshake />,
  },
];

export default function PartnersAndSupporters() {
  return (
    <section className="partners">

      <div className="partnerBlur leftBlur"></div>
      <div className="partnerBlur rightBlur"></div>

      <div className="partnersContainer">

        <motion.div
          className="partnersHeading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >

          <span className="partnersBadge">
            OUR ECOSYSTEM
          </span>

          <h2>

            Trusted By
            <span> Schools, Industries </span>
            & Communities

          </h2>

          <p>

            Yuvalay collaborates with educational institutions,
            government organizations, industries and innovation
            leaders to create meaningful learning experiences.

          </p>

        </motion.div>

        <div className="partnersGrid">

          {partners.map((partner, index) => (

            <motion.div
              key={partner.name}
              className="partnerCard"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .08,
              }}
              whileHover={{ y: -8 }}
            >

              <div className="partnerLogo">

                <img
                  src={partner.logo}
                  alt={partner.name}
                />

              </div>

              <div className="partnerIcon">
                {partner.icon}
              </div>

              <h3>{partner.name}</h3>

              <p>{partner.type}</p>

              <button>

                Explore Partnership

                <FaArrowRight />

              </button>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}