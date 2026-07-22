import "./Projects.css";

import {
  FaExternalLinkAlt,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaBrain,
} from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Yuvalay Makerspace",
      desc: "Official makerspace platform with authentication, dashboard and events.",
      status: "Live",
      progress: 92,
      tech: [
        <FaReact />,
        <FaNodeJs />,
        <FaDatabase />
      ],
    },

    {
      id: 2,
      title: "CivicEase AI",
      desc: "AI powered citizen portal with complaint generation & document assistant.",
      status: "Development",
      progress: 78,
      tech: [
        <FaReact />,
        <FaBrain />,
        <FaDatabase />
      ],
    },

    {
      id: 3,
      title: "RUPIQ AI",
      desc: "Expense tracker with AI insights and financial analytics.",
      status: "Completed",
      progress: 100,
      tech: [
        <FaReact />,
        <FaBrain />
      ],
    },

    {
      id: 4,
      title: "Portfolio Website",
      desc: "Modern developer portfolio with animations and premium UI.",
      status: "Live",
      progress: 95,
      tech: [
        <FaReact />
      ],
    },
  ];

  return (
    <section className="projectsSection">

      <div className="projectsHeading">

        <div>

          <h2>Projects</h2>

          <p>Things you've built inside Yuvalay.</p>

        </div>

        <button>View All</button>

      </div>

      <div className="projectsGrid">

        {projects.map((project) => (

          <div className="projectCard" key={project.id}>

            <div className="glassCircle"></div>

            <div className="cardHeader">

              <span className={`status ${project.status.toLowerCase().replace(" ","")}`}>
                {project.status}
              </span>

              <button className="iconBtn">
                <FaExternalLinkAlt />
              </button>

            </div>

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <div className="progressArea">

              <div className="progressTop">

                <span>Progress</span>

                <strong>{project.progress}%</strong>

              </div>

              <div className="progressBar">

                <div
                  className="progressFill"
                  style={{
                    width: `${project.progress}%`,
                  }}
                ></div>

              </div>

            </div>

            <div className="projectFooter">

              <div className="techIcons">

                {project.tech.map((icon, index) => (
                  <span key={index}>{icon}</span>
                ))}

              </div>

              <button className="githubBtn">

                <FaGithub />

                View Code

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}