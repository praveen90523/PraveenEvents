import React, { useState } from "react";
import { FaHome, FaCalendarAlt, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const go = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
     
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-black text-white shadow">
        <div className="flex items-center justify-between px-4 py-3">
          <h2 className="font-semibold text-[#FF4500]">Praveen Events</h2>
          <button onClick={() => setOpen(true)}>
            <FaBars size={22} />
          </button>
        </div>
      </div>

     
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

     
      <aside
        className={`
          fixed top-0 left-0 z-50 w-64
          min-h-[100dvh] h-full
          bg-black text-white flex flex-col
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static
        `}
      >
        
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
          <h2 className="text-2xl font-bold text-[#FF4500]">
            Praveen Events
          </h2>
          <button className="md:hidden" onClick={() => setOpen(false)}>
            <FaTimes size={22} />
          </button>
        </div>

      
        <nav className="flex-1 px-4 mt-4">
          <ul className="space-y-2">

            <li
              onClick={() => go("/home")}
              className="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer hover:bg-white/10 transition"
            >
              <FaHome />
              <span>Home</span>
            </li>

            <li
              onClick={() => go("/dashboard")}
              className="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer hover:bg-white/10 transition"
            >
              <FaCalendarAlt />
              <span>Dashboard</span>
            </li>

          </ul>
        </nav>

      
        <div className="px-6 py-4 text-sm text-white/60 border-t border-white/10">
          © 2025 Praveen Events
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
