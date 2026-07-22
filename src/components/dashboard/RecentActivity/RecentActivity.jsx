import "./RecentActivity.css";

import {
  FaCalendarAlt,
  FaCertificate,
  FaCode,
  FaHandsHelping,
  FaArrowRight,
} from "react-icons/fa";

export default function RecentActivity() {

  const activities = [

    {
      id:1,
      icon:<FaHandsHelping/>,
      title:"Participated in Blood Donation Camp",
      time:"2 Hours Ago",
      color:"green"
    },

    {
      id:2,
      icon:<FaCertificate/>,
      title:"Certificate Generated",
      time:"Yesterday",
      color:"blue"
    },

    {
      id:3,
      icon:<FaCode/>,
      title:"Project Updated",
      time:"3 Days Ago",
      color:"purple"
    },

    {
      id:4,
      icon:<FaCalendarAlt/>,
      title:"Registered for AI Workshop",
      time:"Last Week",
      color:"orange"
    }

  ];

  return(

<section className="activitySection">

<div className="activityHeading">

<div>

<h2>Recent Activity</h2>

<p>Your latest actions across Yuvalay.</p>

</div>

<button>

View All

</button>

</div>

<div className="activityContainer">

{
activities.map((item)=>(

<div
className="activityCard"
key={item.id}
>

<div className={`activityIcon ${item.color}`}>

{item.icon}

</div>

<div className="activityContent">

<h3>{item.title}</h3>

<span>{item.time}</span>

</div>

<button>

<FaArrowRight/>

</button>

</div>

))
}

</div>

</section>

)

}