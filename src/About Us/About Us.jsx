import React from "react";
import { useNavigate } from "react-router-dom";


const Showcase = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };
  const showcaseItems = [
    {
      img: "https://wallpapers.com/images/hd/corporate-event-1920-x-960-wallpaper-kxfymzln0ikz8pp7.jpg",
      title: "Corporate Events",
      desc: "Professional gatherings"
    },
    {
      img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500",
      title: "Weddings",
      desc: "Dream celebrations"
    },
    {
      img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500",
      title: "Private Parties",
      desc: "Memorable moments"
    },
    {
      img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500",
      title: "Festivals",
      desc: "Grand celebrations"
    },
    {
      img: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=500",
      title: "Product Launches",
      desc: "Brand experiences"
    },
    {
      img: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=500",
      title: "Conferences",
      desc: "Professional forums"
    }
  ];

  return (
    <>
      {showcaseItems.map((item, i) => (
        <div
          key={i}
          className=" group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
        >
          <div className="relative h-72 overflow-hidden cursor-pointer" onClick={() => handleNavigate("/services")}>
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover"
              onClick={() => handleNavigate("/services")}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black from-opacity-0  to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h4 className="text-2xl font-bold mb-2 transform transition-transform duration-300 group-hover:translate-x-2">
                {item.title}
              </h4>
              <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.desc}
              </p>
            </div>
            <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const AboutUs = () => {
  const services = [
    { icon: "🏛️", text: "Venue Booking" },
    { icon: "🍽️", text: "Food & Catering" },
    { icon: "📸", text: "Photography" },
    { icon: "⛺", text: "Tent House Arrangement" },
    { icon: "🎭", text: "Entertainment" },
    { icon: "⭐", text: "Celebrity Management" }
  ];

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white">


      <section className="relative bg-gradient-to-br from-orange-500 to-red-500 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-white font-semibold text-sm uppercase tracking-wider">
              Who We Are
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            About Us
          </h1>
          <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto leading-relaxed">
            Your complete event management solution for unforgettable celebrations
          </p>
        </div>
      </section>


      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">


        <div className="text-center mb-24">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 bg-opacity-10 rounded-full px-8 py-3 mb-8">
            <span className="text-white font-semibold text-sm uppercase tracking-wider">
              Our Mission
            </span>
          </div>
          <p className="max-w-4xl mx-auto text-gray-700 text-lg md:text-xl leading-relaxed">
            At <span className="font-bold text-orange-500">Ajith Events</span>, we are dedicated to transforming your vision into reality. Our team is committed to delivering exceptional experiences, handling everything from initial concept to final production with creativity, efficiency, and meticulous attention to detail.
          </p>
        </div>


        <div className="flex flex-col items-center py-16 mb-32">
          <div className="relative group mb-10">
            <div className="absolute  rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />
            <div className="relative">
              <img
                src="https://img.freepik.com/premium-photo/anime-style-businessman-holding-clipboard_1282444-262169.jpg"
                alt="Event planner"
                className="w-64 h-64 rounded-full object-cover shadow-2xl ring-8 ring-white"
              />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-800 py-4 mb-3">
            Professional Event Management
          </h3>
          <p className="text-gray-600 text-center max-w-2xl text-lg leading-relaxed">
            Turning every event into an unforgettable experience through passion, expertise, and unwavering dedication
          </p>
        </div>


        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl py-4 mx-auto">
              Comprehensive event management solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-orange-500 hover:border-opacity-30"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-5xl flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <p className="text-gray-700 font-semibold text-lg group-hover:text-orange-500 transition-colors duration-300">
                    {service.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="relative mb-24">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-gray-200" />
          </div>
          <div className="relative flex justify-center py-6">
            <span className="bg-gradient-to-b from-white via-gray-50 to-white px-8 text-gray-400 text-sm uppercase tracking-wider font-semibold">
              Our Work
            </span>
          </div>
        </div>


        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Event Showcase
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed py-4">
              A glimpse into some of our best work – where creativity meets perfection
            </p>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Showcase />
          </div>
        </div>


        <div className="mt-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-2xl" />
          </div>
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Plan Your Event?
            </h3>
            <p className="text-white text-opacity-90 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate to create an extraordinary experience that exceeds your expectations
            </p>
            <button
              className="
    bg-white text-orange-500
    px-6 py-3
    sm:px-8 sm:py-3.5
    md:px-10 md:py-4
    rounded-full
    font-semibold sm:font-bold
    text-sm sm:text-base md:text-lg
    shadow-lg hover:shadow-2xl
    transition-all duration-300
    hover:scale-105
    inline-flex items-center justify-center
    gap-2
  "
            >
              <span className="whitespace-nowrap">Get in Touch</span>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>

          </div>
        </div>

      </section>
    </div>
  );
};

export default AboutUs;