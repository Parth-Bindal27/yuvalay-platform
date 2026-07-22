import "./QuickActions.css";

import {
  FaCalendarAlt,
  FaLaptopCode,
  FaCertificate,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

export default function QuickActions() {

  const actions = [

    {
      title:"Join Event",
      desc:"Register for upcoming events",
      icon:<FaCalendarAlt/>,
      color:"green"
    },

    {
      title:"Book Makerspace",
      desc:"Reserve your workspace",
      icon:<FaLaptopCode/>,
      color:"blue"
    },

    {
      title:"Certificates",
      desc:"Download certificates",
      icon:<FaCertificate/>,
      color:"orange"
    },

    {
      title:"Community",
      desc:"Meet other innovators",
      icon:<FaUsers/>,
      color:"purple"
    }

  ];

  return(

<section className="quickSection">

<div className="quickHeading">

<div>

<h2>Quick Actions</h2>

<p>Everything you need in one place.</p>

</div>

</div>

<div className="quickGrid">

{

actions.map((item,index)=>(

<div
className="quickCard"
key={index}
>

<div className={`quickIcon ${item.color}`}>

{item.icon}

</div>

<h3>

{item.title}

</h3>

<p>

{item.desc}

</p>

<button>

Open

<FaArrowRight/>

</button>

</div>

))

}

</div>

</section>

)

}