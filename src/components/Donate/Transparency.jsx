import { motion } from "framer-motion";
import {
  FaChartPie,
  FaUserGraduate,
  FaTools,
  FaHandsHelping,
  FaCheckCircle,
} from "react-icons/fa";

import "./Transparency.css";

const allocation = [
  {
    icon: <FaUserGraduate />,
    title: "Student Programs",
    percent: "45%",
  },
  {
    icon: <FaTools />,
    title: "Makerspace Equipment",
    percent: "30%",
  },
  {
    icon: <FaHandsHelping />,
    title: "Community Outreach",
    percent: "15%",
  },
  {
    icon: <FaChartPie />,
    title: "Operations",
    percent: "10%",
  },
];

export default function Transparency() {
  return (
    <section className="transparency">

      <div className="transparency-header">

        <span className="section-tag">
          Transparency
        </span>

        <h2>
          Every Rupee Has
          A Purpose
        </h2>

        <p>
          We believe in complete transparency. Your donation
          directly supports innovation, education and community
          development.
        </p>

      </div>

      <div className="allocation-grid">

        {allocation.map((item, index) => (

          <motion.div
            key={index}
            className="allocation-card"
            initial={{ opacity:0,y:40 }}
            whileInView={{ opacity:1,y:0 }}
            transition={{ delay:index*.1 }}
            viewport={{ once:true }}
          >

            <div className="allocation-icon">
              {item.icon}
            </div>

            <h3>{item.percent}</h3>

            <p>{item.title}</p>

          </motion.div>

        ))}

      </div>

      <motion.div
        className="trust-banner"
        initial={{ opacity:0 }}
        whileInView={{ opacity:1 }}
        viewport={{ once:true }}
      >

        <FaCheckCircle />

        <div>

          <h3>Committed to Accountability</h3>

          <p>
            Regular reports, measurable outcomes and complete
            financial transparency ensure every contribution
            creates meaningful impact.
          </p>

        </div>

      </motion.div>

    </section>
  );
}