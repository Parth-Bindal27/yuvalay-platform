import "./cta.css";

import { Link } from "react-router-dom";

import { FiArrowRight } from "react-icons/fi";

export default function CTA(){

return(

<section className="innovationCTA">

<div className="innovationCTAContainer">

<span className="section-label">

Create With Us

</span>

<h2>

Ready to Build
<br/>
the Next Innovation?

</h2>

<p>

Join Yuvalay Makerspace and turn your ideas into impactful
solutions with access to mentorship, tools and a vibrant
innovation community.

</p>

<Link
to="/contact"
className="innovationPrimaryBtn"
>

Start Innovating

<FiArrowRight/>

</Link>

</div>

</section>

)

}