import React from 'react';

const Reservation = ({ vehicle, model, start, end, status }) => {
  return (
    <div className="flex flex-col border rounded-md p-4">
      <div className="flex flex-col gap-2">
        <div className="text-lg font-bold">{vehicle}</div>
        <div className="text-sm">{model}</div>
      </div>
      <div className="flex flex-row gap-2 justify-between">
        <div>
          <span className="text-gray-500">Start:</span> {start}
        </div>
        <div>
          <span className="text-gray-500">End:</span> {end}
        </div>
      </div>
      <div className={`rounded-md px-4 py-2 text-white ${status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}>
        {status}
      </div>
    </div>
  );
};

export default Reservation;
