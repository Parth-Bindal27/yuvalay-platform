import "./HeroSlider.css";
import heroSlides from "./heroData";
import { useEffect, useState } from "react";

export default function HeroSlider(){

const [current,setCurrent]=useState(0);

useEffect(()=>{

const timer=setInterval(()=>{

setCurrent(prev=>(prev+1)%heroSlides.length);

},5000);

return ()=>clearInterval(timer);

},[]);

return(

<div className="hero-card">

<div
className="hero-image"
style={{
backgroundImage:`url(${heroSlides[current].image})`
}}
>

<div className="image-overlay"></div>

</div>

<div className="hero-card-footer">

<div>

<h3>

🤖 {heroSlides[current].title}

</h3>

<p>

{heroSlides[current].subtitle}

</p>

</div>

<div className="hero-dots">

{
heroSlides.map((_,index)=>(

<button

key={index}

onClick={()=>setCurrent(index)}

className={current===index?"active-dot":"dot"}

>

</button>

))
}

</div>

</div>

</div>

)

}