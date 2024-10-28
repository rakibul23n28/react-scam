import { useParams } from "react-router-dom";
import Navbar from "./items/Navbar";

const BuyPackage = () => {
  const { packageName } = useParams();

  const packages = [
    {
      name: "Basic Package",
      description:
        "Unlock daily profits of 200৳ with our Basic Package—your first step towards financial success!",
      withdrawalMethods: ["Bank Transfer", "Mobile Payment"],
    },
    {
      name: "Premium Package",
      description:
        "Elevate your earnings with our Premium Package and enjoy exclusive benefits tailored just for you!",
      withdrawalMethods: ["Bank Transfer", "Cryptocurrency", "Mobile Payment"],
    },
    {
      name: "Ultimate Package",
      description:
        "Experience the pinnacle of profit potential with the Ultimate Package, offering comprehensive features for maximum returns!",
      withdrawalMethods: ["Bank Transfer", "Check", "Mobile Payment"],
    },
    {
      name: "Enterprise Package",
      description:
        "Designed for visionary projects, our Enterprise Package empowers large-scale ventures with exceptional growth opportunities!",
      withdrawalMethods: ["Bank Transfer", "Cryptocurrency"],
    },
  ];

  // Find the selected package based on the name in the URL
  const selectedPackage = packages.find((pkg) => pkg.name === packageName);

  if (!selectedPackage) {
    return <div>Package not found.</div>;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-center mb-4">
          {selectedPackage.name}
        </h2>
        <p className="text-lg text-gray-700 text-center mb-4">
          {selectedPackage.description}
        </p>

        <h3 className="text-xl font-bold mb-2">Withdrawal Methods:</h3>
        <ul className="list-disc list-inside mb-6">
          {selectedPackage.withdrawalMethods.map((method, index) => (
            <li key={index}>{method}</li>
          ))}
        </ul>

        <div className="flex justify-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Confirm Purchase
          </button>
        </div>
      </div>
    </>
  );
};

export default BuyPackage;
