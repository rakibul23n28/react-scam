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
    <nav className="bg-white shadow-lg sticky top-[-1px] z-50">
      <div className="container flex justify-between items-center">
        {/* Left Side: Profile and Dropdown */}
        <div className="w-full">
          <div className="w-full flex flex-row items-center  justify-between">
            <div className="text-xl font-bold text-blue-600 text-center px-2">
              <Link to="/">
                ZeedBen77<span className="text-red-600">Pro</span>
              </Link>
            </div>
            <div className="flex flex-row items-center space-x-1">
              {!user ? (
                <>
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
                </>
              ) : (
                <></>
              )}
              <div
                className="icon cursor-pointer p-2 bg-red-500 border-l-2 border-y-2 "
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
          </div>

          {/* Dropdown Menu */}
          {profileDropDown && (
            <div className="fixed bottom-0 left-0 w-full z-50 flex flex-row justify-between bg-gray-950  text-white text-sm rounded p-1 transition-all duration-300">
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
                    className="nav-item bg-red-500 flex items-center gap-2 px-2 rounded"
                  >
                    <img className="w-5 h-5" src={logoutIcon} alt="Logout" />
                    <p>Logout</p>
                  </Link>
                </>
              ) : (
                <></>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ to, label, icon, isActive, className = "" }) => (
  <Link
    to={to}
    className={`nav-item flex items-center gap-2 px-2 rounded ${
      isActive(to) ? "bg-blue-500 text-white" : "bg-blue-400"
    } ${className}`}
  >
    <img className={`w-5 h-5 invert`} src={icon} alt={label} />
    <p>{label}</p>
  </Link>
);

export default Navbar;
