import "./featuredProject.css";

export default function FeaturedProject() {
  return (
    <section className="featuredProject">

      <div className="featuredProjectContainer">

        <div className="featuredImage">

          <img
            src="/images/projects/featured-project.jpg"
            alt="Featured Project"
          />

        </div>

        <div className="featuredContent">

          <span className="section-label">
            Featured Innovation
          </span>

          <h2>
            AI Powered Smart Agriculture
          </h2>

          <p>
            A multidisciplinary project integrating Artificial
            Intelligence, IoT sensors and real-time analytics to
            optimize irrigation, monitor crop health and improve
            agricultural productivity.
          </p>

        </div>

      </div>

    </section>
  );
}