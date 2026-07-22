import "./OverviewStats.css";
import {
  FaCalendarCheck,
  FaAward,
  FaLaptopCode,
  FaUsers,
  FaArrowTrendUp,
} from "react-icons/fa6";

export default function Overview() {

  const stats = [

    {
      title:"Events",
      value:"18",
      change:"+24%",
      icon:<FaCalendarCheck/>,
      color:"green"
    },

    {
      title:"Certificates",
      value:"12",
      change:"+10%",
      icon:<FaAward/>,
      color:"yellow"
    },

    {
      title:"Projects",
      value:"7",
      change:"+18%",
      icon:<FaLaptopCode/>,
      color:"blue"
    },

    {
      title:"Volunteer Hours",
      value:"145",
      change:"+32%",
      icon:<FaUsers/>,
      color:"purple"
    }

  ];

  return(

<section className="overview">

<div className="overviewTitle">

<h2>Overview</h2>

<p>Your Yuvalay journey at a glance.</p>

</div>

<div className="overviewGrid">

{

stats.map((item,index)=>(

<div
className="overviewCard"
key={index}
>

<div className="cardGlow"></div>

<div className="cardTop">

<div className={`icon ${item.color}`}>

{item.icon}

</div>

<div className="trend">

<FaArrowTrendUp/>

<span>{item.change}</span>

</div>

</div>

<h1>

{item.value}

</h1>

<h4>

{item.title}

</h4>

<div className="progressLine">

<div className={`fill ${item.color}`}></div>

</div>

</div>

))

}

</div>

</section>

)

}