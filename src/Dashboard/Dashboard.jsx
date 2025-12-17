import React, { useEffect, useState, useRef } from "react";
import { db } from "../Firebase/Fbconfig";
import { ref, onValue, set } from "firebase/database";
import emailjs from "@emailjs/browser";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { toast } from "react-toastify";
import CountUp from "react-countup";
import Adminsidebar from "../Adminsidebar/Adminsidebar";

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [processingBookings, setProcessingBookings] = useState(new Set());
  const prevCount = useRef(0);

  useEffect(() => {
    const bookingsRef = ref(db, "bookings");
    const unsubscribe = onValue(
      bookingsRef,
      (snapshot) => {
        const data = snapshot.val() || {};
        const list = Object.keys(data).map((id) => ({
          id,
          ...data[id],
        }));

       
        list.sort((a, b) => new Date(b.date) - new Date(a.date));

        if (list.length > prevCount.current && prevCount.current > 0) {
          toast.info("📩 New booking received");
        }

        prevCount.current = list.length;
        setBookings(list);
        setLoading(false);
      },
      (error) => {
        toast.error("Failed to load bookings");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const updateStatus = async (booking, status) => {
    if (processingBookings.has(booking.id)) {
      toast.warning("Processing in progress...");
      return;
    }

    setProcessingBookings((prev) => new Set(prev).add(booking.id));

    try {
      await emailjs.send(
        "service_81u4ve5",
        "template_tvglknj",
        {
          name: booking.name,
          to_email: booking.email,
          message: `Your booking for ${booking.eventType} has been ${status}.`,
          status,
        },
        "QkZXs9szn-1aDlGoZ"
      );

      await set(ref(db, `bookings/${booking.id}`), {
        ...booking,
        status,
        updatedAt: new Date().toISOString(),
      });

      toast.success(`Booking ${status} successfully`);
    } catch (error) {
      toast.error(`Failed to ${status} booking. Please try again.`);
    } finally {
      setProcessingBookings((prev) => {
        const newSet = new Set(prev);
        newSet.delete(booking.id);
        return newSet;
      });
    }
  };

  const accepted = bookings.filter((b) => b.status === "accepted").length;
  const rejected = bookings.filter((b) => b.status === "rejected").length;
  const pending = bookings.filter(
    (b) => !b.status || b.status === "pending"
  ).length;

  const eventMap = {};
  bookings.forEach((b) => {
    eventMap[b.eventType] = (eventMap[b.eventType] || 0) + 1;
  });

 
  const chartColors = [
    "#FF6B35", 
    "#F7931E", 
    "#EF4444",
    "#EC4899", 
    "#8B5CF6", 
    "#3B82F6", 
    "#10B981", 
    "#F59E0B", 
  ];

  const chartData = {
    labels: Object.keys(eventMap),
    datasets: [
      {
        data: Object.values(eventMap),
        backgroundColor: chartColors.slice(0, Object.keys(eventMap).length),
        borderColor: "#fff",
        borderWidth: 3,
        hoverOffset: 15,
        hoverBorderWidth: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          padding: 20,
          font: {
            size: 13,
            weight: "600",
            family: "'Inter', sans-serif",
          },
          color: "#374151",
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        padding: 12,
        titleFont: {
          size: 14,
          weight: "bold",
        },
        bodyFont: {
          size: 13,
        },
        borderColor: "rgba(255, 255, 255, 0.1)",
        borderWidth: 1,
        displayColors: true,
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.parsed || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return ` ${label}: ${value} bookings (${percentage}%)`;
          },
        },
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 1000,
      easing: "easeOutQuart",
    },
  };

  const getStatusBadge = (status) => {
    if (!status || status === "pending") {
      return (
        <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-700 shadow-sm">
          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></span>
          Pending
        </span>
      );
    }
    if (status === "accepted") {
      return (
        <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 shadow-sm">
          <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Accepted
        </span>
      );
    }
    return (
      <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide bg-gradient-to-r from-red-100 to-rose-100 text-red-700 shadow-sm">
        <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        Rejected
      </span>
    );
  };

  return (
    <div className="grid md:grid-cols-[260px_1fr] min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Adminsidebar />

      <main className="p-4 sm:p-6 lg:p-8 mt-14 md:mt-0 overflow-x-hidden">
        {/* HEADER */}
        <section className="relative bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 rounded-2xl sm:rounded-3xl py-12 sm:py-16 mb-6 sm:mb-10 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          <div className="relative text-center px-4">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 mb-3 sm:mb-4 border border-white/30">
              <span className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Management Portal
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2 tracking-tight drop-shadow-lg">
              Admin Dashboard
            </h2>
            <p className="text-base sm:text-lg text-white/90 font-medium">
              Real-time booking monitoring and management
            </p>
          </div>
        </section>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* CHART + STATS */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-10">
              {/* CHART */}
              <div className="lg:col-span-2 bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-4">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-800">
                      Event Distribution
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      Overview of all event types
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-lg">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="h-[280px] sm:h-[320px] lg:h-[380px] flex items-center justify-center">
                  {Object.keys(eventMap).length > 0 ? (
                    <Doughnut data={chartData} options={chartOptions} />
                  ) : (
                    <div className="text-center">
                      <div className="inline-flex p-4 sm:p-6 rounded-full bg-gradient-to-br from-orange-100 to-red-100 mb-4">
                        <svg
                          className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-400 text-sm sm:text-base font-medium">
                        No events to display
                      </p>
                    </div>
                  )}
                </div>
              </div>

             
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
                {[
                  {
                    label: "Total Bookings",
                    value: bookings.length,
                    color: "from-orange-500 to-red-500",
                    textColor: "text-orange-600",
                    bgColor: "from-orange-100 to-red-100",
                    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
                  },
                  {
                    label: "Accepted",
                    value: accepted,
                    color: "from-green-500 to-emerald-500",
                    textColor: "text-green-600",
                    bgColor: "from-green-100 to-emerald-100",
                    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                  },
                  {
                    label: "Rejected",
                    value: rejected,
                    color: "from-red-500 to-rose-500",
                    textColor: "text-red-600",
                    bgColor: "from-red-100 to-rose-100",
                    icon: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z",
                  },
                  {
                    label: "Pending",
                    value: pending,
                    color: "from-yellow-500 to-amber-500",
                    textColor: "text-yellow-600",
                    bgColor: "from-yellow-100 to-amber-100",
                    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 p-4 sm:p-6 relative overflow-hidden"
                  >
                    <div
                      className={`absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br ${item.bgColor} opacity-20 rounded-full blur-2xl group-hover:opacity-30 transition-opacity duration-500`}
                    />
                    <div className="relative">
                      <div
                        className={`inline-flex p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.color} shadow-lg mb-3 sm:mb-4`}
                      >
                        <svg
                          className={`w-5 h-5 sm:w-6 sm:h-6 text-white`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={item.icon}
                          />
                        </svg>
                      </div>
                      <h3
                        className={`text-3xl sm:text-4xl font-black ${item.textColor} mb-1 sm:mb-2`}
                      >
                        <CountUp end={item.value} duration={1.5} />
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 font-semibold">
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

           
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-br from-gray-50 to-white p-4 sm:p-6 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                      Recent Bookings
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      Manage and track all booking requests
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-lg">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

             
              <div className="block lg:hidden">
                {bookings.length === 0 ? (
                  <div className="text-center py-12 sm:py-16 px-4">
                    <div className="inline-flex p-4 sm:p-6 rounded-full bg-gradient-to-br from-orange-100 to-red-100 mb-4">
                      <svg
                        className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-base sm:text-lg font-semibold">
                      Waiting for bookings…
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm mt-2">
                      New bookings will appear here automatically
                    </p>
                  </div>
                ) : (
                  bookings.map((b, idx) => {
                    const isProcessing = processingBookings.has(b.id);
                    const hasStatus = b.status && b.status !== "pending";

                    return (
                      <div
                        key={b.id}
                        className={`border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors ${
                          isProcessing ? "opacity-50" : ""
                        }`}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                              {b.name}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-600 break-all">
                              {b.email}
                            </p>
                          </div>
                          {getStatusBadge(b.status)}
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                          <div>
                            <p className="text-gray-500 text-xs">Event Type</p>
                            <span className="inline-flex items-center px-3 py-1 mt-1 rounded-full text-xs font-semibold bg-gradient-to-r from-orange-100 to-red-100 text-orange-700">
                              {b.eventType}
                            </span>
                          </div>
                          <div>
                            <p className="text-gray-500 text-xs">Date</p>
                            <p className="font-medium text-gray-900 mt-1">
                              {new Date(b.date).toLocaleDateString()}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 text-xs">Guests</p>
                            <p className="font-medium text-gray-900 mt-1">
                              {b.guests}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 text-xs">Budget</p>
                            <p className="font-semibold text-gray-900 mt-1">
                              {b.budget}
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <button
                            onClick={() => updateStatus(b, "accepted")}
                            disabled={isProcessing || hasStatus}
                            className={`flex-1 group relative bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 overflow-hidden ${
                              isProcessing || hasStatus
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:shadow-lg transform active:scale-95"
                            }`}
                          >
                            <span className="relative z-10">
                              {isProcessing ? "Processing..." : "Accept"}
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </button>
                          <button
                            onClick={() => updateStatus(b, "rejected")}
                            disabled={isProcessing || hasStatus}
                            className={`flex-1 group relative bg-gradient-to-r from-red-600 to-rose-600 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 overflow-hidden ${
                              isProcessing || hasStatus
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:shadow-lg transform active:scale-95"
                            }`}
                          >
                            <span className="relative z-10">
                              {isProcessing ? "Processing..." : "Reject"}
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-rose-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

             
              <div className="hidden lg:block p-4 sm:p-6 overflow-x-auto">
                <table className="min-w-full w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      {[
                        "Name",
                        "Email",
                        "Event",
                        "Guests",
                        "Budget",
                        "Date",
                        "Status",
                        "Action",
                      ].map((h) => (
                        <th
                          key={h}
                          className="px-4 py-4 text-left font-bold text-gray-700 uppercase text-xs tracking-wider"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((b, idx) => {
                      const isProcessing = processingBookings.has(b.id);
                      const hasStatus = b.status && b.status !== "pending";

                      return (
                        <tr
                          key={b.id}
                          className={`border-b border-gray-100 hover:bg-gradient-to-r hover:from-orange-50 hover:to-transparent transition-all duration-300 ${
                            idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                          } ${isProcessing ? "opacity-50" : ""}`}
                        >
                          <td className="px-4 py-4 font-semibold text-gray-800">
                            <div className="max-w-[150px] truncate">
                              {b.name}
                            </div>
                          </td>
                          <td className="px-4 py-4 text-gray-600">
                            <div className="max-w-[180px] truncate">
                              {b.email}
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-orange-100 to-red-100 text-orange-700">
                              {b.eventType}
                            </span>
                          </td>
                          <td className="px-4 py-4 text-gray-700 font-medium">
                            {b.guests}
                          </td>
                          <td className="px-4 py-4 text-gray-700 font-medium">
                            {b.budget}
                          </td>
                          <td className="px-4 py-4 text-gray-600">
                            {new Date(b.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </td>
                          <td className="px-4 py-4">
                            {getStatusBadge(b.status)}
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex gap-2">
                              <button
                                onClick={() => updateStatus(b, "accepted")}
                                disabled={isProcessing || hasStatus}
                                className={`group relative bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 overflow-hidden ${
                                  isProcessing || hasStatus
                                    ? "opacity-50 cursor-not-allowed"
                                    : "hover:shadow-lg transform hover:-translate-y-0.5"
                                }`}
                              >
                                <span className="relative z-10">
                                  {isProcessing ? "..." : "Accept"}
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </button>
                              <button
                                onClick={() => updateStatus(b, "rejected")}
                                disabled={isProcessing || hasStatus}
                                className={`group relative bg-gradient-to-r from-red-600 to-rose-600 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 overflow-hidden ${
                                  isProcessing || hasStatus
                                    ? "opacity-50 cursor-not-allowed"
                                    : "hover:shadow-lg transform hover:-translate-y-0.5"
                                }`}
                              >
                                <span className="relative z-10">
                                  {isProcessing ? "..." : "Reject"}
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-rose-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                {bookings.length === 0 && (
                  <div className="text-center py-16">
                    <div className="inline-flex p-6 rounded-full bg-gradient-to-br from-orange-100 to-red-100 mb-4">
                      <svg
                        className="w-12 h-12 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-lg font-semibold">
                      Waiting for bookings…
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                      New bookings will appear here automatically
                    </p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Dashboard;