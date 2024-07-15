import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from "../../images/slide-1.jpg";
import slide2 from "../../images/slide-2.jpg";
import slide3 from "../../images/slide-3.jpg";
import slide4 from "../../images/slide-4.jpg";

const images = [
  { src: slide1, text: "Design with Technology", text2: "a limousine for everyone" },
  { src: slide2, text: "Experience Comfort", text2: "VIP Transfers for your success in business" },
  { src: slide3, text: "Ride with Style", text2: "VIP Transfers for your success in business" },
  { src: slide4, text: "Book Now", text2: "VIP Transfers for your success in business" },
];

const Carousel = () => {
  const settings = {
    arrows: false,
    dots: true,
    dotsClass: "slick-dots top-10",
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1648,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  // Calculate dynamic height for carousel container
  const getCarouselHeight = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1648) {
      return "h-96"; // Default large screen height
    } else if (screenWidth >= 1024) {
      return "h-1/2"; // Medium to large screen height
    } else if (screenWidth >= 600) {
      return "h-1/2"; // Adjusted height for medium screens
    } else if (screenWidth >= 550) {
      return "h-1/2"; // Adjusted height for medium screens
    } else if (screenWidth >= 500) {
      return "h-1/3"; // Adjusted height for small screens
    } else if (screenWidth >= 450) {
      return "h-1/4"; // Adjusted height for small screens
    } else if (screenWidth >= 400) {
      return "h-1/4"; // Adjusted height for small screens
    } else if (screenWidth >= 375) {
      return "h-1/4"; // Height for smaller screens like mobile devices
    } else {
      return "h-1/6"; // Fallback height for very small screens
    }
  };

  return (
    <div className={`carousel-container relative mb-0 w-full ${getCarouselHeight()}`}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img src={image.src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-center items-center px-6 sm:px-12 bg-black bg-opacity-50">
              <h1 className="text-yellow-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4">{image.text}</h1>
              <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">{image.text2}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
