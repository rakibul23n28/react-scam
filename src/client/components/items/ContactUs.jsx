import React from 'react';
import contact_us from '../../assets/images/contact_us.jpg';

const ContactUs = () => {
    return (
        <div>
            {/* // Contact Section */}
            <section className="py-8 bg-cover bg-center" style={{ backgroundImage: `url(${contact_us})` }}>
                <div className="container mx-auto">
                {/* // got a question */}
                <h2 className="text-3xl font-bold text-center mb-6 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Contact Us</h2>
                {/* // Two-part layout: social media + form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Part: Social Media and Address */}
                    <div className="bg-gray-50 bg-opacity-90 shadow-lg rounded-lg p-6 flex flex-col items-center gap-3">
                    <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                    <p className="text-gray-600 mb-4">We are here to help and answer any questions you may have.</p>
                        {/* Facebook */}
                        <div className="flex items-center">
                        <svg className="w-6 h-6 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.656 9.128 8.438 9.877v-6.988H7.898v-2.89h2.54v-2.205c0-2.507 1.493-3.89 3.776-3.89 1.095 0 2.238.196 2.238.196v2.46h-1.26c-1.242 0-1.63.771-1.63 1.56v1.878h2.773l-.443 2.89h-2.33V21.877C18.344 21.128 22 16.991 22 12z" />
                        </svg>
                        <a href="https://facebook.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Facebook</a>
                        </div>
                        {/* YouTube */}
                        <div className="flex items-center">
                        <svg className="w-6 h-6 text-red-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.499 6.203a2.932 2.932 0 0 0-2.061-2.068C19.419 3.619 12 3.619 12 3.619s-7.419 0-9.438.516A2.932 2.932 0 0 0 .501 6.203C0 8.219 0 12 0 12s0 3.781.501 5.797a2.932 2.932 0 0 0 2.061 2.068C4.581 20.381 12 20.381 12 20.381s7.419 0 9.438-.516a2.932 2.932 0 0 0 2.061-2.068C24 15.781 24 12 24 12s0-3.781-.501-5.797zM9.603 15.616v-7.23l6.276 3.616-6.276 3.614z" />
                        </svg>
                        <a href="https://youtube.com" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">YouTube</a>
                        </div>
                        {/* Address */}
                        <div className="flex items-center">
                        <svg className="w-6 h-6 text-gray-700 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c2.21 0 4-1.79 4-4S14.21 3 12 3 8 4.79 8 7s1.79 4 4 4zM12 14c-5.33 0-8 2.69-8 4v1h16v-1c0-1.31-2.67-4-8-4z" />
                        </svg>
                        <p className="text-gray-700">123 Main St, Dhaka, Bangladesh</p>
                        </div>
                    </div>

                    {/* Right Part: Contact Form */}
                    <div className="bg-gray-50 shadow-lg rounded-lg p-6 bg-opacity-90">
                    <form>
                        <h3 className="text-2xl font-bold mb-4">Any Questions?</h3>
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
                            placeholder="Your Message"
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
        </div>
    );
};

export default ContactUs;