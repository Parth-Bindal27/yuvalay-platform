import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { checkAdmin } from "../services/adminService";
import { useEffect, useState } from "react";

export default function AdminRoute({ children }) {
  const { currentUser } = useAuth();

  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    async function verifyAdmin() {
      if (!currentUser) {
        setLoading(false);
        return;
      }

      const admin = await checkAdmin(currentUser.email);

      if (admin) {
        setIsAdmin(true);
      }

      setLoading(false);
    }

    verifyAdmin();
  }, [currentUser]);

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  if (loading) {
    return (
      <div
        style={{
          height: "80vh",
          display: "grid",
          placeItems: "center",
          fontSize: "20px",
        }}
      >
        Loading...
      </div>
    );
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
}