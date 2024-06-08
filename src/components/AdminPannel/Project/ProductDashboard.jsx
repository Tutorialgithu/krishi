import React, { useState } from 'react';
import Sidebar from '../Dash/Sidebar';
import AllProjects from './AllProjects';

function ProductDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-300">
      <div className={`h-screen ${isSidebarOpen ? 'block' : 'hidden'} md:block w-full md:w-1/6 fixed md:relative z-10 bg-white`}>
        <Sidebar />
      </div>
      <div className="flex flex-col w-full md:w-5/6 ml-auto border-2 rounded-md border-black overflow-y-scroll">
        <div className="p-4 md:hidden">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
          </button>
        </div>
        <AllProjects />
      </div>
    </div>
  );
}

export default ProductDashboard;
