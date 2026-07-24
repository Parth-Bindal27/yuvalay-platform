import "./featuredInnovations.css";

const innovations = [

{
title:"AI Healthcare Assistant",
category:"Artificial Intelligence",
image:"/images/projects/innovation1.jpg"
},

{
title:"Autonomous Delivery Robot",
category:"Robotics",
image:"/images/projects/innovation2.jpg"
},

{
title:"Smart Agriculture System",
category:"IoT",
image:"/images/projects/innovation3.jpg"
}

];

export default function FeaturedInnovations(){

return(

<section className="featuredInnovations">

<div className="featuredInnovationsContainer">

<div className="sectionHeading">

<span className="section-label">

Flagship Projects

</span>

<h2>

Featured Innovations

</h2>

</div>

<div className="innovationCards">

{innovations.map((item,index)=>(

<div
className="innovationCard"
key={index}
>

<img
src={item.image}
alt={item.title}
/>

<div className="innovationContent">

<span>{item.category}</span>

<h3>{item.title}</h3>

</div>

</div>

))}

</div>

</div>

</section>

)

}