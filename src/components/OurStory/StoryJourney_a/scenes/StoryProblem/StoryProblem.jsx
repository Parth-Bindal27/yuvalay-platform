import "./StoryProblem.css";

export default function StoryProblem() {
  return (
    <section className="story-problem">
      <div className="story-problem__overlay"></div>

      {/* Floating Lights */}
      <div className="story-problem__lights">
        {[...Array(80)].map((_, index) => (
          <span
            key={index}
            className="story-problem__light"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="story-problem__content">
        <span className="story-problem__chapter">
          CHAPTER 02
        </span>

        <h2 className="story-problem__title">
          Every Student
          <br />
          Has An Idea.
        </h2>

        <p className="story-problem__subtitle">
          But most ideas never become reality.
        </p>

        <div className="story-problem__divider"></div>

        <p className="story-problem__text">
          Not because they lack talent.
          <br />
          But because they lack guidance,
          mentors, tools and a place to build.
        </p>

        <h3 className="story-problem__highlight">
          Innovation shouldn't depend on privilege.
        </h3>
      </div>
    </section>
  );
}