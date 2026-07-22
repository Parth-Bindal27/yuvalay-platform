import "./VolunteerHistory.css";

import {
  FaHandsHelping,
  FaClock,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

export default function VolunteerHistory() {
  const history = [
    {
      id: 1,
      title: "Blood Donation Camp",
      date: "18 May 2026",
      location: "Yuvalay Makerspace",
      hours: "8 Hours",
    },
    {
      id: 2,
      title: "Tree Plantation Drive",
      date: "25 June 2026",
      location: "Vadodara",
      hours: "6 Hours",
    },
    {
      id: 3,
      title: "Community Teaching",
      date: "5 July 2026",
      location: "Government School",
      hours: "12 Hours",
    },
    {
      id: 4,
      title: "Cleanliness Drive",
      date: "16 July 2026",
      location: "Akota",
      hours: "5 Hours",
    },
  ];

  return (
    <section className="volunteerSection">

      <div className="sectionHeader">
        <div>
          <h2>Volunteer History</h2>
          <p>Your contribution towards society through Yuvalay.</p>
        </div>

        <button>View All</button>
      </div>

      <div className="volunteerGrid">

        {history.map((item) => (

          <div className="volunteerCard" key={item.id}>

            <div className="cardTop">

              <div className="iconBox">
                <FaHandsHelping />
              </div>

              <span className="hoursBadge">
                {item.hours}
              </span>

            </div>

            <h3>{item.title}</h3>

            <div className="meta">

              <span>
                {item.date}
              </span>

              <span>
                <FaMapMarkerAlt />
                {item.location}
              </span>

            </div>

            <button className="detailsBtn">
              View Details
              <FaArrowRight />
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}