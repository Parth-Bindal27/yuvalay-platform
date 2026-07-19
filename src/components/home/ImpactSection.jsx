import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import {
  FaUsers,
  FaLightbulb,
  FaSchool,
  FaAward,
} from "react-icons/fa";

import "../../styles/home/impactSection.css";

const stats = [
  {
    icon: <FaUsers />,
    number: 25000,
    suffix: "+",
    title: "Students Empowered",
    description:
      "Young innovators trained through workshops and hands-on learning.",
  },
  {
    icon: <FaSchool />,
    number: 950,
    suffix: "+",
    title: "Programs Conducted",
    description:
      "Innovation programs delivered across schools and colleges.",
  },
  {
    icon: <FaLightbulb />,
    number: 120,
    suffix: "+",
    title: "Startup Ideas",
    description:
      "Ideas transformed into impactful startups and prototypes.",
  },
  {
    icon: <FaAward />,
    number: 100000,
    suffix: "+",
    title: "Training Hours",
    description:
      "Hours invested in building future-ready innovators.",
  },
];

function AnimatedNumber({ value, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let animationFrame;

    const duration = 2000;
    const start = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1);

      setCount(Math.floor(progress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [value, inView]);

  return <>{count.toLocaleString()}</>;
}

export default function ImpactCounter() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="impact-counter" ref={ref}>

      <div className="impact-overlay"></div>

      <motion.div
        className="impact-heading"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        <span className="section-tag">
          OUR IMPACT
        </span>

        <h2>
          Empowering Ideas
          <br />
          Creating Innovators
        </h2>

        <p>
          Every workshop, project and mentorship session contributes
          towards building the next generation of innovators,
          entrepreneurs and changemakers.
        </p>

      </motion.div>

      <div className="impact-grid">
                {stats.map((item, index) => (

          <motion.div
            key={index}
            className="impact-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.12,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -12,
              scale: 1.03,
            }}
          >

            <div className="impact-icon">
              {item.icon}
            </div>

            <h3>

              <AnimatedNumber
                value={item.number}
                inView={inView}
              />

              {item.suffix}

            </h3>

            <h4>
              {item.title}
            </h4>

            <p>
              {item.description}
            </p>

          </motion.div>

        ))}

      </div>

      <motion.div
        className="impact-bottom"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}
      >

        <div className="impact-bottom-content">

          <span className="impact-label">
            Since 2014
          </span>

          <h3>
            Innovation begins with one idea.
          </h3>

          <p>
            Every workshop, innovation challenge and community
            initiative inspires students to build meaningful
            technology and solve real-world problems.
          </p>

        </div>

        <a
          href="/about"
          className="impact-btn"
        >
          Explore Yuvalay →
        </a>

      </motion.div>

    </section>
  );
}