import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { author } from "../Firebase/Fbconfig";
import { toast } from "react-toastify";

const Navbar1 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  
  const role = localStorage.getItem("loggedInPersonRole");
  const isAdmin = role === "admin";

  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [menuOpen]);

  const handleLogout = async () => {
    try {
      await signOut(author);
      localStorage.removeItem("loggedInPerson");
      localStorage.removeItem("loggedInPersonRole");
      toast.success("Logged out successfully");
      navigate("/login");
    } catch {
      toast.error("Failed to logout");
    }
  };

  const isActive = (path) => location.pathname === path;

 
  const navLinks = [
    { path: "/home", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/gallery", label: "Gallery" },
    { path: "/blogs", label: "Blogs" },
    { path: "/form", label: "Contact" },
  ];

 
  const adminLink = { path: "/dashboard", label: "Dashboard" };

 
  const finalLinks = isAdmin
    ? [adminLink, ...navLinks]
    : navLinks;

  return (
    <>
      
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white border-b border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">

           
           <Link to="/home" className="flex items-center gap-2 sm:gap-3 group">
  <img
    src="/PraveenEventslogo.png"
    alt="PraveenEvents Logo"
className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover shadow-lg group-hover:scale-105 transition-transform"
  />

  {/* Brand Text */}
  <div className="flex items-center">
    <span className="text-xl sm:text-2xl lg:text-3xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
      Praveen
    </span>
    <span className="ml-1 text-xl sm:text-2xl lg:text-3xl font-black text-gray-800">
      Events
    </span>
  </div>
</Link>

           
            <div className="hidden lg:flex items-center space-x-1">
              {finalLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 font-semibold text-sm rounded-lg transition group ${
                    isActive(link.path)
                      ? "text-orange-600"
                      : "text-gray-700 hover:text-orange-600"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-orange-600 to-red-600 transition-all ${
                      isActive(link.path)
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}

              <button
                onClick={handleLogout}
                className="ml-4 bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow hover:scale-105 transition"
              >
                Logout
              </button>
            </div>

         
            <button
              className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 sm:w-6 sm:h-5 relative">
                <span
                  className={`absolute w-full h-0.5 bg-gray-800 transition-all duration-300 ${
                    menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute w-full h-0.5 bg-gray-800 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                    menuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                  }`}
                />
                <span
                  className={`absolute w-full h-0.5 bg-gray-800 transition-all duration-300 ${
                    menuOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

     
      <div
        className={`fixed top-14 sm:top-16 left-0 h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)] w-full bg-white z-50 lg:hidden transition-transform duration-300 ease-out overflow-y-auto ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 sm:p-6 space-y-1.5 sm:space-y-2">
         
          <div className="pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-gray-200">
            <p className="text-xs sm:text-sm text-gray-500 font-medium uppercase tracking-wide">
              Navigation
            </p>
          </div>

         
          {finalLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all ${
                isActive(link.path)
                  ? "bg-gradient-to-r from-orange-50 to-red-50 text-orange-600 shadow-sm"
                  : "text-gray-700 hover:bg-gray-50 active:bg-gray-100"
              }`}
              style={{
                animation: menuOpen
                  ? `slideInRight 0.3s ease forwards ${index * 40}ms`
                  : "none",
              }}
            >
              <div className="flex items-center justify-between">
                <span>{link.label}</span>
                {isActive(link.path) && (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </Link>
          ))}

          
          <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>Logout</span>
            </button>
          </div>

          
          {isAdmin && (
            <div className="mt-4 p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
              <p className="text-xs text-orange-600 font-semibold flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
                Admin Account
              </p>
            </div>
          )}
        </div>
      </div>

     
      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar1;