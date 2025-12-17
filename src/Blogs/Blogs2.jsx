import React from "react";
import { useNavigate } from "react-router-dom";

const Blogs2 = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6 sm:mb-8">
          <button 
            onClick={() => handleNavigation("/")}
            className="hover:text-[#FF4500] transition-colors"
          >
            Home
          </button>
          <span>/</span>
          <button 
            onClick={() => handleNavigation("/blogs")}
            className="hover:text-[#FF4500] transition-colors"
          >
            Blogs
          </button>
          <span>/</span>
          <span className="text-gray-900">Current Post</span>
        </div>

        {/* Blog Title */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight text-center">
            The Benefits of Hiring a Professional Event Planner
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-sm text-gray-600 py-4">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#FF4500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>December 8, 2024</span>
            </div>
            <span className="text-gray-400">•</span>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#FF4500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>4 min read</span>
            </div>
          </div>
        </div>

        {/* Blog Banner Image */}
        <div className="relative mb-12 sm:mb-16 lg:mb-20 group py-4">
          <div className="absolute inset-0 bg-[#FF4500]/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            src="https://framerusercontent.com/images/X7DZ3crjPZlTeCQsL2mSnAAOF74.jpg?scale-down-to=1024"
            alt="Blog cover"
            className="relative w-full h-64 sm:h-80 lg:h-[500px] object-cover rounded-2xl sm:rounded-3xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Blog Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">

          {[
            {
              title: "Stress Reduction",
              text: "Planning an event involves juggling numerous tasks, deadlines, and details. A professional event planner manages all of these, allowing you to relax and enjoy the process without stress.",
              icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            },
            {
              title: "Expertise and Experience",
              text: "Professional event planners understand every aspect of event execution — from venue selection to timeline management — ensuring flawless delivery.",
              icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            },
            {
              title: "Time-Saving",
              text: "Event planners save you countless hours of research, organization, and coordination so you can focus on what truly matters.",
              icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            },
            {
              title: "Budget Management",
              text: "They help you stick to your budget, negotiate vendor pricing, and achieve high-quality results without unnecessary expenses.",
              icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            },
            {
              title: "Creativity and Innovation",
              text: "Planners bring fresh ideas, themes, and designs that elevate your event into a memorable experience.",
              icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            },
            {
              title: "Attention to Detail",
              text: "From lighting to seating arrangements, every detail is handled carefully to match your vision perfectly.",
              icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            },
            {
              title: "Problem-Solving Skills",
              text: "Unexpected challenges are handled swiftly and professionally so your event continues smoothly.",
              icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            },
            {
              title: "Conclusion",
              text: "Hiring a professional planner ensures peace of mind, superior quality, and a truly unforgettable event experience.",
              icon: "M5 13l4 4L19 7"
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#FF4500]"
            >
              {/* Decorative gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF4500]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-black group-hover:bg-[#FF4500] flex items-center justify-center mb-4 sm:mb-5 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 group-hover:text-[#FF4500] transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Text */}
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-black to-gray-900 rounded-3xl p-8 sm:p-12 text-center text-white mb-12 sm:mb-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-1/4 w-64 h-64 bg-[#FF4500] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#FF4500] rounded-full blur-3xl"></div>
          </div>
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Work with Professional Planners?</h3>
            <p className="text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Experience the difference that expert event planning makes. Let us handle the details while you enjoy the celebration.
            </p>
            <button
              onClick={() => handleNavigation("/contact")}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-[#FF4500] text-white rounded-xl font-semibold hover:bg-[#FF5722] transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              Get Started Today
            </button>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 py-4">
          <button
            onClick={() => handleNavigation("/blogs")}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-[#FF4500] text-white font-semibold hover:bg-[#FF5722] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            See All Blogs
          </button>
          
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-black flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            Back to Top
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Blogs2;