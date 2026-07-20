import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCalendarPlus
} from "react-icons/fa";

import "./EventCTA.css";


export default function EventCTA(){

return(

<section className="eventCTA">


<div className="ctaBackground one"></div>
<div className="ctaBackground two"></div>



<motion.div

className="eventCTABox"

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.7
}}

viewport={{
once:true
}}

>



<div className="ctaIcon">

<FaCalendarPlus />

</div>




<span className="section-tag">

Collaborate With Us

</span>




<h2>

Ready To Create
Something Amazing?

</h2>




<p>

Host workshops, innovation challenges,
hackathons and community events with
Yuvalay.

</p>




<div className="ctaButtons">


<Link

to="/contact"

className="ctaPrimary"

>

Contact Us

<FaArrowRight/>

</Link>




<Link

to="/events"

className="ctaSecondary"

>

Explore Events

</Link>



</div>




</motion.div>



</section>

)

}