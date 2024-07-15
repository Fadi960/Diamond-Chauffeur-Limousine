import React from 'react';
import logo1 from "../../logo/partner-ollis.png";
import logo2 from "../../logo/partner-arch.png";
import logo3 from "../../logo/partner-design.png";
import logo4 from "../../logo/partner-luxury.png";
import logo5 from "../../logo/partner-masala.png";
import logo6 from "../../logo/partner-norstyle.png";

const Partner = () => {
  // Array of partner objects with name and logo properties
  const partners = [
    { name: 'Ollis', logo: logo1 },
    { name: 'Luxury Queen', logo: logo2 },
    { name: 'Norstyle', logo: logo3 },
    { name: 'Archi', logo: logo4 },
    { name: 'Masala', logo: logo5 },
    { name: 'Design Studio', logo: logo6 },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
        {/* Partner logos */}
        <div className="flex flex-wrap justify-center gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <img className="h-20" src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
