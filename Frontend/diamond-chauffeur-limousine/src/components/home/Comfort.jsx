import React from 'react';
import comfort from "../../images/comfort-limmo-large.png";

const Comfort = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          {/* Section description */}
          <p className="text-xl text-gray-600 mb-8 text-center">
            We value the time and quality of travel for <br /> each of our clients.
          </p>
          {/* Main heading */}
          <h1 className="text-7xl font-bold text-yellow-600 mb-4 text-center">Incredible</h1>
          {/* Subheading */}
          <h2 className="text-5xl font-bold text-gray-800 mb-4 text-center">Comfort</h2>
          {/* Image */}
          <div className="w-full">
            <img
              src={comfort}
              alt="Car comfort"
              className="w-screen h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comfort;
