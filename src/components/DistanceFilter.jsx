import { useState } from 'react';

const distanceOptions = [5, 10, 25, 50, 100];

export default function DistanceFilter({ onFilterChange }) {
  const [distance, setDistance] = useState(25);

  const handleChange = (e) => {
    const value = Number(e.target.value);
    setDistance(value);
    onFilterChange(value);
  };

  return (
    <div className="flex items-center space-x-4">
      <label htmlFor="distance" className="text-gray-700 font-medium">Distance:</label>
      <select
        id="distance"
        value={distance}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {distanceOptions.map(option => (
          <option key={option} value={option}>{option} km</option>
        ))}
      </select>
    </div>
  );
}