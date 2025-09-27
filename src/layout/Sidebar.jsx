import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNav } from "../navigation/index";
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

function Sidebar({ showSidebar, setShowSidebar }) {
  // const dispatch = useDispatch();
  const { role } = useSelector((state) => state.auth);
  const { pathname } = useLocation();
  const [allNav, setAllNav] = useState([]);

  useEffect(() => {
    const navs = getNav(role);
    setAllNav(navs);
  }, [role]);

  return (
    <div>
      {/* Background overlay for small screen */}
      <div
        onClick={() => setShowSidebar(false)}
        className={`fixed duration-200 ${
          !showSidebar ? "invisible" : "visible"
        } w-screen h-screen bg-black/40 top-0 left-0 z-10`}
      ></div>

      {/* Sidebar panel */}
      <div
        className={`w-[260px] fixed bg-[#0e0e10] z-50 top-0 h-screen shadow-lg transition-all ${
          showSidebar ? "left-0" : "-left-[260px] lg:left-0"
        }`}
      >
        {/* Logo */}
        <div className="h-[70px] flex justify-center items-center border-b border-[#1f1f1f]">
          <Link to="/" className="w-[1000px] h-[60px]">
            <img
              className="w-full h-full object-contain"
              src="http://localhost:3000/images/logo.png"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Navigation items */}
        <div className="px-[16px] mt-4">
          <ul>
            {allNav?.map((n, i) => (
              <li key={i}>
                <Link
                  to={n?.path}
                  className={`${
                    pathname === n?.path
                      ? "bg-[#00ff73]/10 text-[#00ff73] border border-[#00ff73]"
                      : "text-[#c2f5c2] hover:bg-[#1f1f1f] hover:text-[#00ff73]"
                  } px-[12px] py-[10px] rounded-md flex items-center gap-[12px] transition-all w-full mb-1 font-medium`}
                >
                  <span className="text-xl">{n?.icon}</span>
                  <span className="text-sm">{n?.title}</span>
                </Link>
              </li>
            ))}
            <li>
              <button className="text-[#c2f5c2] hover:bg-[#1f1f1f] hover:text-[#00ff73] px-[12px] py-[10px] rounded-md flex items-center gap-[12px] transition-all w-full mb-1 font-medium">
                <span className="text-xl">
                  <FiLogOut />
                </span>
                <span className="text-sm">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
