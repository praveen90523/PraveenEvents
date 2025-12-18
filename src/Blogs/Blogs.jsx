import React from "react";
import { useNavigate } from 'react-router-dom'
const Blogs = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
      navigate(path);
    };

  const blogPosts = [
    {
      id: 1,
      title: "How Praveen Events Can Simplify Your Event Planning Process",
      image: "https://framerusercontent.com/images/ZN6C9I3xkufl91QnGjKphMlSrI.jpg?scale-down-to=1024",
      excerpt: "Discover proven strategies to streamline your event planning and create unforgettable experiences with ease.",
      date: "December 10, 2024",
      readTime: "5 min read",
      category: "Planning Tips",
      path: "/Blogs1"
    },
    {
      id: 2,
      title: "The Benefits of Hiring a Professional Event Planner",
      image: "https://framerusercontent.com/images/X7DZ3crjPZlTeCQsL2mSnAAOF74.jpg?scale-down-to=1024",
      excerpt: "Learn why partnering with expert planners can transform your event from ordinary to extraordinary.",
      date: "December 8, 2024",
      readTime: "4 min read",
      category: "Industry Insights",
      path: "/Blogs2"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white min-h-screen">
      

      <section className="relative bg-gradient-to-br from-orange-500 to-red-500 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-white font-semibold text-sm uppercase tracking-wider">
              Insights & Stories
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Our Blog
          </h1>
          <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto leading-relaxed">
            Expert tips, industry insights, and inspiration for your next event
          </p>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-6 py-20">

     
        <div className="mb-24">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            <div className="relative h-96 md:h-[500px] lg:h-[600px]">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg"
                alt="Featured blog"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute via-opacity-50 to-transparent" />
              
         
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                <div className="max-w-4xl">
                  <div className="inline-block bg-orange-500 rounded-full px-4 py-1 mb-4">
                    <span className="text-sm font-semibold uppercase tracking-wide">Featured</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                    Creating Memorable Events: A Complete Guide
                  </h2>
                  <p className="text-lg text-gray-200 mb-6 max-w-2xl">
                    From concept to execution, learn the secrets behind planning extraordinary events that leave lasting impressions.
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-gray-300">
                    <span className="flex items-center space-x-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>December 15, 2024</span>
                    </span>
                    <span className="flex items-center space-x-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>8 min read</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

     
        

        <div className="mb-16 py-16 sm:py-20">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-2">Latest Articles</h2>
              <p className="text-gray-600 pb-16">Explore our recent posts and event planning insights</p>
            </div>
          </div>

        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => handleNavigation(post.path)}
                className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
             
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>
                </div>

                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-500 transition-colors duration-300 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
               
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{post.date}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{post.readTime}</span>
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-orange-500 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                      <span>Read More</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <div className="mt-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-2xl" />
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-white font-semibold text-sm uppercase tracking-wider">
                Stay Updated
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-white text-opacity-90 text-lg mb-8">
              Get the latest event planning tips, trends, and exclusive insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30"
              />
              <button className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 shadow-xl whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Blogs;