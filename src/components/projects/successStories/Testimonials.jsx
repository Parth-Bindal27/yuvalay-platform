import "./testimonials.css";

const testimonials = [
  {
    quote:
      "Yuvalay gave me the confidence to turn my prototype into a real solution.",
    name: "Startup Founder"
  },
  {
    quote:
      "The mentorship and maker ecosystem completely changed my learning journey.",
    name: "Engineering Student"
  },
  {
    quote:
      "The hands-on projects helped me secure internship opportunities.",
    name: "Alumnus"
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials">

      <div className="testimonialsContainer">

        <div className="sectionHeading">

          <span className="section-label">
            Testimonials
          </span>

          <h2>What Our Community Says</h2>

        </div>

        <div className="testimonialGrid">

          {testimonials.map((item, index) => (

            <div className="testimonialCard" key={index}>

              <p>"{item.quote}"</p>

              <h4>{item.name}</h4>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}