import "./intro.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function Intro(){

return(

<section className="awardsIntro">

<div className="awardsIntroContainer">

<div className="awardsIntroContent">

<span className="section-label">
Awards & Recognition
</span>

<h2>

Celebrating
<br/>
Innovation & Excellence

</h2>

<p>

Every milestone reflects the dedication of our makers,
students and mentors. Explore the awards, recognitions
and collaborations that define Yuvalay's journey.

</p>

<Link
to="/contact"
className="awardsIntroBtn"
>

Collaborate With Us

<FiArrowRight/>

</Link>

</div>

<div className="awardsIntroImage">

<img
src="/images/projects/awards.jpg"
alt="Awards"
/>

</div>

</div>

</section>

)

}