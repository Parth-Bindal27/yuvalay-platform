import "./stories.css";

const stories = [
  {
    name: "Aarav Shah",
    role: "Student Innovator",
    image: "/images/projects/story1.jpg",
    description:
      "Built an AI-powered waste management system that won a national innovation challenge."
  },
  {
    name: "Priya Patel",
    role: "Startup Founder",
    image: "/images/projects/story2.jpg",
    description:
      "Turned a college project into a startup with support from Yuvalay Makerspace."
  },
  {
    name: "Rohan Mehta",
    role: "Robotics Enthusiast",
    image: "/images/projects/story3.jpg",
    description:
      "Led a robotics team that represented the institution at an international competition."
  }
];

export default function Stories() {
  return (
    <section className="stories">

      <div className="storiesContainer">

        <div className="sectionHeading">

          <span className="section-label">
            Featured Stories
          </span>

          <h2>Inspiring Journeys</h2>

        </div>

        <div className="storiesGrid">

          {stories.map((story, index) => (

            <div className="storyCard" key={index}>

              <img src={story.image} alt={story.name} />

              <div className="storyContent">

                <h3>{story.name}</h3>

                <span>{story.role}</span>

                <p>{story.description}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}