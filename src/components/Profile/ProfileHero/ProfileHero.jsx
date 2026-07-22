import "./ProfileHero.css";
import { useAuth } from "../../../context/AuthContext";
import {
  FaEnvelope,
  FaCalendarAlt,
  FaGraduationCap,
  FaCheckCircle,
  FaEdit,
  FaCamera,
} from "react-icons/fa";

export default function ProfileHero() {
  const { currentUser } = useAuth();

  const joinedDate = currentUser?.metadata?.creationTime
    ? new Date(currentUser.metadata.creationTime).toLocaleDateString("en-IN", {
        month: "short",
        year: "numeric",
      })
    : "Recently";

  return (
    <section className="profileHero">
      <div className="profileHeroContent">
        {/* Left */}
        <div className="profileLeft">
          <div className="avatarWrapper">
            <img
              src={
                currentUser?.photoURL ||
                `https://ui-avatars.com/api/?name=${
                  currentUser?.displayName || "User"
                }&background=B6D63E&color=111`
              }
              alt="Profile"
              className="profileAvatar"
            />

            <div className="avatarOverlay">
              <FaCamera />
              <span>Change</span>
            </div>
          </div>

          <div className="profileInfo">
            <h1>
              {currentUser?.displayName || "User"}

              {currentUser?.emailVerified && (
                <FaCheckCircle className="verifiedIcon" />
              )}
            </h1>

            <p className="role">
              Student Innovator
            </p>

            <div className="heroDetails">
              <span>
                <FaGraduationCap />
                Yuvalay
              </span>

              <span>
                <FaEnvelope />
                {currentUser?.email}
              </span>

              <span>
                <FaCalendarAlt />
                Member Since {joinedDate}
              </span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="profileRight">
          <div className="completionCard">
            <p>Profile Completion</p>

            <h2>82%</h2>

            <div className="progressBar">
              <div className="progressFill"></div>
            </div>

            <small>
              Complete your profile to unlock all features.
            </small>

            <button className="editBtn">
              <FaEdit />
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}