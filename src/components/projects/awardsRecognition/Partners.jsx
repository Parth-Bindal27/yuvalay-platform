import "./partners.css";

const partners=[

"Microsoft",
"Google",
"NVIDIA",
"Arduino",
"Intel",
"Autodesk"

];

export default function Partners(){

return(

<section className="partners">

<div className="partnersContainer">

<div className="sectionHeading">

<span className="section-label">

Collaborations

</span>

<h2>

Industry Partners

</h2>

</div>

<div className="partnerGrid">

{partners.map((partner,index)=>(

<div
className="partnerCard"
key={index}
>

<h3>{partner}</h3>

</div>

))}

</div>

</div>

</section>

)

}