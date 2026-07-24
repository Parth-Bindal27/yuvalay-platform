import "./timeline.css";
import {
  FiCompass,
  FiBookOpen,
  FiCpu,
  FiTool,
  FiAward,
} from "react-icons/fi";

const steps = [
  {
    icon: <FiCompass />,
    title: "Explore",
    desc: "Discover emerging technologies through workshops and interactive sessions.",
  },
  {
    icon: <FiBookOpen />,
    title: "Learn",
    desc: "Build practical skills with expert mentors and guided learning.",
  },
  {
    icon: <FiCpu />,
    title: "Experiment",
    desc: "Prototype ideas using AI, Robotics, IoT and maker tools.",
  },
  {
    icon: <FiTool />,
    title: "Build",
    desc: "Turn concepts into real-world projects through collaboration.",
  },
  {
    icon: <FiAward />,
    title: "Showcase",
    desc: "Present your work in exhibitions, competitions and hackathons.",
  },
];

export default function JourneyTimeline() {
  return (
    <section className="journey">

      <div className="journey-container">

        <span className="section-label">
          Journey
        </span>

        <h2>
          Your Journey From Idea To Innovation
        </h2>

        <p className="journey-subtitle">
          A simple pathway designed to help every learner become a confident maker.
        </p>

        <div className="journey-grid">

          {steps.map((step, index) => (
            <div className="journey-card" key={index}>

              <div className="journey-icon">
                {step.icon}
              </div>

              <span className="journey-number">
                0{index + 1}
              </span>

              <h3>{step.title}</h3>

              <p>{step.desc}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}