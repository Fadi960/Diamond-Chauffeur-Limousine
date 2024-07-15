import React from 'react';
import carImage from '../../images/car-03-card.jpg'; 
import { FaFilePdf, FaFileImage } from 'react-icons/fa';

const Document = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-xl font-bold mb-4">General Information</h2>
        <div className="flex flex-wrap">
          {/* Left column with image */}
          <div className="w-full md:w-1/2 px-4 mb-4 flex items-center">
            <div className="mr-4">
              <img src={carImage} alt="Car" className="w-[250px] h-[150px] rounded-full object-cover" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Car Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-sm font-medium">Brand</div>
                <div className="text-sm">Land Rover</div>
                <div className="text-sm font-medium">Model</div>
                <div className="text-sm">Range Rover</div>
                <div className="text-sm font-medium">Year</div>
                <div className="text-sm">2017</div>
                <div className="text-sm font-medium">Fuel Type</div>
                <div className="text-sm">Petrol</div>
                <div className="text-sm font-medium">Status</div>
                <div className="text-sm">Published</div>
              </div>
            </div>
          </div>
          {/* Right column */}
          <div className="w-full md:w-1/2 px-4 mb-4">
            <h3 className="text-lg font-semibold mb-2">Documents</h3>
            <ul className="list-disc list-inside">
              <li className="flex items-center justify-between py-2 border-b border-gray-200">
                <div className="flex items-center">
                  <FaFilePdf className="text-xl mr-2" />
                  <span className="text-lg">Reservation agreement</span>
                </div>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm py-1 px-2 rounded">
                  View
                </button>
              </li>
              <li className="flex items-center justify-between py-2 border-b border-gray-200">
                <div className="flex items-center">
                  <FaFilePdf className="text-xl mr-2" />
                  <span className="text-lg">Travel insurance</span>
                </div>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm py-1 px-2 rounded">
                  View
                </button>
              </li>
              <li className="flex items-center justify-between py-2 border-b border-gray-200">
                <div className="flex items-center">
                  <FaFileImage className="text-xl mr-2" />
                  <span className="text-lg">Driver's license</span>
                </div>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm py-1 px-2 rounded">
                  View
                </button>
              </li>
              <li className="flex items-center justify-between py-2">
                <div className="flex items-center">
                  <FaFilePdf className="text-xl mr-2" />
                  <span className="text-lg">Car driving instructions</span>
                </div>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm py-1 px-2 rounded">
                  View
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Document;
