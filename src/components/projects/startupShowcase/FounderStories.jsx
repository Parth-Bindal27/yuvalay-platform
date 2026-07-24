import "./founderStories.css";

export default function FounderStories() {
  return (
    <section className="founderStories">

      <div className="founderStoriesContainer">

        <div className="founderImage">

          <img
            src="/images/projects/founder-story.jpg"
            alt="Founder Story"
          />

        </div>

        <div className="founderContent">

          <span className="section-label">
            Founder Spotlight
          </span>

          <h2>
            From Makerspace
            <br />
            To Market
          </h2>

          <p>
            Every successful startup begins with a simple idea.
            At Yuvalay Makerspace, founders receive mentorship,
            access to advanced tools and a collaborative ecosystem
            to transform ideas into impactful businesses.
          </p>

        </div>

      </div>

    </section>
  );
}