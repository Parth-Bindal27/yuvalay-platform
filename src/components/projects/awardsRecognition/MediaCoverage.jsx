import "./mediaCoverage.css";

const media=[

{
title:"Featured in National Innovation Magazine",
year:"2026"
},

{
title:"Recognized by Local News",
year:"2025"
},

{
title:"STEM Excellence Interview",
year:"2024"
}

];

export default function MediaCoverage(){

return(

<section className="mediaCoverage">

<div className="mediaCoverageContainer">

<div className="sectionHeading">

<span className="section-label">

Media

</span>

<h2>

Featured Across Media

</h2>

</div>

<div className="mediaGrid">

{media.map((item,index)=>(

<div
className="mediaCard"
key={index}
>

<span>{item.year}</span>

<h3>{item.title}</h3>

</div>

))}

</div>

</div>

</section>

)

}