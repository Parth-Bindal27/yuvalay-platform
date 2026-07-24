import "./innovationGallery.css";

const gallery=[

"/images/projects/gallery1.jpg",
"/images/projects/gallery2.jpg",
"/images/projects/gallery3.jpg",
"/images/projects/gallery4.jpg",
"/images/projects/gallery5.jpg",
"/images/projects/gallery6.jpg"

];

export default function InnovationGallery(){

return(

<section className="innovationGallery">

<div className="innovationGalleryContainer">

<div className="sectionHeading">

<span className="section-label">

Gallery

</span>

<h2>

Innovation In Action

</h2>

</div>

<div className="galleryGrid">

{gallery.map((image,index)=>(

<img
key={index}
src={image}
alt=""
/>

))}

</div>

</div>

</section>

)

}