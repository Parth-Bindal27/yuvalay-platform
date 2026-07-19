import "./../../../styles/home/hero.css";

import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";
import HeroImageCard from "./HeroImageCard";
import HeroButtons from "./HeroButtons";
import HeroReviews from "./HeroReviews";

const Hero = () => {
  return (
    <section className="hero">

      <HeroBackground />

      <div className="hero-container">

        {/* LEFT */}

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
        >

          <div className="hero-badge">

            <span className="hero-dot"></span>

            Building India's Future Innovators

          </div>

          <h1 className="hero-title">

            Where

            <span>Ideas Become</span>

            Innovation.

          </h1>

          <p className="hero-description">

            Empowering students, creators and entrepreneurs through
            hands-on learning, makerspaces, innovation labs,
            hackathons and real-world projects.

          </p>

          <HeroButtons />

          <HeroReviews />

        </motion.div>

        {/* RIGHT */}

        <HeroImageCard />

      </div>

    </section>
  );
};

export default Hero;