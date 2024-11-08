import React from "react";
import Navbar from "./items/Navbar";
import Footer from "./items/Footer";

const FAQ = () => {
  const faqData = [
    {
      question: "What is ZeedBen77Pro?",
      answer:
        "ZeedBen77Pro is a platform that offers various financial packages to help users grow their wealth.",
    },
    {
      question: "How do I purchase a package?",
      answer:
        "Simply sign in to your account, browse through our packages, and click 'Buy Now' to purchase.",
    },
    {
      question: "Is there a refund policy?",
      answer:
        "Currently, all purchases are final. We recommend reviewing the package details before buying.",
    },
    // Add more FAQs here...
  ];

  return (
    <>
      <Navbar />
      {/* FAQ Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Frequently Asked Questions
          </h2>
          {/* Two-part layout: FAQ + form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Part: FAQ Questions */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Got a Question?</h3>
              <div className="space-y-6">
                {faqData.map((faq, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-semibold">{faq.question}</h4>
                    <p className="text-gray-600 mt-2">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Part: Message Form */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <form>
                <h3 className="text-2xl font-bold mb-4">
                  Still have questions?
                </h3>
                <div className="mb-4">
                  <input
                    className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Your Question"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FAQ;
