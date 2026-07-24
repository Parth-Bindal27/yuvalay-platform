import "./innovationProcess.css";

const process=[

"Identify the Problem",

"Research & Ideation",

"Prototype Development",

"Testing & Validation",

"Final Showcase"

];

export default function InnovationProcess(){

return(

<section className="innovationProcess">

<div className="innovationProcessContainer">

<div className="sectionHeading">

<span className="section-label">

Innovation Journey

</span>

<h2>

From Idea to Impact

</h2>

</div>

<div className="processTimeline">

{process.map((step,index)=>(

<div
className="processCard"
key={index}
>

<div className="stepNumber">

{index+1}

</div>

<h3>

{step}

</h3>

</div>

))}

</div>

</div>

</section>

)

}