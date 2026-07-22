import "./Research.css";

import {
  FaFlask,
  FaBrain,
  FaRobot,
  FaArrowRight,
} from "react-icons/fa";

export default function Research() {

  const research = [

    {
      id:1,
      title:"AI Powered Agriculture",
      desc:"Smart crop prediction using machine learning models.",
      tag:"Artificial Intelligence",
      progress:82,
      icon:<FaBrain/>
    },

    {
      id:2,
      title:"IoT Water Monitoring",
      desc:"Real-time monitoring system using ESP32 sensors.",
      tag:"IoT",
      progress:65,
      icon:<FaRobot/>
    },

    {
      id:3,
      title:"Renewable Energy",
      desc:"Low-cost solar optimization for rural communities.",
      tag:"Research",
      progress:95,
      icon:<FaFlask/>
    }

  ];

  return(

<section className="researchSection">

<div className="researchHeading">

<div>

<h2>Research</h2>

<p>Current innovations you're working on.</p>

</div>

<button>

View All

</button>

</div>

<div className="researchGrid">

{

research.map((item)=>(

<div
className="researchCard"
key={item.id}
>

<div className="researchGlow"></div>

<div className="researchIcon">

{item.icon}

</div>

<span className="researchTag">

{item.tag}

</span>

<h3>

{item.title}

</h3>

<p>

{item.desc}

</p>

<div className="researchProgressTop">

<span>Progress</span>

<strong>

{item.progress}%

</strong>

</div>

<div className="researchBar">

<div
className="researchFill"
style={{
width:`${item.progress}%`
}}
></div>

</div>

<button>

Open Research

<FaArrowRight/>

</button>

</div>

))

}

</div>

</section>

)

}