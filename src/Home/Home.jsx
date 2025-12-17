import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [loggedInPerson, setLoggedInPerson] = useState(
    localStorage.getItem("loggedInPerson") || "Guest"
  );

  useEffect(() => {
    if (location.state?.personData?.name) {
      localStorage.setItem("loggedInPerson", location.state.personData.name);
      localStorage.setItem("loggedInPersonRole", location.state.role);
      setLoggedInPerson(location.state.personData.name);
    }
  }, [location.state]);

  const videoSources = [
    "https://videos.pexels.com/video-files/9474518/9474518-uhd_2732_1440_30fps.mp4",
    "https://videos.pexels.com/video-files/31575321/13456306_2560_1440_25fps.mp4",
    "https://videos.pexels.com/video-files/31501470/13430911_1920_1080_60fps.mp4",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % videoSources.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-x-hidden bg-gradient-to-b from-white via-gray-50 to-white">


      <div className="relative h-screen min-h-[700px] overflow-hidden">
        <video
          key={activeIndex}
          src={videoSources[activeIndex]}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />


        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">


              <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 animate-fade-in">
                <span className="text-white font-semibold text-sm uppercase tracking-wider">
                  Premium Event Management
                </span>
              </div>


              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-6 animate-fade-in-up">
                Premier Event Planning for<br />Life's Biggest Moments
              </h1>


              <p className="text-lg sm:text-xl md:text-2xl text-white text-opacity-90 font-light max-w-4xl mx-auto mb-8 leading-relaxed animate-fade-in-up">
                Grand Weddings • Corporate Events • Festivals • Private Parties
              </p>


              <button
                onClick={() => navigate("/form")}
                className="
    group relative
    bg-gradient-to-r from-orange-500 to-red-500
    text-white
    px-6 py-3
    sm:px-8 sm:py-3.5
    md:px-10 md:py-4
    rounded-full
    font-semibold sm:font-bold
    text-sm sm:text-base md:text-lg
    shadow-lg hover:shadow-2xl
    transition-all duration-300
    hover:-translate-y-0.5
    overflow-hidden
    inline-flex items-center justify-center
    gap-2
  "
              >
                <span className="relative z-10 whitespace-nowrap">
                  Plan Your Event Today
                </span>

                <svg
                  className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6
               transition-transform duration-300 group-hover:translate-x-1"
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


                <div className="
    absolute inset-0
    bg-gradient-to-r from-orange-600 to-red-600
    opacity-0 group-hover:opacity-100
    transition-opacity duration-300
  " />
              </button>



              <div className="flex justify-center gap-2 mt-12">
                {videoSources.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === idx
                        ? 'w-12 bg-white'
                        : 'w-8 bg-white/40 hover:bg-white/60'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 bg-opacity-10 rounded-full px-8 py-3 mb-6">
            <span className="text-white font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Your Trusted Partner for<br />Exceptional Events
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            From seamless corporate planning to breathtaking wedding celebrations,
            Ajith Events brings your vision to life with creativity, precision, and
            unmatched quality.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
              title: "Proven Excellence",
              desc: "Over 500+ successful events delivered with perfection"
            },
            {
              icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
              title: "On-Time Delivery",
              desc: "Every event executed flawlessly within your timeline"
            },
            {
              icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
              title: "Dedicated Team",
              desc: "Professional experts handling every detail with care"
            }
          ].map((feature, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="bg-gradient-to-br from-orange-500 to-red-500 bg-opacity-10 p-4 rounded-2xl inline-flex mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>


      <section className="relative bg-gradient-to-br from-orange-500 to-red-500 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-white font-semibold text-sm uppercase tracking-wider">
              Our Vision
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Creating Masterpiece Events
          </h2>
          <p className="text-xl text-white text-opacity-90 leading-relaxed max-w-4xl mx-auto">
            We envision a world where every event is a masterpiece. Our team
            transforms concepts into spectacular productions, ensuring every
            detail is executed flawlessly—on time and within budget.
          </p>
        </div>
      </section>


      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 bg-opacity-10 rounded-full px-8 py-3 mb-6">
            <span className="text-white font-semibold text-sm uppercase tracking-wider">
              Our Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Let's Plan Your Big Day
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From initial consultation to final execution, we guide you through every step
          </p>
        </div>

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Speak", text: "Share your vision & requirements", img: "Call-icon.png" },
              { title: "Explore", text: "Browse our past magical events", img: "Search.png" },
              { title: "Visualize", text: "See your decor come alive", img: "Images.png" },
              { title: "Book", text: "Confirm with a detailed quote", img: "Calender.png" },
              { title: "Relax & Enjoy", text: "Celebrate stress-free moments", img: "Women-with-tea.png" },
            ].map((step, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-3xl p-6 text-center border border-gray-100 
        hover:border-orange-500 hover:shadow-2xl hover:-translate-y-1 
        transition-all duration-500 flex flex-col items-center"
              >

                <div className="absolute -top-3 -left-3 bg-gradient-to-br from-orange-500 to-red-500 
        text-white w-10 h-10 rounded-full flex items-center justify-center 
        font-bold text-lg shadow-lg">
                  {i + 1}
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-5 mb-5">
                  <img
                    src={`https://goldentrumpetevents.com/wp-content/uploads/2023/10/${step.img}`}
                    alt={step.title}
                    className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <h4 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-orange-500">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

      </section>


      <section className="relative bg-gradient-to-r from-orange-500 to-red-500 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-2xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Create Magic?
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's turn your dream event into reality. Contact us today for a personalized consultation.
          </p>
          <button
            onClick={() => navigate("/form")}
            className="bg-white text-orange-500 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 shadow-2xl inline-flex items-center space-x-2"
          >
            <span>Get Started Now</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </section>

    </div>
  );
};

export default Home;