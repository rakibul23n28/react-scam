import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../items/Navbar";

const AddPackage = () => {
  const [packages, setPackages] = useState([]);
  const [name, setName] = useState(""); // Package name
  const [description, setDescription] = useState(""); // Package description
  const [price, setPrice] = useState(""); // Package price
  const [peopleCount, setPeopleCount] = useState(""); // People count

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = () => {
    axios
      .get("http://localhost:3000/api/packages", { withCredentials: true })
      .then((response) => {
        setPackages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching packages:", error);
      });
  };

  const handleAddPackage = (e) => {
    e.preventDefault();
    if (
      !name.trim() ||
      !description.trim() ||
      !price.trim() ||
      !peopleCount.trim()
    )
      return;

    const newPackage = { name, description, price, peopleCount };

    axios
      .post("http://localhost:3000/api/admin/packages", newPackage, {
        withCredentials: true,
      })
      .then((response) => {
        setPackages((prevPackages) => [...prevPackages, response.data]);
        setName(""); // Reset name input
        setDescription(""); // Reset description input
        setPrice(""); // Reset price input
        setPeopleCount(""); // Reset people count input
      })
      .catch((error) => {
        console.error("Error adding package:", error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center sm:mx-36">
        {/* Add Package Form */}
        <form
          onSubmit={handleAddPackage}
          className="flex flex-col items-center bg-gray-100 shadow-lg p-6 rounded-lg mb-6 w-full max-w-md"
        >
          <label className="text-lg font-bold mb-2" htmlFor="name">
            Package Name:
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full mb-4"
            placeholder="Enter Package Name"
            required
          />

          <label className="text-lg font-bold mb-2" htmlFor="description">
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full mb-4"
            placeholder="Enter Package Description"
            required
          />

          <label className="text-lg font-bold mb-2" htmlFor="price">
            Price:
          </label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full mb-4"
            placeholder="Enter Package Price"
            required
          />

          <label className="text-lg font-bold mb-2" htmlFor="peopleCount">
            Number of People:
          </label>
          <input
            id="peopleCount"
            type="number"
            value={peopleCount}
            onChange={(e) => setPeopleCount(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full mb-4"
            placeholder="Enter Number of People"
            required
          />

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add Package
          </button>
        </form>

        {/* Package List Section */}
        {packages && packages.length > 0 ? (
          <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4">Package List</h2>
            <ul className="space-y-4">
              {packages.map((pkg) => (
                <li
                  key={pkg._id} // Ensure each package has a unique key
                  className="flex flex-col items-center border-b pb-4 mb-4"
                >
                  <h3 className="text-lg font-semibold">{pkg.name}</h3>
                  <p>{pkg.description}</p>
                  <p>Price: {pkg.price}৳</p>
                  <p>People Count: {pkg.peopleCount}</p>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={() => {
                      axios
                        .delete(
                          `http://localhost:3000/api/admin/packages/${pkg._id}`,
                          {
                            withCredentials: true,
                          }
                        )
                        .then(() => {
                          setPackages((prevPackages) =>
                            prevPackages.filter((p) => p._id !== pkg._id)
                          );
                        })
                        .catch((error) =>
                          console.error("Error deleting package:", error)
                        );
                    }}
                  >
                    Delete Package
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-gray-500 mt-6">
            No packages available. Add a package to get started!
          </p>
        )}
      </div>
    </div>
  );
};

export default AddPackage;
