import React from 'react';
import { Link } from 'react-router-dom';
import { FaComment, FaEye } from "react-icons/fa";
import blog1 from "../../images/blog-01.jpg";
import blog2 from "../../images/blog-02.jpg";
import blog3 from "../../images/blog-03.jpg";

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Recent Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* First Blog */}
        <Link to="/blog" className="block">
          <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img src={blog1} alt="Article Image" className="w-full h-48 object-cover hover:opacity-75" />
            <div className="p-4">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-400 text-white rounded-full px-4 py-2 text-center">
                  <span className="block text-sm">12</span>
                  <span className="block text-xs">May, 24</span>
                </div>
                <div className="ml-4 text-sm text-gray-600">
                  <span>Service</span>
                  <span className="mx-2">|</span>
                  <FaComment className="inline mr-1" /> 1
                  <span className="mx-2">|</span>
                  <FaEye className="inline mr-1" /> 1
                </div>
              </div>
              <h2 className="text-xl font-bold mb-2">London Airport launches additional flights to Madrid</h2>
              <p className="text-gray-600 text-sm">The price of tickets for low-cost airlines for a specific route has a much larger spread...</p>
            </div>
          </div>
        </Link>

        {/* Second Blog */}
        <Link to="/blog" className="block">
          <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img src={blog2} alt="Article Image" className="w-full h-48 object-cover hover:opacity-75" />
            <div className="p-4">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-400 text-white rounded-full px-4 py-2 text-center">
                  <span className="block text-sm">15</span>
                  <span className="block text-xs">June, 24</span>
                </div>
                <div className="ml-4 text-sm text-gray-600">
                  <span>Travel</span>
                  <span className="mx-2">|</span>
                  <FaComment className="inline mr-1" /> 2
                  <span className="mx-2">|</span>
                  <FaEye className="inline mr-1" /> 5
                </div>
              </div>
              <h2 className="text-xl font-bold mb-2">Egypt stuck more than 150 tourists from the Netherlands</h2>
              <p className="text-gray-600 text-sm">The price of tickets for low-cost airlines for a specific route has a much larger spread...</p>
            </div>
          </div>
        </Link>

        {/* Third Blog */}
        <Link to="/blog" className="block">
          <div className="bg-white shadow-md pb-8 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img src={blog3} alt="Article Image" className="w-full h-48 object-cover hover:opacity-75" />
            <div className="p-4">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-400 text-white rounded-full px-4 py-2 text-center">
                  <span className="block text-sm">22</span>
                  <span className="block text-xs">July, 24</span>
                </div>
                <div className="ml-4 text-sm text-gray-600">
                  <span>News</span>
                  <span className="mx-2">|</span>
                  <FaComment className="inline mr-1" /> 3
                  <span className="mx-2">|</span>
                  <FaEye className="inline mr-1" /> 7
                </div>
              </div>
              <h2 className="text-xl font-bold mb-2">New regulations in airport security</h2>
              <p className="text-gray-600 text-sm">With new security regulations coming into play, travelers must be aware of the changes...</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
