import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditCar = ({ car, onSuccess, onCancel }) => {
    const [formData, setFormData] = useState({
        carId: '',
        brand: '',
        model: '',
        year: '',
        fuelType: '',
        status: ''
    });
    const [error, setError] = useState('');

    useEffect(() => {
        if (car) {
            setFormData({
                carId: car.carId,
                brand: car.brand,
                model: car.model,
                year: car.year,
                fuelType: car.fuelType,
                status: car.status
            });
        }
    }, [car]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.patch("http://localhost:3000/car/updateCar", formData);
            onSuccess(response.data.response.response); // Notify parent component of successful update
        } catch (error) {
            setError('Failed to update car details. Please try again.');
            console.error('Update error:', error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="w-1/2 bg-white p-4 rounded">
                <h3 className="text-xl font-bold mb-4">Edit Car</h3>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleFormSubmit}>
                <div className="mb-2">
                        <label className="block text-gray-700">Car Id</label>
                        <input
                            type="text"
                            name="car Id"
                            value={formData.carId}
                            onChange={handleInputChange}
                            className="border rounded p-2 w-full"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700">Brand</label>
                        <input
                            type="text"
                            name="brand"
                            value={formData.brand}
                            onChange={handleInputChange}
                            className="border rounded p-2 w-full"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700">Model</label>
                        <input
                            type="text"
                            name="model"
                            value={formData.model}
                            onChange={handleInputChange}
                            className="border rounded p-2 w-full"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700">Year</label>
                        <input
                            type="text"
                            name="year"
                            value={formData.year}
                            onChange={handleInputChange}
                            className="border rounded p-2 w-full"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700">Fuel Type</label>
                        <input
                            type="text"
                            name="fuelType"
                            value={formData.fuelType}
                            onChange={handleInputChange}
                            className="border rounded p-2 w-full"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700">Status</label>
                        <input
                            type="text"
                            name="status"
                            value={formData.status}
                            onChange={handleInputChange}
                            className="border rounded p-2 w-full"
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded mr-2"
                            onClick={onCancel}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditCar;
