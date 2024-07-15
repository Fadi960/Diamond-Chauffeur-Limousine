import React from 'react';

const Reservation = () => {
  // Sample data for reservations
  const data = [
    { title: 'Total Reservations', count: '10', description: 'Total number of bookings to date.', bgColor: 'bg-blue-500' },
    { title: 'New Reservations', count: '5', description: 'New incoming unchecked reservations.', bgColor: 'bg-blue-400' },
    { title: 'Canceled Reservations', count: '1', description: 'Bookings canceled by users.', bgColor: 'bg-green-500' },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {data.map((item, index) => (
        <div key={index} className="flex-1 p-4 rounded-lg shadow-lg bg-white">
          {/* Title bar with dynamic background color */}
          <div className={`text-white text-center p-2 rounded-t-lg ${item.bgColor}`}>
            {item.title}
          </div>
          {/* Content section */}
          <div className="text-center my-4">
            <div className="text-4xl font-bold">{item.count}</div>
            <div className="text-gray-500">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reservation;
