import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  RiArrowRightLine,
  RiGraduationCapLine,
  RiRocket2Line,
  RiLightbulbFlashLine,
  RiBuilding2Line
} from "react-icons/ri";

import "../../styles/home/aboutPreview.css";

const stats = [
  {
    icon: <RiGraduationCapLine />,
    number: "25K+",
    label: "Students"
  },
  {
    icon: <RiRocket2Line />,
    number: "950+",
    label: "Programs"
  },
  {
    icon: <RiLightbulbFlashLine />,
    number: "100K+",
    label: "Training Hours"
  },
  {
    icon: <RiBuilding2Line />,
    number: "Since 2014",
    label: "Building Innovators"
  }
];

export default function AboutPreview() {

  return (

    <section className="about">

      <div className="about-container">

        {/* LEFT */}

        <motion.div
          className="about-left"
          initial={{ opacity:0,x:-60 }}
          whileInView={{ opacity:1,x:0 }}
          viewport={{ once:true }}
          transition={{ duration:.8 }}
        >

          <span className="about-tag">
            ABOUT YUVALAY
          </span>

          <h2>

            Building
            <br />

            Future

            <span> Innovators.</span>

          </h2>

          <p>

            Yuvalay empowers students, innovators and entrepreneurs
            through makerspaces, startup mentoring, community
            initiatives, innovation labs and experiential learning.

          </p>

          <Link
            to="/about"
            className="about-button"
          >

            Learn More

            <RiArrowRightLine />

          </Link>

          <div className="about-stats">

            {

              stats.map((item,index)=>(

                <motion.div
                  key={index}
                  className="stat-card"
                  whileHover={{
                    y:-8,
                    scale:1.03
                  }}
                >

                  <div className="stat-icon">

                    {item.icon}

                  </div>

                  <h3>

                    {item.number}

                  </h3>

                  <span>

                    {item.label}

                  </span>

                </motion.div>

              ))

            }

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="about-right"
          initial={{ opacity:0,x:60 }}
          whileInView={{ opacity:1,x:0 }}
          viewport={{ once:true }}
          transition={{ duration:.8 }}
        >

          <div className="about-image-box">

            <img
              src="/images/about/about.jpg"
              alt="Yuvalay"
            />

            <div className="floating-card">

              <span>

                ⭐ Trusted Since 2014

              </span>

              <h4>

                Empowering India's
                Next Generation
                of Innovators

              </h4>

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  );

}