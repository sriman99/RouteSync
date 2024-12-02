import React from 'react';

const Sidebar = () => (
  <div className="bg-gray-100 p-4 rounded-lg shadow-md space-y-4">
    <ul className="space-y-2">
      <li><a href="/admin" className="block text-gray-700 hover:text-blue-500">Dashboard</a></li>
      <li><a href="/profile" className="block text-gray-700 hover:text-blue-500">Profile Settings</a></li>
      <li><a href="/routes" className="block text-gray-700 hover:text-blue-500">Manage Routes</a></li>
    </ul>
  </div>
);

export default Sidebar;
