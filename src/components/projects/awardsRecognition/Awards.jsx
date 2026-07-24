import "./awards.css";
import { FiAward } from "react-icons/fi";

const awards=[

"National Innovation Award",
"Best Makerspace Initiative",
"Top STEM Education Program",
"Community Impact Recognition",
"Excellence in Robotics"

];

export default function Awards(){

return(

<section className="awardsSection">

<div className="awardsContainer">

<div className="sectionHeading">

<span className="section-label">

Achievements

</span>

<h2>

Awards We've Earned

</h2>

</div>

<div className="awardsGrid">

{awards.map((award,index)=>(

<div
className="awardCard"
key={index}
>

<div className="awardIcon">

<FiAward/>

</div>

<h3>{award}</h3>

</div>

))}

</div>

</div>

</section>

)

}