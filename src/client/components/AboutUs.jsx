import React from 'react';
import Navbar from './items/Navbar';
import Footer from './items/Footer';
const AboutUs = () => {
  return (
    <>
      <Navbar/>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700 text-lg leading-8">
          Welcome to ZeedBen77Pro! We are dedicated to providing an exceptional financial platform that empowers individuals to grow their wealth through innovative packages. Our team is committed to helping you succeed in your financial journey.
        </p>
        <h2 className="text-3xl font-bold mt-6 mb-4">Our Mission</h2>
        <p className="text-gray-700 text-lg leading-8">
          To offer cutting-edge financial solutions that allow our users to maximize their earning potential while fostering trust and transparency.
        </p>
        <h2 className="text-3xl font-bold mt-6 mb-4">Our Vision</h2>
        <p className="text-gray-700 text-lg leading-8">
          To be the most trusted and reliable platform for financial growth and success, where users can achieve their financial goals with ease.
        </p>
      </div>
      <Footer/>
    </>
    
  );
};

export default AboutUs;
