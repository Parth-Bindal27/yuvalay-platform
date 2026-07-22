import "./Certificates.css";

import {
  FaAward,
  FaDownload,
  FaEye,
  FaCheckCircle,
} from "react-icons/fa";

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: "Web Development Internship",
      issuer: "Yuvalay Makerspace",
      date: "July 2026",
      type: "Verified",
    },
    {
      id: 2,
      title: "Volunteer Appreciation",
      issuer: "Yuvalay",
      date: "June 2026",
      type: "Verified",
    },
    {
      id: 3,
      title: "AI Workshop",
      issuer: "Yuvalay Labs",
      date: "May 2026",
      type: "Verified",
    },
    {
      id: 4,
      title: "Innovation Challenge",
      issuer: "Makerspace",
      date: "April 2026",
      type: "Verified",
    },
  ];

  return (
    <section className="certificateSection">

      <div className="certificateHeading">

        <div>
          <h2>Certificates</h2>
          <p>Your verified achievements.</p>
        </div>

        <button>View All</button>

      </div>

      <div className="certificateGrid">

        {certificates.map((certificate) => (

          <div className="certificateCard" key={certificate.id}>

            <div className="certificateGlow"></div>

            <div className="certificateTop">

              <div className="certificateIcon">
                <FaAward />
              </div>

              <span className="verified">
                <FaCheckCircle />
                {certificate.type}
              </span>

            </div>

            <h3>{certificate.title}</h3>

            <p>{certificate.issuer}</p>

            <span className="issueDate">
              Issued • {certificate.date}
            </span>

            <div className="certificateButtons">

              <button className="previewBtn">
                <FaEye />
                Preview
              </button>

              <button className="downloadBtn">
                <FaDownload />
                Download
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}