import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Connection from './items/Connection';
import ContactUs from './items/ContactUs';
import Navbar from './items/Navbar';
import Footer from './items/Footer';

const Home = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showComments, setShowComments] = useState(true);

  useEffect(() => {
    if (user) {
      document.title = `ZeedBen77Pro - ${user.name}!`; // Set custom title
    }
  }, [user]);

  // Function to handle the navigation to BuyPackage
  const handleBuyNow = (packageName) => {
    navigate(`/buy/${packageName}`); // Assuming the route will be /buy/PackageName
  };

  const packages = [
    {
      name: "Basic Package",
      description: "Unlock daily profits of 200৳ with our Basic Package—your first step towards financial success!",
      price: 1000,
      peopleCount: 849,
    },
    {
      name: "Premium Package",
      description: "Elevate your earnings with our Premium Package and enjoy exclusive benefits tailored just for you!",
      price: 1500,
      peopleCount: 643,
    },
    {
      name: "Ultimate Package",
      description: "Experience the pinnacle of profit potential with the Ultimate Package, offering comprehensive features for maximum returns!",
      price: 2500,
      peopleCount: 413,
    },
    {
      name: "Enterprise Package",
      description: "Designed for visionary projects, our Enterprise Package empowers large-scale ventures with exceptional growth opportunities!",
      price: 5000,
      peopleCount: 138,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen container mx-auto">
      {/* Connection Component is global chat component for all users can comment and show people withdrawals */}
      <Connection showComments={showComments} setShowComments={setShowComments} />
      {/* Navbar */}
      <Navbar />

      {/* Statistics Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-700">Total Withdrawn Money</h2>
            <p className="text-4xl text-green-500 mt-4">1,234,567৳</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-700">Total Active Users</h2>
            <p className="text-4xl text-blue-500 mt-4">12,345</p>
          </div>
        </div>
      </section>

      {/* Event Section */}
      <section className="py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Pro Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold">Event 1</h3>
              <p className="mt-4 text-gray-600">
                Participate in our special event and win amazing rewards!
              </p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                Join Now
              </button>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold">Event 2</h3>
              <p className="mt-4 text-gray-600">
                Limited-time offer! Join to grab the biggest bonuses.
              </p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                Join Now
              </button>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold">Event 3</h3>
              <p className="mt-4 text-gray-600">
                Enjoy exciting rewards by participating in this event.
              </p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Best Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col">
                <div className="flex justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{pkg.name}</h3>
                    <p className="mt-2 text-gray-600">{pkg.description}</p>
                    <p className="mt-2 text-lg font-bold">{pkg.price}৳</p>
                  </div>
                  <div className="text-gray-500 ml-4">
                    Users: {pkg.peopleCount}
                  </div>
                </div>
                <div className="flex justify-end mt-auto">
                  <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => handleBuyNow(pkg.name)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-8">
                To offer cutting-edge financial solutions that allow our users to maximize their earning potential while fostering trust and transparency.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-8">
                To be the most trusted and reliable platform for financial growth and success, where users can achieve their financial goals with ease.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Why ZeedBen77Pro is Helpful</h3>
              <p className="text-gray-700 text-lg leading-8">
                Our platform empowers individuals to grow their wealth through innovative packages, offering financial solutions tailored for every level of investor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactUs />

      <Footer />
    </div>
  );
};

export default Home;
