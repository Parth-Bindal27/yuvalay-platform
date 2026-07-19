// src/components/home/Partners.jsx

import { motion } from "framer-motion";
import "../../styles/home/partners.css";

const partners = [
  {
    name: "Vadodara Innovation Council",
    logo: "/images/partners/vic.png",
  },
  {
    name: "Startup India",
    logo: "/images/partners/startupindia.png",
  },
  {
    name: "MSME",
    logo: "/images/partners/msme.png",
  },
  {
    name: "Atal Innovation Mission",
    logo: "/images/partners/aim.png",
  },
  {
    name: "NITI Aayog",
    logo: "/images/partners/niti.png",
  },
  {
    name: "Gujarat Government",
    logo: "/images/partners/gujarat.png",
  },
  {
    name: "AICTE",
    logo: "/images/partners/aicte.png",
  },
  {
    name: "Industry Partner",
    logo: "/images/partners/company.png",
  },
];

export default function Partners() {
  return (
    <section className="partners-section">

      <motion.div
        className="partners-header"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <span className="section-tag">
          Partnerships
        </span>

        <h2>
          Together We Build
          <br />
          The Future
        </h2>

        <p>
          Yuvalay collaborates with government bodies,
          educational institutions, startups and industry
          leaders to create meaningful opportunities.
        </p>

      </motion.div>

      <div className="partners-slider">

        <div className="partners-track">

          {[...partners, ...partners].map((partner, index) => (

            <motion.div
              key={index}
              className="partner-card"
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
            >

              <img
                src={partner.logo}
                alt={partner.name}
              />

              <span>
                {partner.name}
              </span>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}