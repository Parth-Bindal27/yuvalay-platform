import "./Internship.css";

import {
  FaBuilding,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaAward,
  FaArrowRight,
} from "react-icons/fa";

export default function Internship() {

  const internships = [

    {
      id:1,
      company:"Yuvalay Makerspace",
      role:"Web Development Intern",
      duration:"June 2026 - July 2026",
      location:"Vadodara (Remote)",
      status:"Completed",
      certificate:true
    },

    {
      id:2,
      company:"Ek-Prayass",
      role:"Frontend Developer",
      duration:"9 June 2026 - 20 July 2026",
      location:"Ghaziabad (Remote)",
      status:"Completed",
      certificate:true
    }

  ];

  return(

<section className="internshipSection">

<div className="internshipHeading">

<div>

<h2>Internships</h2>

<p>Professional experience and industry exposure.</p>

</div>

<button>

View All

</button>

</div>

<div className="internshipGrid">

{

internships.map((item)=>(

<div
className="internshipCard"
key={item.id}
>

<div className="internshipGlow"></div>

<div className="cardTop">

<div className="companyIcon">

<FaBuilding/>

</div>

<span className="status">

{item.status}

</span>

</div>

<h3>

{item.role}

</h3>

<h4>

{item.company}

</h4>

<div className="internMeta">

<span>

<FaCalendarAlt/>

{item.duration}

</span>

<span>

<FaMapMarkerAlt/>

{item.location}

</span>

</div>

<div className="bottomRow">

{

item.certificate &&

<div className="certificate">

<FaAward/>

Certificate

</div>

}

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

)

}