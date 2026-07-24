import "./intro.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function Intro() {

    return (

<section className="innovationIntro">

<div className="innovationIntroContainer">

<div className="innovationIntroContent">

<span className="section-label">
Innovation Showcase
</span>

<h2>
Where Great Ideas
<br/>
Come Alive
</h2>

<p>
Explore Yuvalay's flagship innovations developed through
creativity, engineering and collaboration. These projects
represent the spirit of innovation that defines our makerspace.
</p>

<Link
to="/contact"
className="innovationIntroBtn"
>

Explore Innovation

<FiArrowRight/>

</Link>

</div>

<div className="innovationIntroImage">

<img
src="/images/projects/innovation-showcase.jpg"
alt="Innovation Showcase"
/>

</div>

</div>

</section>

    )

}