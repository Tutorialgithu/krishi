import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";


function Card1() {
  // Define state variables and their setters using useState
  const [projectCount, setProjectCount] = useState(44);
  const [clientCount, setClientCount] = useState(17);
  const [taskCount, setTaskCount] = useState(37);
  const [employeeCount, setEmployeeCount] = useState(218);

  return (
    <div className='w-full flex-row'>
      <div className="flex items-center">
        <h1 className='px-5 font-bold text-2xl py-4'>Hello Admin!</h1>
        
        <FiMenu className="ml-auto" />
      </div>
      <p className='px-5 mb-6 font-bold text-lg'>Dashboard </p>
      <div className="grid mb-5 grid-cols-1 h-[20%] gap-2 px-2 mt-2 sm:grid-cols-4 sm:px-8">
        {/* Project Card */}
        <div className="flex items-center mr-2 bg-white border-black hover:border-gray-500 rounded-md shadow border-2 py-2">
          <div className="p-4 m-3 rounded-md bg-green-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
          </div>
          <div className="px-4 content text-gray-700">
            <h3 className="text-sm tracking-wider">Project</h3>
            <p className="text-3xl">{projectCount}</p>
          </div>
        </div>
        {/* Total Client Card */}
        <div className="flex items-center mr-2 bg-white border-2 border-black hover:border-gray-500 rounded-md overflow-hidden shadow">
          <div className="p-4 m-3 rounded-md bg-green-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
            </svg>
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Total client</h3>
            <p className="text-3xl">{clientCount}</p>
          </div>
        </div>
        {/* Tasks Card */}
        <div className="flex items-center mr-2 bg-white border-2 border-black hover:border-gray-500 rounded-md overflow-hidden shadow">
          <div className="p-4 m-3 rounded-md bg-green-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
            </svg>
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Tasks</h3>
            <p className="text-3xl">{taskCount}</p>
          </div>
        </div>
        {/* Employee Card */}
        <div className="flex items-center bg-white border-black border-2 hover:border-gray-500 rounded-md overflow-hidden shadow">
          <div className="p-4 m-3 rounded-md bg-green-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
            </svg>
          </div>
          <div className="px-4 m-3 text-gray-700">
            <h3 className="text-sm tracking-wider">Employee</h3>
            <p className="text-3xl">{employeeCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
