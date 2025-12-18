import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://api.jsonbin.io/v3/b/67fd53fc8960c979a5850737", {
        headers: {
          "X-Master-Key": "<YOUR_JSONBIN_SECRET_KEY>",
        },
      })
      .then((res) => {
        setImages(res.data.record);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white">
      
     
      <section className="relative bg-gradient-to-br from-orange-500 to-red-500 py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center py-2">
          <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-1.5 sm:px-6 sm:py-2 mb-4 sm:mb-6">
            <span className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Our Moments
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
            Event Gallery
          </h1>
          <p className="text-base sm:text-xl text-white text-opacity-90 max-w-3xl mx-auto leading-relaxed">
            Beautiful memories captured • Passion makes perfection
          </p>
        </div>
      </section>

    
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">

       
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block">
              <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-base sm:text-lg text-gray-600 font-medium">
                Loading our beautiful moments...
              </p>
            </div>
          </div>
        ) : (
          <>
         
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
              {images.map((x, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(x.image)}
                  className="group cursor-pointer bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="relative h-48 sm:h-72 overflow-hidden">
                    <img
                      src={x.image}
                      alt={`Gallery ${index + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black from-opacity-60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-2 sm:p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-4 h-4 sm:w-6 sm:h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          
            <div className="mt-16 sm:mt-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-2xl" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-2xl" />
              </div>
              <div className="relative">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                  Want to Create Your Own Memories?
                </h3>
                <p className="text-white text-opacity-90 text-sm sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Let us capture your special moments with the same passion and perfection
                </p>
                <button
                 onClick={() => navigate("/form")}
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
                  <span className="whitespace-nowrap">Get Started</span>
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
          </>
        )}

      </section>

      
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 sm:-top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Full size"
              className="w-full h-auto rounded-xl sm:rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;