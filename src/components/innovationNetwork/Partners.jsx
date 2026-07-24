import "./partners.css";

const partners = [
  "/images/partners/google.png",
  "/images/partners/microsoft.png",
  "/images/partners/nvidia.png",
  "/images/partners/iit.png",
  "/images/partners/school.png",
  "/images/partners/university.png",
  "/images/partners/startup.png",
  "/images/partners/ngo.png",
];

export default function Partners() {
  return (
    <section className="partners">

      <div className="partners-container">

        <span className="section-label">
          Trusted Collaboration
        </span>

        <h2>
          Powered By
          <span> Strong Partnerships</span>
        </h2>

        <p>
          Innovation grows through collaboration. We work with educational
          institutions, industries, startups and organizations that share
          our vision of empowering the next generation of innovators.
        </p>

        <div className="partners-grid">

          {partners.map((logo, index) => (

            <div className="partner-card" key={index}>

              <img
                src={logo}
                alt="Partner Logo"
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}