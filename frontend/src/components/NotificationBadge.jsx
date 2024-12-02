import React from 'react';

const NotificationBadge = ({ message }) => (
  <div className="bg-blue-500 text-white p-2 rounded-md shadow-md">
    {message}
  </div>
);

export default NotificationBadge;
