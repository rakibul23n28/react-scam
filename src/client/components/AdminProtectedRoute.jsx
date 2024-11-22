import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return null; // Render nothing while loading

  if (user?.role !== "admin") {
    // If no user or user is not an admin, redirect to home or login
    return <Navigate to="/" replace />;
  }

  return children; // Allow access if the user is an admin
};

export default AdminProtectedRoute;
