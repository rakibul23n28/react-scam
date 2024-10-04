import { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [profileDropDown, setProfileDropDown] = useState(true);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  // Function to check if a path is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: Links & Authentication */}
        <div className="flex items-center space-x-4">

          <div className="profile border-l-4 pl-2 border-red-500 relative">
            <div className="flex items-center justify-center space-x-1 bg-slate-300 rounded-full ">
              <p className='text-3xl bg-gray-400 w-10 h-10 text-center rounded-full font-bold'>{user ? user.name[0].toUpperCase() : 'l'}</p>
              <p>{user ? user.name : 'double your money'}</p>
              <div className="icon cursor-pointer p-2 bg-slate-300 border-l-2 border-y-2 rounded" onClick={() => setProfileDropDown(!profileDropDown)}>
                <img className={`w-4 h-4 invert ${profileDropDown ? 'rotate-180' : ''}`} src="/src/client/assets/icons/down-arrow.png" alt="down-arrow" />
              </div>
            </div>
            <div className={`flex flex-col bg-gray-300 p-2 bg-opacity-50 absolute text-xl left-5 top-12 rounded gap-2 transition-all duration-300 ${profileDropDown ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
              <Link to="/" className={`nav-item flex items-center gap-2 px-2 rounded ${isActive('/') ? 'bg-blue-500 text-white' : ''}`}>
                <img className={`w-5 h-5 invert ${isActive('/') ? '' : 'invert-0'}`} src="/src/client/assets/icons/home.png" alt="" />
                <p>Home</p>
              </Link>
              <hr className="border-gray-400" />
              {user ? (
                <>
                  <Link to="/profile" className={`nav-item flex items-center gap-2 px-2 rounded ${isActive('/profile') ? 'bg-blue-500 text-white' : ''}`}>
                    <img className={`w-5 h-5 invert ${isActive('/profile') ? '' : 'invert-0'}`} src="/src/client/assets/icons/profile.png" alt="" />
                    <p>Profile</p>
                  </Link>
                  <hr className="border-gray-400" />
                  <Link to="/history" className={`nav-item flex items-center gap-2 px-2 rounded ${isActive('/history') ? 'bg-blue-500 text-white' : ''}`}>
                    <img className={`w-5 h-5 invert ${isActive('/history') ? '' : 'invert-0'}`} src="/src/client/assets/icons/history.png" alt="" />
                    <p>History</p>
                  </Link>
                  <hr className="border-gray-400" />
                  <Link onClick={logout} className={`nav-item flex items-center gap-2 px-2 rounded ${isActive('/logout') ? 'bg-blue-500 text-white' : ''}`}>
                    <img className={`w-5 h-5 invert ${isActive('/logout') ? '' : 'invert-0'}`} src="/src/client/assets/icons/logout.png" alt="" />
                    <p>Logout</p>
                  </Link>
                  
                </>
              ) : (
                <>
                  <Link to="/login" className={`nav-item flex items-center text-green-500 gap-2 px-2 rounded ${isActive('/login') ? 'bg-blue-500 text-white' : ''}`}>
                    <img className={`w-5 h-5 invert ${isActive('/login') ? '' : 'invert-0'}`} src="/src/client/assets/icons/login.png" alt="" />
                    <p>Login</p>
                  </Link>
                  <Link to="/signup" className={`nav-item flex items-center text-green-500 gap-2 px-2 rounded ${isActive('/signup') ? 'bg-blue-500 text-white' : ''}`}>
                    <img className={`w-5 h-5 invert ${isActive('/signup') ? '' : 'invert-0'}`} src="/src/client/assets/icons/signup.png" alt="" />
                    <p>Signup</p>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Right Side: App Name */}
        <div className="text-2xl font-bold text-blue-600 text-center">
          <Link to="/">
            ZeedBen77<span className="text-red-600">Pro</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
