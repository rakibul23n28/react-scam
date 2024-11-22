import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

// Import icons
import homeIcon from "/src/client/assets/icons/home.png";
import profileIcon from "/src/client/assets/icons/profile.png";
import historyIcon from "/src/client/assets/icons/history.png";
import logoutIcon from "/src/client/assets/icons/logout.png";
import loginIcon from "/src/client/assets/icons/login.png";
import signupIcon from "/src/client/assets/icons/signup.png";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  // Check if a path is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container flex justify-between items-center">
        {/* Left Side: Profile and Dropdown */}
        <div className="w-full">
          <div className="w-full flex flex-row items-center  justify-between py-1">
            {user ? (
              <div className="flex flex-row items-center justify-center">
                <div className="flex items-center gap-1">
                  <Link to="/profile">
                    <div className="h-8 w-8 flex items-center justify-center rounded-full bg-orange-700 text-white font-bold ml-1">
                      {user.name?.charAt(0).toUpperCase()}
                    </div>
                  </Link>
                  <Link to="/profile">
                    <p className="text-sm font-semibold text-blue-600">
                      {user.name}
                    </p>
                  </Link>
                </div>
              </div>
            ) : null}

            <div className="text-xl font-bold text-blue-600 text-center px-2">
              <Link to="/">
                ZeedBen77<span className="text-red-600">Pro</span>
              </Link>
            </div>
            {!user ? (
              <div className="flex flex-row items-center space-x-1">
                <NavItem
                  to="/login"
                  label="Login"
                  icon={loginIcon}
                  isActive={isActive}
                  className=""
                />
                <NavItem
                  to="/signup"
                  label="Signup"
                  icon={signupIcon}
                  isActive={isActive}
                  className=""
                />
              </div>
            ) : null}
          </div>

          {/* Dropdown Menu */}
          <div className="fixed bottom-0 left-0 sm:top-12 sm:flex-col sm:left-3 sm:h-36 h-fit  w-full sm:w-28 z-50 flex flex-row justify-between bg-gray-950  text-white text-sm rounded p-1">
            <NavItem to="/" label="Home" icon={homeIcon} isActive={isActive} />
            <hr className="border-gray-400" />
            <NavItem
              to="/deposit"
              label="Deposit"
              icon={profileIcon}
              isActive={isActive}
            />
            <hr className="border-gray-400" />
            <NavItem
              to="/packages"
              label="Packages"
              icon={historyIcon}
              isActive={isActive}
            />
            <hr className="border-gray-400" />
            <NavItem
              to="/profile"
              label="Account"
              icon={logoutIcon}
              isActive={isActive}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ to, label, icon, isActive, className = "" }) => (
  <Link
    to={to}
    className={`nav-item flex items-center gap-2 px-1 rounded ${
      isActive(to) ? "bg-blue-500 text-white" : "bg-blue-400"
    } ${className}`}
  >
    <img className={`w-5 h-5 invert`} src={icon} alt={label} />
    <p>{label}</p>
  </Link>
);

export default Navbar;
