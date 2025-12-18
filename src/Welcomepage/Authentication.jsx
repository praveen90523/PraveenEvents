import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Authentication = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-50 via-white to-red-50">

     
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 text-white py-24">
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center px-4">
          <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
            ✨ Your Event Planning Journey Starts Here
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Welcome to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-white">
              Praveen Events
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 opacity-95 max-w-2xl mx-auto font-light">
            Transform your vision into unforgettable experiences with our seamless event planning platform
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate("/signup")}
              className="group relative bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-300/50"
            >
              <span className="relative z-10">Get Started Free</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
             
            </button>

            <button
              onClick={() => navigate("/login")}
              className="border-2 border-white/80 backdrop-blur-sm bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Log In
            </button>
          </div>
        </div>
      </div>

    
      <div className="py-20 bg-white relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto py-4">
              Powerful features designed to make event planning effortless and enjoyable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

         
            <div className="group bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border-2 border-orange-100 hover:border-orange-300 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-0 transition-transform duration-300">
                📅
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Smart Planning
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Create detailed event schedules with our intuitive drag-and-drop interface
              </p>
              <div className="mt-6 inline-flex items-center text-orange-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more →
              </div>
            </div>

           
            <div className="group bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border-2 border-red-100 hover:border-red-300 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-0 transition-transform duration-300">
                ✅
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Organized Checklists
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Never miss a detail with customizable checklists and automatic reminders
              </p>
              <div className="mt-6 inline-flex items-center text-red-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more →
              </div>
            </div>

    
            <div className="group bg-gradient-to-br from-pink-50 to-white p-8 rounded-2xl border-2 border-pink-100 hover:border-pink-300 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-0 transition-transform duration-300">
                👥
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Team Collaboration
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Work together seamlessly with real-time updates and team messaging
              </p>
              <div className="mt-6 inline-flex items-center text-pink-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more →
              </div>
            </div>

          </div>

        
          <div className="mt-20 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="p-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">10K+</div>
                <div className="text-gray-600">Events Planned</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-red-600 mb-2">50K+</div>
                <div className="text-gray-600">Happy Users</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-pink-600 mb-2">99%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-center py-6 mt-auto">
        <div className="flex items-center justify-center gap-2">
          <span className="text-gray-400">Made with</span>
          <span className="text-red-500 animate-pulse text-xl">❤️</span>
          <span className="text-gray-400">by</span>
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400">
            Praveen Events Team
          </span>
        </div>
      </div>
    </div>
  );
};

export default Authentication;