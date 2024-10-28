import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "./items/Navbar";
import Footer from "./items/Footer";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Welcome, {user?.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-bold text-lg mb-2">Your Packages</h3>
              <p>No packages purchased yet.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-bold text-lg mb-2">Your Earnings</h3>
              <p>Total earnings: 0৳</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
