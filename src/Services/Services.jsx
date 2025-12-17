import React from "react";
import { useNavigate } from "react-router-dom";
const Services = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };


  const services = [
    {
      title: "Grand Wedding",
      img: "https://framerusercontent.com/images/ifOncw8817LMptpgHZZy4G8e6Q.jpg?scale-down-to=1024",
      path: "/grand-wedding",
      desc: "Unforgettable celebrations"
    },
    {
      title: "Corporate Conferences",
      img: "https://framerusercontent.com/images/N4IZZG1Q5IyYUUpE3vmlgLOqsk.jpg",
      path: "/corporate-conferences",
      desc: "Professional excellence"
    },
    {
      title: "Birthday Functions",
      img: "https://framerusercontent.com/images/BybjBGz9yw8T69RSwtLKpE.jpg",
      path: "/birthday-functions",
      desc: "Memorable moments"
    },
    {
      title: "Private Parties",
      img: "https://static.vecteezy.com/system/resources/previews/024/057/245/non_2x/teenagers-friends-in-costumes-celebrating-and-having-fun-at-halloween-party-young-people-at-costumes-party-halloween-celebration-concept-by-ai-generated-free-photo.jpg",
      path: "/private-parties",
      desc: "Exclusive gatherings"
    },
    {
      title: "Destinations",
      img: "https://weddingplanningconference.com/blog/wp-content/uploads/2022/09/image-27.png",
      path: "/destinations",
      desc: "Dream locations"
    },
    {
      title: "Festivals",
      img: "https://www.financialexpress.com/wp-content/uploads/2024/08/Janmashtami-celebration-2024.jpg",
      path: "/festivals",
      desc: "Cultural celebrations"
    },
  ];

  const offerings = [
    {
      title: "Decor Planning",
      desc: "We craft enchanting decor that reflects your unique style and vision, transforming spaces into magical environments.",
      img: "https://static.vecteezy.com/system/resources/previews/003/623/365/non_2x/planning-schedule-or-time-management-with-calendar-business-meeting-activities-and-events-organizing-process-office-working-background-illustration-vector.jpg",
      icon: "🎨"
    },
    {
      title: "Venue Booking",
      desc: "Helping you find the perfect venue for any celebration, from intimate gatherings to grand affairs.",
      img: "https://event-management-ashy-iota.vercel.app/assets/img%203-DIxVPZXF.png",
      icon: "🏛️"
    },
    {
      title: "Entertainment",
      desc: "Exciting entertainment experiences that captivate guests and create lasting memories.",
      img: "https://i.pinimg.com/736x/2d/6c/95/2d6c9544648f98c9be69e1b104a72a52.jpg",
      icon: "🎭"
    },
    {
      title: "Photography",
      desc: "Professional photography to capture unforgettable moments with artistic precision and creativity.",
      img: "https://t3.ftcdn.net/jpg/01/84/88/32/360_F_184883269_raopl6K12HiS4bxzKcD86KDj7wKpfcTN.jpg",
      icon: "📸"
    },
    {
      title: "Catering & Food",
      desc: "Delicious meals with professional catering services tailored to your taste and dietary needs.",
      img: "https://event-management-ashy-iota.vercel.app/assets/img2-Do-VXA49.png",
      icon: "🍽️"
    },
    {
      title: "Logistics",
      desc: "Seamless execution from transportation to setup, ensuring every detail runs smoothly.",
      img: "https://event-management-ashy-iota.vercel.app/assets/img%205-CcGWTsC_.png",
      icon: "🚚"
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 to-red-500 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-white font-semibold text-sm uppercase tracking-wider">
              What We Do
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Our Services
          </h1>
          <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto leading-relaxed">
            Comprehensive event solutions tailored to perfection
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">

        {/* Service Categories */}
        <div className="mb-32">
          <div className="text-center pb-4 sm:pb-20 ">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Event Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From weddings to corporate events, we bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => handleNavigate(service.path)}
                className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/5 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h4 className="text-2xl font-bold mb-2 transform transition-transform duration-300 group-hover:translate-x-2">
                      {service.title}
                    </h4>
                    <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {service.desc}
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
          </div>
        </div>

        {/* Divider */}
        <div className="relative pb-4 sm:py-20 mb-24">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-gray-200" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-b from-white via-gray-50 to-white px-8 text-gray-400 text-sm uppercase tracking-wider font-semibold">
              Our Expertise
            </span>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 pb-4">
              Ajith Events offers a comprehensive range of services to transform your occasions into spectacular memories. Our expertise covers every detail of event management.
            </p>
          </div>

          {/* Offerings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {offerings.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-orange-500 hover:border-opacity-30"
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl h-52">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white bg-opacity-95 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-2xl" />
          </div>
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-white text-opacity-90 text-lg mb-8 max-w-2xl mx-auto">
              Let's bring your event vision to life with our expert team and comprehensive services
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
              <span className="whitespace-nowrap">Start Planning</span>
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

export default Services;