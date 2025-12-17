import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ServiceGallery = ({ title, description, category }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://api.jsonbin.io/v3/b/6800f20c8a456b79668b6788")
      .then((res) => setData(res.data.record))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (item) => {
    navigate(`/details/${item.id}`, { state: item });
  };

  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto">

     
        <div className="text-center py-10 sm:py-4 mb-8 sm:mb-16 ">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 bg-opacity-10 rounded-full px-4 py-2 sm:px-8 sm:py-3 mb-4 sm:mb-6">
            <span className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Our Collection
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2 sm:mb-4 px-2">
            {title}
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            {description}
          </p>
        </div>

     
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
          {data
            .filter((item) => item.category === category)
            .map((item, index) => (
              <div
                key={index}
                onClick={() => handleClick(item)}
                className="group cursor-pointer bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative h-48 sm:h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.hallName}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute from-opacity-80 via-black via-opacity-30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
               
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-2 sm:p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>

                
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                    <p className="text-lg sm:text-xl font-bold transform transition-transform duration-300 group-hover:translate-x-2">
                      {item.hallName}
                    </p>
                  </div>
                </div>

              
                <div className="p-2 sm:p-5">
                  <p className="text-center font-semibold text-gray-800 text-xs sm:text-lg group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
                    {item.hallName}
                  </p>
                </div>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceGallery;