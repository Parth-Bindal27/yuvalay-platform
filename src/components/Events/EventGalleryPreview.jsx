import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import "./EventGalleryPreview.css";


const images = [

{
image:
"https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900",
title:"Innovation Workshop",
category:"Workshop"
},

{
image:
"https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900",
title:"Hackathon Event",
category:"Hackathon"
},

{
image:
"https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900",
title:"Student Collaboration",
category:"Community"
},

{
image:
"https://images.unsplash.com/photo-1511578314322-379afb476865?w=900",
title:"Award Ceremony",
category:"Competition"
},

{
image:
"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900",
title:"Technology Session",
category:"Workshop"
},

];


export default function EventGalleryPreview(){


return(

<section className="eventGalleryPreview">


<div className="galleryPreviewHeading">


<span className="section-tag">
Event Memories
</span>


<h2>
Moments That Inspired Innovation
</h2>


<p>
Explore highlights from our workshops,
hackathons, competitions and community events.
</p>


</div>





<div className="eventGalleryGrid">


{
images.map((item,index)=>(


<motion.div

key={index}

className={`eventGalleryCard card${index}`}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.5,
delay:index*.1
}}

viewport={{
once:true
}}

>


<img

src={item.image}

alt={item.title}

/>



<div className="galleryOverlay">


<span>
{item.category}
</span>


<h3>
{item.title}
</h3>


</div>



</motion.div>


))

}



</div>





<Link

to="/gallery"

className="galleryViewButton"

>

View All Memories

<FaArrowRight/>

</Link>



</section>

)

}