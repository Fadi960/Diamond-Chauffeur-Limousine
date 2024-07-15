import React from 'react';
import { FaRegComment, FaRegEye } from 'react-icons/fa';
import blog4 from '../../images/blog-04.jpg';

/**
 * Blog4 component displaying a blog post with image, metadata, and content.
 */
const Blog4 = () => {
  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <img
          className="w-full h-auto rounded-lg mb-6 hover:transform hover:scale-105 transition duration-300"
          src={blog4}
          alt="Blog post"
        />
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <div className="bg-yellow-400 text-white rounded-full px-4 py-2 text-center">
            <div className="font-normal">12</div>
            <div>May, 24</div>
          </div>
          <div className="flex items-center space-x-1 ml-2 mr-4">
            <span>Booking</span>
          </div>
          <div className="flex items-center space-x-1 mr-4">
            <FaRegComment className="text-yellow-600" />
            <span>1</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaRegEye className="text-yellow-600" />
            <span>1</span>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          European airports increase tax on foreign passengers
        </h2>
        <p className="text-gray-600">
          The price of tickets for low-cost airlines for a specific route has a much larger spread than that of regular airlines. It depends on the time to departure, demand and competition on the route. Unlike regular airlines, low-cost airlines rarely offer cheap tickets more than 3 months before departure. This is because canceling a flight for which tickets have been sold is much easier than canceling a flight for which 100 tickets have been sold, so they stimulate demand only ...
        </p>
      </div>
    </div>
  );
};

export default Blog4;
