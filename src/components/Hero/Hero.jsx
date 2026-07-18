import "./Hero.css";
import HeroSlider from "./HeroSlider";
import StatCard from "./StatCard";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-left">

          <span className="hero-badge">
            🚀 Welcome to Yuvalay
          </span>

          <h1>
            Empowering
            <span> Tomorrow's </span>
            Innovators.
          </h1>

          <p className="hero-text">
            Robotics • Artificial Intelligence • IoT • 3D Printing • Innovation • Hands-on Learning
          </p>

          <p className="hero-description">
            Yuvalay inspires students through practical learning,
            innovation, creativity and real-world problem solving.
            Learn by building, experimenting and creating.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Explore Programs
            </button>

            <button className="secondary-btn">
              Visit Makerspace
            </button>
          </div>

          <div className="hero-stats">

            <StatCard
                icon="🎓"
                end={5000}
                suffix="+"
                title="Students"
            />

            <StatCard
                icon="🤖"
                end={120}
                suffix="+"
                title="Workshops"
            />

            <StatCard
                icon="🏫"
                end={150}
                suffix="+"
                title="Schools"
            />

            </div>

        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <HeroSlider />
        </div>

      </div>
    </section>
  );
}