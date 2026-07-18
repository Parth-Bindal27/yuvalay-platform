import { useAuth } from "../../context/AuthContext";

export default function Profile() {

  const { currentUser } = useAuth();

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div>
        <img
          src={
            currentUser?.photoURL ||
            `https://ui-avatars.com/api/?name=${currentUser?.displayName || "User"}`
          }
          width="120"
          height="120"
          alt="Profile"
          style={{ borderRadius: "50%" }}
        />

        <h2>{currentUser?.displayName}</h2>
        <p>{currentUser?.email}</p>
      </div>
    </div>
  );
}