import "./stories.css";
import { FiArrowRight } from "react-icons/fi";

const stories = [
  {
    title: "From Curiosity To AI Innovation",
    category: "Student Story",
    image: "/images/impact/story1.jpg",
    description:
      "A learner discovered Artificial Intelligence through Yuvalay workshops and went on to develop an AI-powered attendance system.",
  },
  {
    title: "Building Smart Solutions Together",
    category: "School Project",
    image: "/images/impact/story2.jpg",
    description:
      "A team of students collaborated to create a smart irrigation prototype that addressed real agricultural challenges.",
  },
  {
    title: "Empowering Communities Through STEM",
    category: "Volunteer Story",
    image: "/images/impact/story3.jpg",
    description:
      "Volunteers organized maker sessions that inspired hundreds of students to explore technology and innovation.",
  },
];

export default function Stories() {
  return (
    <section className="impactStories">

      <div className="impactStories-container">

        <span className="section-label">
          Featured Stories
        </span>

        <h2>
          Real People.
          <br />
          Real Innovation.
        </h2>

        <p className="impactStories-subtitle">
          Every project begins with a single idea and grows through learning,
          collaboration and determination.
        </p>

        {stories.map((story, index) => (

          <div
            key={index}
            className={`storyRow ${index % 2 !== 0 ? "reverse" : ""}`}
          >

            <div className="storyImage">

              <img
                src={story.image}
                alt={story.title}
              />

            </div>

            <div className="storyContent">

              <span>{story.category}</span>

              <h3>{story.title}</h3>

              <p>{story.description}</p>

              <button>

                Read Story

                <FiArrowRight />

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}