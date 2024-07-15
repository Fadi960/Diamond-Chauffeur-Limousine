import React from 'react';

const Price = () => {
  // Sample data for prices and dates
  const prices = [
    { season: 'Season 1', start: 'Apr 1, 2024', end: 'Apr 30, 2024', price: '$1000' },
    { season: 'Season 2', start: 'May 1, 2024', end: 'May 30, 2024', price: '$1200' },
    { season: 'Season 3', start: 'Jun 1, 2024', end: 'Aug 30, 2024', price: '$1500' },
    { season: 'Season 4', start: 'Jul 1, 2024', end: 'Oct 30, 2024', price: '$2000' },
    { season: 'Season 5', start: 'Aug 1, 2024', end: 'Nov 30, 2024', price: '$1000' },
    { season: 'Season 6', start: 'Sep 1, 2024', end: 'Dec 30, 2024', price: '$1000' },
    { season: 'Season 7', start: 'Oct 1, 2024', end: 'Jan 30, 2025', price: '$1000' },
  ];

  const dates = [
    { day: 1, type: 'default' },
    { day: 2, type: 'default' },
    { day: 3, type: 'default' },
    { day: 4, type: 'highlight' },
    { day: 5, type: 'highlight' },
    { day: 6, type: 'highlight' },
    { day: 7, type: 'highlight' },
    { day: 8, type: 'default' },
    { day: 9, type: 'default' },
    { day: 10, type: 'default' },
    { day: 11, type: 'default' },
    { day: 12, type: 'default' },
    { day: 13, type: 'default' },
    { day: 14, type: 'default' },
    { day: 15, type: 'default' },
    { day: 16, type: 'highlight' },
    { day: 17, type: 'default' },
    { day: 18, type: 'default' },
    { day: 19, type: 'highlight' },
    { day: 20, type: 'default' },
    { day: 21, type: 'default' },
    { day: 22, type: 'default' },
    { day: 23, type: 'default' },
    { day: 24, type: 'highlight' },
    { day: 25, type: 'highlight' },
    { day: 26, type: 'default' },
    { day: 27, type: 'default' },
    { day: 28, type: 'default' },
    { day: 29, type: 'default' },
    { day: 30, type: 'default' },
    { day: 31, type: 'default' },
  ];

  return (
    <div className="price container mx-auto p-4">
      <div className="flex flex-wrap">
        {/* Prices section */}
        <div className="prices w-full md:w-1/2 mb-8 md:mb-0 pr-4">
          <h2 className="text-xl font-bold mb-4">Prices</h2>
          {/* Table header */}
          <div className="table-header flex border-b-2">
            <div className="table-cell flex-1 font-semibold">SEASON</div>
            <div className="table-cell flex-1 font-semibold">START</div>
            <div className="table-cell flex-1 font-semibold">END</div>
            <div className="table-cell flex-1 font-semibold">PRICE</div>
          </div>
          {/* Render each price entry */}
          {prices.map((price, index) => (
            <div className="flex border-b py-2" key={index}>
              <div className="table-cell flex-1">{price.season}</div>
              <div className="table-cell flex-1">{price.start}</div>
              <div className="table-cell flex-1">{price.end}</div>
              <div className="table-cell flex-1">{price.price}</div>
            </div>
          ))}
        </div>

        {/* Project Time section */}
        <div className="project-time flex flex-col justify-center w-full md:w-1/2 pl-4">
          <h2 className="text-xl font-bold mb-4">Project Time</h2>
          <div className="month font-semibold mb-2">May 2024</div>
          {/* Table header */}
          <div className="table-header flex justify-center items-center border-b-2 mb-2 ">
            <div className="table-cell flex-1 font-semibold">MON</div>
            <div className="table-cell flex-1 font-semibold">TUE</div>
            <div className="table-cell flex-1 font-semibold">WED</div>
            <div className="table-cell flex-1 font-semibold">THU</div>
            <div className="table-cell flex-1 font-semibold">FRI</div>
            <div className="table-cell flex-1 font-semibold">SAT</div>
            <div className="table-cell flex-1 font-semibold">SUN</div>
          </div>
          {/* Grid for dates */}
          <div className="dates grid grid-cols-7 gap-2">
            {dates.map((date, index) => (
              <div
                className={`table-cell p-2 border text-center justify-center items-center ${date.type === 'highlight' ? 'bg-yellow-200' : 'bg-white'}`}
                key={index}
              >
                {date.day}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
