import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const HeroImageCard = () => {
  return (
    <motion.div
      className="hero-right"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: .9 }}
    >

      <div className="hero-image-wrapper">

        <img
          src="/images/makerspace.jpg"
          alt="Yuvalay Makerspace"
          className="hero-image"
        />

        {/* Mentorship Card */}

        <motion.div
          className="mentor-card glass"
          animate={{
            y: [0, -10, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 4
          }}
        >

          <div className="mentor-icon">

            🚀

          </div>

          <div>

            <h4>Startup Mentorship</h4>

            <p>

              Build with experts and launch faster.

            </p>

            <span>

              Know More

              <FaArrowRight />

            </span>

          </div>

        </motion.div>

        {/* Bootcamp Card */}

        <motion.div
          className="bootcamp-card glass"
          animate={{
            y: [0, 8, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 5
          }}
        >

          <span className="live-pill">

            ● LIVE

          </span>

          <p className="bootcamp-org">

            Yuvalay Makerspace

          </p>

          <h2>

            AI Innovation Bootcamp

          </h2>

          <p>

            Registrations Open

          </p>

          <button>

            Register Now

            <FaArrowRight />

          </button>

        </motion.div>

      </div>

    </motion.div>
  );
};

export default HeroImageCard;