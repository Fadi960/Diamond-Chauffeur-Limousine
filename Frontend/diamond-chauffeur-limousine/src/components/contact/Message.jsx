import React from 'react';

const Message = () => {
  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="flex items-center justify-center text-3xl font-bold text-gray-900 mb-6">Send Message</h1>
        <form className="space-y-6">
          {/* Name input */}
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          {/* Email input */}
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          {/* Message textarea */}
          <div>
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              rows="5"
            ></textarea>
          </div>
          {/* Submit button */}
          <div>
            <button
              type="submit"
              className="w-full p-3 bg-yellow-600 text-white font-medium rounded-md shadow hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Message;
