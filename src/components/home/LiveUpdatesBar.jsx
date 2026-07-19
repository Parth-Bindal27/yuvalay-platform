import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { RiBroadcastLine } from "react-icons/ri";
import "../../styles/home/liveUpdates.css";

const updates = [
  "🚀 AI Bootcamp registrations are now open!",
  "🌱 Tree Plantation Drive this Saturday.",
  "🏆 Team Yuvalay selected for National Innovation Showcase.",
  "💡 Makerspace now open for new members.",
  "📢 Internship applications closing soon.",
];

export default function LiveUpdatesBar() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % updates.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section
      className="live-updates"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="live-container">

        <div className="live-badge">
          <span className="pulse"></span>
          <RiBroadcastLine />
          <span>LIVE</span>
        </div>

        <div className="live-text">

          <AnimatePresence mode="wait">

            <motion.p
              key={index}
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -18, opacity: 0 }}
              transition={{ duration: .35 }}
            >
              {updates[index]}
            </motion.p>

          </AnimatePresence>

        </div>

        <Link to="/news" className="view-all">
          View All →
        </Link>

      </div>
    </section>
  );
}