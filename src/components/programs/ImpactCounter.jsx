import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import {
  FaUsers,
  FaLightbulb,
  FaSchool,
  FaAward,
} from "react-icons/fa";

import "./ImpactCounter.css";

const stats = [
  {
    icon: <FaUsers />,
    number: 12000,
    suffix: "+",
    title: "Students Empowered",
  },
  {
    icon: <FaSchool />,
    number: 180,
    suffix: "+",
    title: "Schools & Colleges",
  },
  {
    icon: <FaLightbulb />,
    number: 950,
    suffix: "+",
    title: "Innovation Projects",
  },
  {
    icon: <FaAward />,
    number: 85,
    suffix: "+",
    title: "Awards & Recognitions",
  },
];

function AnimatedNumber({ value, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let animationFrame;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [inView, value]);

  return <>{count.toLocaleString()}</>;
}

export default function ImpactCounter() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.35,
  });

  return (
    <section className="impact-counter" ref={ref}>
      <div className="impact-overlay"></div>

      <motion.div
        className="impact-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>OUR IMPACT</span>

        <h2>
          Numbers That
          <br />
          Inspire Change
        </h2>

        <p>
          Every workshop, innovation project and community initiative
          contributes towards building a stronger ecosystem of young innovators.
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
              duration: 0.6,
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
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

            <p>{item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}