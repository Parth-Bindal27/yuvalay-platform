import "./Achievements.css";

import {
  FaTrophy,
  FaMedal,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

export default function Achievements() {

  const achievements = [

    {
      id:1,
      title:"1st Position - Byte Runner",
      desc:"Won IIT Delhi TRYST Byte Runner Hackathon.",
      year:"2026",
      icon:<FaTrophy/>,
      color:"gold"
    },

    {
      id:2,
      title:"Top Volunteer",
      desc:"Recognized for outstanding community service.",
      year:"2026",
      icon:<FaMedal/>,
      color:"green"
    },

    {
      id:3,
      title:"Innovation Award",
      desc:"Awarded for AI based CivicEase project.",
      year:"2026",
      icon:<FaStar/>,
      color:"blue"
    }

  ];

  return(

<section className="achievementSection">

<div className="achievementHeading">

<div>

<h2>Achievements</h2>

<p>Milestones you've unlocked.</p>

</div>

<button>

View All

</button>

</div>

<div className="achievementGrid">

{

achievements.map((item)=>(

<div
className="achievementCard"
key={item.id}
>

<div className="achievementGlow"></div>

<div className={`achievementIcon ${item.color}`}>

{item.icon}

</div>

<span className="year">

{item.year}

</span>

<h3>

{item.title}

</h3>

<p>

{item.desc}

</p>

<button>

View Achievement

<FaArrowRight/>

</button>

</div>

))

}

</div>

</section>

)

}