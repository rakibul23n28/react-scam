import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Company Info */}
        <div>
          <h4 className="text-xl font-bold mb-4">ZeedBen77<span className="text-red-600">Pro</span></h4>
          <p className="text-gray-400">
            Your trusted platform for financial growth. Start your journey to financial freedom with us today!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-400">About Us</Link></li>
            <li><Link to="/faq" className="hover:text-gray-400">Any Questions?</Link></li>
            <li><Link to="/profile" className="hover:text-gray-400">Profile</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-bold mb-4">Contact Us</h4>
          <p>Email: <a href="mailto:support@zeedben77pro.com" className="hover:text-gray-400">support@zeedben77pro.com</a></p>
          <p>Phone: <a href="tel:+123456789" className="hover:text-gray-400">+123 456 789</a></p>
          <p>Address: 123 Finance Street, Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} ZeedBen77<span className="text-red-600">Pro</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
