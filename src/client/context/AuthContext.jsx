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
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );
      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.msg || "Login failed. Please try again.",
      };
    }
  };

  // Function to handle logout
  const logout = async () => {
    try {
      await axios.get("http://localhost:5000/api/auth/logout");
      setUser(null);
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  // Retrieve user data on initial load
  useEffect(() => {
    const initializeUser = async () => {
      const storedUser = localStorage.getItem("user");

      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        try {
          const { data } = await axios.post(
            "http://localhost:5000/api/auth/user",
            {},
            { withCredentials: true }
          );
          setUser(data.user);
          localStorage.setItem("user", JSON.stringify(data.user));
        } catch (error) {
          localStorage.removeItem("user");
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
