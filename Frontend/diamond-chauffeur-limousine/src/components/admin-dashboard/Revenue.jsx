import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Revenue = () => {
  const [data, setData] = useState([
    { date: 'Jul 9', revenue: 1000 },
    { date: 'Jul 10', revenue: 1200 },
    { date: 'Jul 11', revenue: 1100 },
    { date: 'Jul 12', revenue: 1300 },
    { date: 'Jul 13', revenue: 1400 },
    { date: 'Jul 14', revenue: 1500 },
    { date: 'Jul 15', revenue: 1600 },
    { date: 'Jul 16', revenue: 1700 },
    { date: 'Jul 17', revenue: 1800 },
    { date: 'Jul 18', revenue: 1900 },
    { date: 'Jul 19', revenue: 2000 },
    { date: 'Jul 20', revenue: 2100 },
    { date: 'Jul 21', revenue: 2200 },
    { date: 'Jul 22', revenue: 2300 },
  ]);

  useEffect(() => {
    // You can fetch data from your API or backend here
    // setData(fetchedData);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4">Revenue</h2>
      <div className="flex justify-between items-center w-full mb-4">
        <select className="border border-gray-300 rounded-md px-2 py-1">
          <option value="monthly">Monthly</option>
          <option value="weekly">Weekly</option>
          <option value="daily">Daily</option>
        </select>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium">Total Revenue</h3>
          <span className="text-2xl font-bold text-blue-500">$7,367.56</span>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium">Orders</h3>
          <span className="text-2xl font-bold text-blue-500">27</span>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium">Avg. Order Value</h3>
          <span className="text-2xl font-bold text-blue-500">$272.87</span>
        </div>
      </div>
      <div className="mt-4 w-full flex justify-center">
        <LineChart width={800} height={400} data={data}>
          <Line type="monotone" dataKey="revenue" stroke="#ff0000" />
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};

export default Revenue;
