import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Myinfo = () => {
  const { user } = useContext(AuthContext);
  const [isHovered, setIsHovered] = useState(false); // New state to track hover

  return (
    <>
      <div
        className="fixed bottom-0 right-4 cursor-pointer p-1 mb-10 bg-slate-500 text-white rounded"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex gap-1">
          <p>৳{user?.balance === undefined ? "0.00" : user?.balance}</p>
        </div>
        {isHovered && (
          <div className="absolute top-[-68px] right-0 flex flex-col gap-1 bg-white shadow-lg p-2 rounded">
            <Link to="/withdraw" className="text-blue-500 hover:underline">
              Withdrawal
            </Link>
            <Link to="/deposit" className="text-blue-500 hover:underline">
              Deposit
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Myinfo;
