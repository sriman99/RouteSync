import React from 'react';

const RouteCard = ({ route }) => (
  <div className="bg-white border rounded-lg p-4 shadow-md">
    <h3 className="text-lg font-semibold">{route.origin} to {route.destination}</h3>
    <p className="text-gray-700">Available slots: {route.availableSlots}</p>
    <p className="text-gray-500">Vehicle: {route.vehicle}</p>
    <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Join Route</button>
  </div>
);

export default RouteCard;
