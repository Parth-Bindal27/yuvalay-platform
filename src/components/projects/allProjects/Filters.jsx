import "./filters.css";

const filters = [
  "All",
  "AI",
  "Robotics",
  "IoT",
  "Electronics",
  "STEM",
  "Software",
  "3D Printing"
];

export default function Filters() {
  return (
    <section className="projectFilters">

      <div className="projectFiltersContainer">

        {filters.map((filter, index) => (
          <button
            key={index}
            className={index === 0 ? "active" : ""}
          >
            {filter}
          </button>
        ))}

      </div>

    </section>
  );
}