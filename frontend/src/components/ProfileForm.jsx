import React from 'react';

const ProfileForm = () => (
  <form className="space-y-4">
    <div>
      <label className="block text-gray-700 mb-2">Name</label>
      <input type="text" className="w-full border-gray-300 rounded-md shadow-sm p-2" placeholder="Enter your name" />
    </div>
    <div>
      <label className="block text-gray-700 mb-2">Email</label>
      <input type="email" className="w-full border-gray-300 rounded-md shadow-sm p-2" placeholder="Enter your email" />
    </div>
    <div>
      <label className="block text-gray-700 mb-2">Carpool Preferences</label>
      <textarea className="w-full border-gray-300 rounded-md shadow-sm p-2" placeholder="Enter your preferences"></textarea>
    </div>
    <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">Save Changes</button>
  </form>
);

export default ProfileForm;
