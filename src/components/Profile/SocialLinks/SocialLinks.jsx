import "./SocialLinks.css";
import {
FaGithub,
FaLinkedin,
FaGlobe,
FaInstagram
} from "react-icons/fa";

export default function SocialLinks(){

const links=[

{
icon:<FaGithub/>,
title:"GitHub",
username:"Yuvalay"
},

{
icon:<FaLinkedin/>,
title:"LinkedIn",
username:"Yuvalay"
},

{
icon:<FaGlobe/>,
title:"Portfolio",
username:"yuvalay.vercel.app"
},

{
icon:<FaInstagram/>,
title:"Instagram",
username:"yuvalay"
}

]

return(

<section className="socialSection">

<h2>Social Links</h2>

<div className="socialGrid">

{

links.map((item,index)=>(

<div className="socialCard" key={index}>

<div className="socialIcon">
{item.icon}
</div>

<h3>{item.title}</h3>

<p>{item.username}</p>

</div>

))

}

</div>

</section>

)

}