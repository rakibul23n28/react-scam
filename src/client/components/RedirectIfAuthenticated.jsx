import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Function to verify the token's validity
const isUserTokenValid = async (token) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/user",
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      }
    );
    return response.data.user || false;
  } catch (error) {
    console.error("Token validation failed:", error);
    return false;
  }
};

const RedirectIfAuthenticated = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const userToken = localStorage.getItem("user");
      if (userToken) {
        const isValid = await isUserTokenValid(userToken);
        if (isValid) {
          navigate("/"); // Redirect to home if the user token is valid
        }
      }
    };

    checkAuth();
  }, [navigate]);

  return <>{children}</>; // Render children if the user is not authenticated
};

export default RedirectIfAuthenticated;
