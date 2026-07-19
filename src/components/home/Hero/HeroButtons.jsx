import { FaArrowRight, FaPlay } from "react-icons/fa6";

const HeroButtons = () => {
  return (
    <div className="hero-buttons">

      <a href="/programs" className="hero-btn primary">

        Explore Programs

        <FaArrowRight />

      </a>

      <button className="hero-btn secondary">

        <FaPlay />

        Watch Story

      </button>

    </div>
  );
};

export default HeroButtons;