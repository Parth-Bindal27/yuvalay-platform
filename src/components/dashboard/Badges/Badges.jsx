import "./Badges.css";

import {
FaMedal,
FaStar,
FaFire,
FaRocket
} from "react-icons/fa";

export default function Badges(){

const badges=[

{
id:1,
title:"Top Volunteer",
icon:<FaMedal/>,
color:"gold"
},

{
id:2,
title:"Fast Learner",
icon:<FaRocket/>,
color:"green"
},

{
id:3,
title:"Innovation",
icon:<FaStar/>,
color:"blue"
},

{
id:4,
title:"Consistency",
icon:<FaFire/>,
color:"orange"
}

];

return(

<section className="badgesSection">

<div className="badgesHeading">

<div>

<h2>Badges</h2>

<p>Achievements you've unlocked.</p>

</div>

<button>

View All

</button>

</div>

<div className="badgesGrid">

{

badges.map((badge)=>(

<div
className="badgeCard"
key={badge.id}
>

<div className={`badgeIcon ${badge.color}`}>

{badge.icon}

</div>

<h3>{badge.title}</h3>

<span>Unlocked</span>

</div>

))

}

</div>

</section>

)

}