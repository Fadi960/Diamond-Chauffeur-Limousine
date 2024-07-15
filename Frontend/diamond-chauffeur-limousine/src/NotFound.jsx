import React from 'react';
import image from './images/notfound.jpg';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <img src={image} alt="404 Error" className="w-[600px] md:w-[800px] h-auto mb-4" />
      <h1 className="text-4xl font-bold text-gray-800">Oops! Page Not Found</h1>
      <p className="mt-4 text-gray-500">
        The page you are looking for was moved, removed, renamed or might never existed.
      </p>
      <a
        href="/"
        className="mt-6 px-4 py-2 text-white bg-yellow-600  rounded-md hover:bg-yellow-500"
      >
        Home Page
      </a>
    </div>
  );
};

export default NotFound;
