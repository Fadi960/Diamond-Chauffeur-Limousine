import React from 'react';
import luxury from "../../images/hero-limmo.png"

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Container for the hero section */}
      <div className="w-full mx-2">
        {/* Main content section */}
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              {/* Hero title */}
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Luxury Cars</span>{' '}
                <span className="block text-yellow-600 xl:inline">for Maximum Satisfaction</span>
              </h1>
              {/* Hero description */}
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Nullam sed ultricies erat, nec euismod metus. Morbi porttitor sapien vitae leo scelerisque. Nullam sed ultricies erat.
              </p>
              {/* Hero button */}
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 md:py-4 md:text-lg md:px-10"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* Hero image section */}
      <div className="flex items-center justify-center lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-full w-full object-cover lg:h-auto"
          src={luxury}
          alt="Luxury Car"
        />
      </div>
    </div>
  );
};

export default Hero;
