import "./cta.css";

import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function CTA(){

return(

<section className="awardsCTA">

<div className="awardsCTAContainer">

<span className="section-label">

Join Our Journey

</span>

<h2>

Be Part of
<br/>
Our Next Achievement

</h2>

<p>

Whether you're a student, innovator, mentor or industry
partner, let's create impactful innovations together.

</p>

<Link
to="/contact"
className="awardsPrimaryBtn"
>

Partner With Us

<FiArrowRight/>

</Link>

</div>

</section>

)

}