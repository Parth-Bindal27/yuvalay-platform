import { motion } from "framer-motion";
import "../../styles/home/trustedBy.css";

const partners = [
  {
    name: "Vadodara Innovation Council",
    logo: "/images/logos/vic.png",
  },
  {
    name: "MSME",
    logo: "/images/logos/msme.png",
  },
  {
    name: "Atal Innovation Mission",
    logo: "/images/logos/aim.png",
  },
  {
    name: "Startup India",
    logo: "/images/logos/startupindia.png",
  },
  {
    name: "NITI Aayog",
    logo: "/images/logos/niti.png",
  },
  {
    name: "Gujarat Government",
    logo: "/images/logos/gujarat.png",
  },
];

export default function TrustedBy() {
  return (
    <section className="trusted">

      <motion.div
        className="trusted-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>Trusted By</span>

        <h2>
          Supported By Leading
          <br />
          Organizations
        </h2>

      </motion.div>

      <div className="logo-slider">

        <div className="logo-track">

          {[...partners, ...partners].map((item, index) => (

            <div
              className="logo-card"
              key={index}
            >

              <img
                src={item.logo}
                alt={item.name}
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}