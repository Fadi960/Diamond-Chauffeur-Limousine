import React from 'react';

const CarInformation = () => {
    const data = [
        { title: 'Total Car', count: 11, description: 'Vehicles available for rental', bgColor: 'bg-blue-600' },
        { title: 'Reservation', count: 3, description: 'New incoming reservations', bgColor: 'bg-blue-400' },
        { title: 'Faulty Vehicle', count: 5, description: 'Vehicles in maintenance', bgColor: 'bg-green-500' },
    ];

    return (
        <div className="flex flex-wrap justify-center lg:justify-between">
            {data.map((item, index) => (
                <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:flex-1 mx-2 p-4 rounded-lg shadow-lg bg-white mb-4 lg:mb-0">
                    <div className={`text-white text-center p-2 rounded-t-lg ${item.bgColor}`}>
                        {item.title}
                    </div>
                    <div className="text-center my-4">
                        <div className="text-4xl font-bold">{item.count}</div>
                        <div className="text-gray-500">{item.description}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CarInformation;
