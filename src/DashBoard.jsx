import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col lg:flex-row p-4 lg:p-10">
      {/* Left Component */}
      <div className="hidden lg:flex lg:w-1/2">
        {/* Keep left half empty */}
      </div>

      {/* Right Components */}
      <div className="flex flex-col lg:w-1/2 space-y-6">
        {/* Top Right Component (Tabs and About Section) */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg space-y-4">
          <div className="flex space-x-6 text-white">
            <button className="py-2 px-4 bg-black rounded-lg">About Me</button>
            <button className="py-2 px-4">Experiences</button>
            <button className="py-2 px-4">Recommended</button>
          </div>
          <p className="text-gray-400 text-sm overflow-auto h-40">
            Hello! I'm Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
            {/* Add more content as needed */}
          </p>
        </div>

        {/* Bottom Right Component (Gallery Section) */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg space-y-4">
          <div className="flex justify-between items-center text-white">
            <h3 className="text-lg">Gallery</h3>
            <button className="py-2 px-4 bg-gray-700 rounded-lg text-sm">+ Add Image</button>
          </div>
          <div className="flex space-x-4 overflow-x-auto">
            <div className="w-32 h-32 bg-gray-600 rounded-lg flex-shrink-0"></div>
            <div className="w-32 h-32 bg-gray-600 rounded-lg flex-shrink-0"></div>
            <div className="w-32 h-32 bg-gray-600 rounded-lg flex-shrink-0"></div>
            {/* Add more images as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
