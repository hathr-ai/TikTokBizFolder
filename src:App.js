import React, { useState, useEffect } from 'react';
import { MapPin, Coffee, Beer, Utensils } from 'lucide-react';

const mockBusinessData = {
  restaurants: [...],
  bars: [...],
  coffeeShops: [...]
};

function App() {
  const [city, setCity] = useState('San Francisco');
  const [businessType, setBusinessType] = useState('restaurants');
  const [businesses, setBusinesses] = useState(mockBusinessData.restaurants);

  const cities = ['San Francisco', 'New York', 'Los Angeles', 'Chicago', 'Austin'];

  useEffect(() => {
    setBusinesses(mockBusinessData[businessType]);
  }, [businessType]);

  const businessIcons = {
    restaurants: <Utensils className="mr-2 h-4 w-4" />,
    bars: <Beer className="mr-2 h-4 w-4" />,
    coffeeShops: <Coffee className="mr-2 h-4 w-4" />
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 flex justify-between items-center">
          <h2 className="text-xl font-bold flex items-center">
            <MapPin className="mr-2 h-6 w-6" />
            TikTok Business Rankings - {city}
          </h2>
          <select value={city} onChange={(e) => setCity(e.target.value)} className="px-3 py-2 border rounded-md">
            {cities.map((cityName) => (
              <option key={cityName} value={cityName}>
                {cityName}
              </option>
            ))}
          </select>
        </div>
        <div className="px-4 py-2">
          <div className="flex border-b mb-4">
            {['restaurants', 'bars', 'coffeeShops'].map((type) => (
              <button
                key={type}
                onClick={() => setBusinessType(type)}
                className={`flex items-center px-4 py-2 ${
                  businessType === type ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {businessIcons[type]}
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Rank</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">TikTok Views</th>
                <th className="px-4 py-2 text-left">Rating</th>
                <th className="px-4 py-2 text-left">Address</th>
              </tr>
            </thead>
            <tbody>
              {businesses.map((business, index) => (
                <tr key={business.id} className="border-b">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{business.name}</td>
                  <td className="px-4 py-2">{business.tiktokViews.toLocaleString()}</td>
                  <td className="px-4 py-2">{business.rating}</td>
                  <td className="px-4 py-2">{business.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
