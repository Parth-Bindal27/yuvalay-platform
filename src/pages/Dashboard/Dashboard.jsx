import { useAuth } from "../../context/AuthContext";

export default function Dashboard() {

  const { currentUser } = useAuth();

  return (

    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >

      <div>

        <h1>Dashboard</h1>

        <h2>
          {currentUser?.displayName}
        </h2>

        <p>
          {currentUser?.email}
        </p>

      </div>

    </div>

  );

}