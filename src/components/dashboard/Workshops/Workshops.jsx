import "./Workshops.css";

import {
  FaChalkboardTeacher,
  FaUsers,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaArrowRight,
} from "react-icons/fa";

export default function Workshops() {

  const workshops = [

    {
      id:1,
      title:"AI & Machine Learning Bootcamp",
      mentor:"Dr. Rohan Sharma",
      date:"25 July 2026",
      venue:"Innovation Lab",
      seats:"48 / 60",
      status:"Open"
    },

    {
      id:2,
      title:"UI/UX Design Masterclass",
      mentor:"Ananya Verma",
      date:"30 July 2026",
      venue:"Design Studio",
      seats:"52 / 60",
      status:"Few Seats"
    },

    {
      id:3,
      title:"IoT Hardware Workshop",
      mentor:"Akshay Patel",
      date:"8 August 2026",
      venue:"Electronics Lab",
      seats:"60 / 60",
      status:"Full"
    }

  ];

  return(

<section className="workshopSection">

<div className="workshopHeading">

<div>

<h2>Workshops</h2>

<p>Discover upcoming learning sessions.</p>

</div>

<button>

View All

</button>

</div>

<div className="workshopGrid">

{

workshops.map((item)=>(

<div
className="workshopCard"
key={item.id}
>

<div className="workshopGlow"></div>

<div className="workshopTop">

<span className={`status ${item.status.replace(" ","").toLowerCase()}`}>

{item.status}

</span>

<div className="iconBox">

<FaChalkboardTeacher/>

</div>

</div>

<h3>

{item.title}

</h3>

<p>

Mentored by <strong>{item.mentor}</strong>

</p>

<div className="meta">

<span>

<FaCalendarAlt/>

{item.date}

</span>

<span>

<FaMapMarkerAlt/>

{item.venue}

</span>

<span>

<FaUsers/>

{item.seats}

</span>

</div>

<button>

Register

<FaArrowRight/>

</button>

</div>

))

}

</div>

</section>

)

}