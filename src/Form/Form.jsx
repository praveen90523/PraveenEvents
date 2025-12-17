import React, { useEffect, useState } from "react";
import { db } from "../Firebase/Fbconfig";
import { ref, push, set } from "firebase/database";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form1 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [availableHalls, setAvailableHalls] = useState([]);
  const [availableLocations, setAvailableLocations] = useState([]);

  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: "",
    eventType: "",
    location: "",
    hallname: "",
    guests: "",
    budget: "",
    date: "",
  });

  const eventOptions = {
    wedding: [
      "Krishna Garden Function Hall",
      "Rajwada Palace Banquet Hall",
      "Sangeetha Gardens",
      "Green Valley Garden",
      "Haldi Set",
      "Subhamastu Function Hall",
      "Performance Show",
      "Sree Lakshmi Convention Hall",
      "Anmol Celebration Hall",
      "Sai Krishna Kalyana Mandapam",
      "Kusumas Halls",
    ],
    "corporate party": [
      "Orion Business Convention Center",
      "Crystal Tower Corporate Hall",
      "Zenith Hall – TechPark Events",
      "Grand Sapphire Boardroom",
      "Emerald Elite Corporate Suites",
      "Phoenix Vista Business Hub",
      "The Hive Seminar Hall",
      "Nexus Pro Convention Venue",
      "MetroPoint Corporate Hall",
      "Infinity Edge Business Bay",
      "CoreSpace Executive Arena",
    ],
    birthday: [
      "Butterfly Theme",
      "Barbie Dream Theme",
      "Animal Theme",
      "Forest Theme",
      "Aqua Theme",
      "Horses Theme",
      "Drunk in Love Theme",
      "Avengers Theme",
      "Princess Theme",
      "Goa Beach Theme",
      "Jurassic Theme",
    ],
    "private party": [
      "Olive Bistro",
      "Candle Light Dinner",
      "Private Cabin Resto",
      "Pool Resto",
      "Bachelors Mania",
      "Jungle Theme",
      "Theatre Theme",
      "Halloween Theme",
      "Retro Theme",
    ],
    destinations: [
      "Waves & Whistles",
      "Whispering Pines Wedding",
      "Royal / Rajputana Theme",
      "Pearls of Paradise",
      "Moonlight Manhattan",
      "Love on the Grapevines",
      "Moonlit Mirage",
      "Manali Mania",
      "Andamans Elegance",
      "Fort Resorts",
    ],
    festival: [
      "Ganpati Utsav",
      "Krishna Leela – Dahi Handi",
      "Yuletide Gala",
      "Rajesh Parade",
      "Dandiya Dhamaka",
      "Holi Dhamaka",
      "Ravana Samharam",
      "Bathukamma Celebrations",
    ],
  };

  const locationOptions = {
    wedding: ["Vizag", "Vijayawada", "Hyderabad", "Guntur", "Rajahmundry"],
    birthday: ["Vizag", "Kakinada", "Hyderabad", "Warangal"],
    "private party": ["Beach Road", "Hilltop Resort", "Farmhouse", "City Club"],
    "corporate party": ["Business Bay", "Tech Park", "City Center", "Corporate Hub"],
    destinations: ["Manali", "Goa", "Jaipur", "Udaipur", "Kerala"],
    festival: ["Local Grounds", "Community Halls", "Open Stadium", "Temple Venues"],
  };

  
  useEffect(() => {
    if (location.state) {
      setBookingDetails(prev => ({
        ...prev,
        eventType: location.state.category || "",
        hallname: location.state.hallName || "",
        guests: location.state.guests || "",
        budget: location.state.budget || "",
      }));
    }
  }, [location.state]);

  const handleDetails = (e) => {
    const { name, value } = e.target;

    if (name === "eventType") {
      setBookingDetails({
        ...bookingDetails,
        eventType: value,
        hallname: "",
        location: "",
      });
      setAvailableHalls(eventOptions[value] || []);
      setAvailableLocations(locationOptions[value] || []);
    } else {
      setBookingDetails({ ...bookingDetails, [name]: value });
    }
  };

  const handleSubmitBooking = async (e) => {
    e.preventDefault();

    try {
      const bookingsRef = ref(db, "bookings");
      const newBookingRef = push(bookingsRef);

      await set(newBookingRef, {
        ...bookingDetails,
        timestamp: new Date().toISOString(),
      });

      toast.success("🎉 Booking submitted successfully!", {
        position: "top-right",
        autoClose: 3000,
      });

      setBookingDetails({
        name: "",
        email: "",
        eventType: "",
        location: "",
        hallname: "",
        guests: "",
        budget: "",
        date: "",
      });

      setAvailableHalls([]);
      setAvailableLocations([]);

      setTimeout(() => navigate("/form"), 1500);

    } catch (error) {
      toast.error("❌ Failed to submit booking. Try again!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">

      <ToastContainer />

   
      <section className="relative bg-gradient-to-br from-orange-500 to-red-500 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-white font-semibold text-sm uppercase tracking-wider">
              Book Your Event
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Event Booking
          </h1>
          <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto leading-relaxed">
            Fill out the details below to book your perfect event
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

       
          <div className="relative group">
            <div className="absolute -inset-4  rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://img.freepik.com/free-vector/wedding-planner-concept-illustration_114360-2720.jpg"
                alt="Event"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

        
          <div className="relative">
            <div className="absolute -inset-1  rounded-3xl opacity-10 blur-xl" />
            <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 p-10">
              <div className="text-center mb-10">
                <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 bg-opacity-10 rounded-full px-8 py-3 mb-6">
                  <span className="text-white font-semibold text-sm uppercase tracking-wider">
                    Get Started
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                  Book Your Event
                </h2>
                <p className="text-gray-600 text-lg">
                  Let's make your event unforgettable
                </p>
              </div>

              <form onSubmit={handleSubmitBooking} className="space-y-5">

                <div className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={bookingDetails.name}
                      onChange={handleDetails}
                      required
                      className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all duration-300 placeholder:text-gray-400 bg-gray-50 focus:bg-white"
                    />
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={bookingDetails.email}
                      onChange={handleDetails}
                      required
                      className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all duration-300 placeholder:text-gray-400 bg-gray-50 focus:bg-white"
                    />
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                    Event Type
                  </label>
                  <div className="relative">
                    <select
                      name="eventType"
                      value={bookingDetails.eventType}
                      onChange={handleDetails}
                      className="w-full p-4 pl-12 pr-12 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-gray-50 focus:bg-white text-gray-700 cursor-pointer appearance-none"
                      required
                    >
                      <option value="">Select Event Type</option>
                      <option value="wedding">💍 Wedding</option>
                      <option value="birthday">🎂 Birthday</option>
                      <option value="private party">🎉 Private Party</option>
                      <option value="corporate party">💼 Corporate Party</option>
                      <option value="destinations">✈️ Destinations</option>
                      <option value="festival">🎊 Festival</option>
                    </select>
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-orange-500 transition-colors pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                    Location
                  </label>
                  <div className="relative">
                    <select
                      name="location"
                      value={bookingDetails.location}
                      onChange={handleDetails}
                      className="w-full p-4 pl-12 pr-12 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-gray-50 focus:bg-white text-gray-700 cursor-pointer appearance-none"
                      required
                    >
                      <option value="">Select Location</option>
                      {availableLocations.map((loc, i) => (
                        <option key={i} value={loc}>📍 {loc}</option>
                      ))}
                    </select>
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-orange-500 transition-colors pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                    Hall / Theme
                  </label>
                  <div className="relative">
                    <select
                      name="hallname"
                      value={bookingDetails.hallname}
                      onChange={handleDetails}
                      className="w-full p-4 pl-12 pr-12 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-gray-50 focus:bg-white text-gray-700 cursor-pointer appearance-none"
                      required
                    >
                      <option value="">Select Hall / Theme</option>
                      {availableHalls.map((hall, i) => (
                        <option key={i} value={hall}>🏛️ {hall}</option>
                      ))}
                    </select>
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-orange-500 transition-colors pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                    Number of Guests
                  </label>
                  <div className="relative">
                    <select
                      name="guests"
                      value={bookingDetails.guests}
                      onChange={handleDetails}
                      required
                      className="w-full p-4 pl-12 pr-12 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-gray-50 focus:bg-white text-gray-700 cursor-pointer appearance-none"
                    >
                      <option value="">Select guest range</option>
                      <option value="Couple"> Couple</option>
                      <option value="1-10">1 - 10</option>
                      <option value="11-25"> 11 - 25</option>
                      <option value="26-50"> 26 - 50</option>
                      <option value="51-100"> 51 - 100</option>
                      <option value="Above 100"> Above 100</option>
                      <option value="Above 300"> Above 300</option>
                      <option value="Above 500"> Above 500</option>
                      <option value="Above 800"> Above 800</option>
                      <option value="1000+"> 1000+</option>
                    </select>
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-orange-500 transition-colors pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                    Budget Range
                  </label>
                  <div className="relative">
                    <select
                      name="budget"
                      value={bookingDetails.budget}
                      onChange={handleDetails}
                      required
                      className="w-full p-4 pl-12 pr-12 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-gray-50 focus:bg-white text-gray-700 cursor-pointer appearance-none"
                    >
                      <option value="">Select your budget range</option>
                      <option value="5000"> ₹5,000</option>
                      <option value="5000-10000"> ₹5,000 - ₹10,000</option>
                      <option value="10001-25000"> ₹10,001 - ₹25,000</option>
                      <option value="25001-50000"> ₹25,001 - ₹50,000</option>
                      <option value="50001-100000"> ₹50,001 - ₹1,00,000</option>
                      <option value="100001-250000"> ₹1,00,001 - ₹2,50,000</option>
                      <option value="250001-500000"> ₹2,50,001 - ₹5,00,000</option>
                      <option value="500001-1000000"> ₹5,00,001 - ₹10,00,000</option>
                      <option value="1000001-1500000"> ₹10,00,001 - ₹15,00,000</option>
                      <option value="1500000+"> ₹15,00,000+</option>
                    </select>
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-orange-500 transition-colors pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                    Event Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      name="date"
                      value={bookingDetails.date}
                      onChange={handleDetails}
                      className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all duration-300 text-gray-700 cursor-pointer bg-gray-50 focus:bg-white"
                      required
                    />
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-orange-500 transition-colors pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-5 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group mt-8"
                >
                  <span className="relative z-10 inline-flex items-center justify-center space-x-2">
                    <span>Submit Booking</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form1;