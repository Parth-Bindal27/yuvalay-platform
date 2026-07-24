import { Link } from "react-router-dom";
import { FaArrowRight, FaPlay } from "react-icons/fa6";

const HeroButtons = () => {
  return (
    <div className="hero-buttons">

      <Link to="/programs" className="hero-btn primary">
        Explore Programs
        <FaArrowRight />
      </Link>

      <Link to="/our-story" className="hero-btn secondary">
        <FaPlay />
        Watch Story
      </Link>

    </div>
  );
};

export default HeroButtons;