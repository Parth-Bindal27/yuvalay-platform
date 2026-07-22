import "./MyEvents.css";

import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCertificate,
  FaPlus
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

export default function MyEvents() {

  const navigate = useNavigate();

  const events = [

    {
      id:1,
      image:"https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600",
      title:"AI Bootcamp",
      date:"12 July 2026",
      location:"Yuvalay Makerspace",
      status:"Participated",
      certificate:true
    },

    {
      id:2,
      image:"https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600",
      title:"Tree Plantation Drive",
      date:"28 June 2026",
      location:"Gorwa, Vadodara",
      status:"Participated",
      certificate:false
    },

    {
      id:3,
      image:"https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=600",
      title:"Blood Donation Camp",
      date:"18 May 2026",
      location:"Yuvalay Makerspace",
      status:"Participated",
      certificate:true
    },

    {
      id:4,
      image:"https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600",
      title:"IoT Workshop",
      date:"3 May 2026",
      location:"Yuvalay Makerspace",
      status:"Upcoming",
      certificate:false
    }

  ];

  return (

<section className="myEvents">

<div className="eventsHeader">

<div>

<h2>My Events</h2>

<p>Events you have participated in.</p>

</div>

<button
onClick={()=>navigate("/events")}
className="newEventBtn"
>

<FaPlus/>

Participate in New Event

</button>

</div>

<div className="eventsGrid">

{

events.map(event=>(

<div className="eventCard" key={event.id}>

<img
src={event.image}
alt={event.title}
/>

<div className="eventBody">

<h3>{event.title}</h3>

<div className="eventMeta">

<span>

<FaCalendarAlt/>

{event.date}

</span>

<span>

<FaMapMarkerAlt/>

{event.location}

</span>

</div>

<div className="eventBadges">

<span className={`status ${event.status.toLowerCase()}`}>
{event.status}
</span>

{

event.certificate &&

<span className="certificate">

<FaCertificate/>

Certificate Available

</span>

}

</div>

<button>

View Details

<FaArrowRight/>

</button>

</div>

</div>

))

}

</div>

</section>

  );

}