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
import downArrowIcon from "/src/client/assets/icons/down-arrow.png";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [profileDropDown, setProfileDropDown] = useState(true);
  const location = useLocation();

  // Check if a path is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: Profile and Dropdown */}
        <div className="flex items-center space-x-4">
          <div className="profile border-l-4 pl-2 border-red-500 relative">
            <div className="flex items-center bg-slate-300 rounded-full space-x-1">
              <p className="text-3xl bg-gray-400 w-10 h-10 text-center rounded-full font-bold">
                {user ? user.name[0].toUpperCase() : "L"}
              </p>
              <p>{user ? user.name : "double your money"}</p>
              <div
                className="icon cursor-pointer p-2 bg-slate-300 border-l-2 border-y-2 rounded"
                onClick={() => setProfileDropDown(!profileDropDown)}
              >
                <img
                  className={`w-4 h-4 invert ${
                    profileDropDown ? "rotate-180" : ""
                  }`}
                  src={downArrowIcon}
                  alt="Toggle Dropdown"
                />
              </div>
            </div>

            {/* Dropdown Menu */}
            {profileDropDown && (
              <div className="flex flex-col bg-gray-300 p-2 bg-opacity-50 absolute text-xl left-5 top-12 rounded gap-2 transition-all duration-300">
                <NavItem
                  to="/"
                  label="Home"
                  icon={homeIcon}
                  isActive={isActive}
                />
                <hr className="border-gray-400" />
                {user ? (
                  <>
                    <NavItem
                      to="/profile"
                      label="Profile"
                      icon={profileIcon}
                      isActive={isActive}
                    />
                    <hr className="border-gray-400" />
                    <NavItem
                      to="/history"
                      label="History"
                      icon={historyIcon}
                      isActive={isActive}
                    />
                    <hr className="border-gray-400" />
                    <Link
                      onClick={logout}
                      className="nav-item flex items-center gap-2 px-2 rounded"
                    >
                      <img className="w-5 h-5" src={logoutIcon} alt="Logout" />
                      <p>Logout</p>
                    </Link>
                  </>
                ) : (
                  <>
                    <NavItem
                      to="/login"
                      label="Login"
                      icon={loginIcon}
                      isActive={isActive}
                      className="text-green-500"
                    />
                    <NavItem
                      to="/signup"
                      label="Signup"
                      icon={signupIcon}
                      isActive={isActive}
                      className="text-green-500"
                    />
                  </>
                )}
              </div>
            )}
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

const NavItem = ({ to, label, icon, isActive, className = "" }) => (
  <Link
    to={to}
    className={`nav-item flex items-center gap-2 px-2 rounded ${
      isActive(to) ? "bg-blue-500 text-white" : ""
    } ${className}`}
  >
    <img
      className={`w-5 h-5 invert ${isActive(to) ? "" : "invert-0"}`}
      src={icon}
      alt={label}
    />
    <p>{label}</p>
  </Link>
);

export default Navbar;
