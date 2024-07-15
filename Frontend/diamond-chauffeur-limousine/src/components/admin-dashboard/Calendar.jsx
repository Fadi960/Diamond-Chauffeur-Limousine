import React, { useState } from 'react';

const Calendar = () => {
  const [month, setMonth] = useState(new Date().getMonth());

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const renderCalendar = () => {
    const year = new Date().getFullYear();
    const daysInMonth = getDaysInMonth(month, year);
    const firstDay = new Date(year, month, 1).getDay(); // 0 - Sunday, 6 - Saturday
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={i} className="w-10 h-10 bg-gray-200 rounded-md"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      let dayClassName = "w-10 h-10 bg-white rounded-md border border-gray-400 hover:bg-gray-100";
      
      // Add dark gray background for specific days in July
      if (month === 6 && [2, 4, 9].includes(i)) { // July is index 6, days are 1-indexed
        dayClassName += " bg-gray-700 ";
      }

      days.push(
        <div key={i} className={ `${dayClassName} flex justify-center items-center`}>

          {i}
        </div>
      );
    }

    return days;
  };

  const handleMonthChange = (e) => {
    const newMonth = parseInt(e.target.value);
    setMonth(newMonth);
  };

  return (
    <div className="w-full p-4 pt-6 pb-4 bg-white rounded-md shadow-md mx-auto">
      <h2 className="text-lg font-bold mb-4 text-center">Rental Calendar</h2>
      <div className="flex justify-between mb-4 mx-auto max-w-xl">
        <select
          value={month}
          onChange={handleMonthChange}
          className="bg-white border border-gray-200 rounded-md py-2 px-4 w-full"
        >
          {months.map((month, index) => (
            <option key={index} value={index}>
              {month}
            </option>
          ))}
        </select>
        <select className="bg-white border border-gray-200 rounded-md py-2 px-4">
          <option value="last3">Last 3 Month</option>
          <option value="last6">Last 6 Month</option>
          <option value="last9">Last 9 Month</option>
          <option value="last12">Last 12 Month</option>
          {/* Add more options for different time periods */}
        </select>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {renderCalendar()}
      </div>
    </div>
  );
};

export default Calendar;
