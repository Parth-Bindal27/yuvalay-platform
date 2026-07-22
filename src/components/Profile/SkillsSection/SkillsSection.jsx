import "./SkillsSection.css";
import { FaCode, FaEdit } from "react-icons/fa";

export default function SkillsSection() {

    const skills=[
        "React",
        "JavaScript",
        "Firebase",
        "Python",
        "C++",
        "Git",
        "Tailwind CSS",
        "Figma",
        "AI"
    ];

    return(

<section className="skillsSection">

<div className="sectionHeader">

<div>
<h2><FaCode/> Skills</h2>
<p>Technologies and tools you work with.</p>
</div>

<button className="sectionEditBtn">
<FaEdit/>
Edit
</button>

</div>

<div className="skillsCard">

{
skills.map((skill,index)=>(

<span key={index} className="skillChip">
{skill}
</span>

))
}

</div>

</section>

    )

}