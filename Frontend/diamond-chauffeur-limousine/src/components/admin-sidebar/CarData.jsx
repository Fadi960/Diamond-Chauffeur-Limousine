import React from 'react';
import CarTable from './CarTable';

// Sample car data
const carData = [
  { carId: 1, brand: 'Volkswagen', model: 'Golf TSI', year: 2017, fuelType: 'automatic', status: 'Published' },
  { carId: 2, brand: 'Mercedes', model: 'AMG GT', year: 2019, fuelType: 'automatic', status: 'Inactive' },
  { carId: 3, brand: 'Cadillac', model: 'Limousine', year: 2018, fuelType: 'automatic', status: 'Published' },
  { carId: 4, brand: 'Nissan', model: 'Altima', year: 2020, fuelType: 'automatic', status: 'Published' },
  { carId: 5, brand: 'Subaru', model: 'Outback', year: 2019, fuelType: 'automatic', status: 'Published' },
  { carId: 6, brand: 'Volkswagen', model: 'Golf TSI', year: 2017, fuelType: 'automatic', status: 'Scheduled' },
  { carId: 7, brand: 'Mercedes', model: 'AMG GT', year: 2019, fuelType: 'automatic', status: 'Inactive' },
  { carId: 8, brand: 'Toyota', model: '4Runner', year: 2018, fuelType: 'automatic', status: 'Scheduled' },
  { carId: 9, brand: 'Land Rover', model: 'Range Rover', year: 2020, fuelType: 'automatic', status: 'Published' },
  { carId: 10, brand: 'Subaru', model: 'Outback', year: 2019, fuelType: 'automatic', status: 'Published' },
  { carId: 11, brand: 'Mercedes', model: 'BENZ', year: 2019, fuelType: 'automatic', status: 'Published' },
];

const Data = () => {
  // Handler for editing a car
  const handleEdit = (car) => {
    alert(`Edit ${car.brand} ${car.model}`);
  };

  // Handler for deleting a car
  const handleDelete = (car) => {
    alert(`Delete ${car.brand} ${car.model}`);
    // Assuming there's a way to remove the car visually from the table
    // Here i use vanilla JavaScript to demonstrate removing a DOM element
    document.getElementById(`car_${car.carId}`).remove();
  };

  return (
    <div className="container mx-auto p-4">
      <CarTable cars={carData} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Data;
