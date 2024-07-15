import React from 'react';

const Information = () => {
  return (
    <div className="container mx-auto p-4 flex flex-wrap gap-4">
      {/* General Information */}
      <div className="bg-white rounded-lg shadow-lg p-4 flex-1">
        <h2 className="text-xl font-bold mb-4">General Information</h2>
        <div className="mb-2"><span className="font-semibold">Reservation ID: </span>#2179</div>
        <div className="mb-2"><span className="font-semibold">Customer: </span>Dylan Meringue</div>
        <div className="mb-2"><span className="font-semibold">Car: </span>Land Rover - Range Rover 2017</div>
        <div className="mb-2"><span className="font-semibold">Pick-Up: </span>Apr 9, 2023 - 13:00pm</div>
        <div className="mb-2"><span className="font-semibold">Drop-Off: </span>Apr 12, 2023 - 14:00pm</div>
        <div className="mb-2"><span className="font-semibold">Price: </span>$256,32</div>
      </div>

      {/* Customer Address */}
      <div className="bg-white rounded-lg shadow-lg p-4 flex-1">
        <h2 className="text-xl font-bold mb-4">Customer Address</h2>
        <div className="mb-2"><span className="font-semibold">Street: </span>3542 Bryan Avenue</div>
        <div className="mb-2"><span className="font-semibold">City: </span>Eagan</div>
        <div className="mb-2"><span className="font-semibold">State: </span>Minnesota</div>
        <div className="mb-2"><span className="font-semibold">Phone Number: </span>+1 651-406-5337</div>
        <div className="mb-2"><span className="font-semibold">Zip code: </span>55121</div>
        <div className="mb-2"><span className="font-semibold">Country: </span>United States</div>
      </div>

      {/* Billing Address */}
      <div className="bg-white rounded-lg shadow-lg p-4 flex-1">
        <h2 className="text-xl font-bold mb-4">Billing Address</h2>
        <div className="mb-2"><span className="font-semibold">Street: </span>512 Lowes Alley</div>
        <div className="mb-2"><span className="font-semibold">City: </span>Rio Grande</div>
        <div className="mb-2"><span className="font-semibold">State: </span>Ohio</div>
        <div className="mb-2"><span className="font-semibold">Phone Number: </span>+1 740-245-8779</div>
        <div className="mb-2"><span className="font-semibold">Zip code: </span>45674</div>
        <div className="mb-2"><span className="font-semibold">Country: </span>United States</div>
      </div>
    </div>
  );
};

export default Information;
