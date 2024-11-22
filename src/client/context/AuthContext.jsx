import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

// Create the AuthContext
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // New loading state

  // Function to handle login
  const login = async (email, password) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/auth/login",
        { email, password },
        { withCredentials: true }
      );
      console.log("Backend response:", data); // Debug response

      // Store user and token in localStorage
      const userWithToken = { ...data.user, token: data.token };
      setUser(userWithToken);
      localStorage.setItem("user", JSON.stringify(userWithToken));

      return { success: true };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: error.response?.data?.msg || "Login failed. Please try again.",
      };
    }
  };

  // Function to handle logout
  const logout = async () => {
    try {
      await axios.get("http://localhost:3000/api/auth/logout", {
        withCredentials: true,
      });
      setUser(null);
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  // Function to handle API calls with Authorization header
  const getAuthHeaders = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const token = storedUser?.token;
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  // Retrieve user data on initial load and validate token
  useEffect(() => {
    const initializeUser = async () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        try {
          // Validate token with backend
          const { data } = await axios.get(
            "http://localhost:3000/api/auth/validate",
            {
              headers: getAuthHeaders(), // Pass token in header
              withCredentials: true,
            }
          );

          if (data.isValid) {
            setUser(parsedUser); // Set user if the token is valid
          } else {
            localStorage.removeItem("user"); // Remove user if token is invalid
          }
        } catch (error) {
          console.error("Error validating token:", error);
          localStorage.removeItem("user"); // Clear user if validation fails
        }
      }
      setLoading(false); // Finish loading after check
    };

    initializeUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
