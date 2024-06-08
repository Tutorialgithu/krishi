import React, { useState } from 'react';
import TaskStatisticsCard from './TaskStatisticsCard';
import TodayAbsentStatistics from './TodayAbsentStatistics';

const Statistics = () => {
  const [statistics, setStatistics] = useState([
    { title: 'Today Leave', value: '4 / 65', progress: '6.15%' },
    { title: 'Pending Invoice', value: '15 / 92', progress: '16.92%' },
    { title: 'Completed Projects', value: '85 / 112', progress: '75.89%' },
    { title: 'Open Tickets', value: '190 / 212', progress: '89.62%' },
    { title: 'Closed Tickets', value: '22 / 212', progress: '10.38%' },
  ]);

  const renderStatistics = () => {
    return statistics.map((stat, index) => (
      <div key={index} className="w-full flex-row border-2 bg-white border-gray-500 hover:border-black pt-2 pb-1 pr-2 pl-3 mb-2 mt-2 rounded-md">
        <div className="flex justify-between mb-3">
          <div>
            <span className="block text-black font-semibold">{stat.title}</span>
          </div>
          <div>
            <span className="block text-black font-semibold">{stat.value}</span>
          </div>
        </div>
        <h3 className="mb-2 font-semibold">{stat.progress}</h3>
        <div className="h-1 bg-gray-200 rounded mb-1">
          <div className="h-full mb-1 bg-primary rounded" style={{ width: stat.progress, backgroundColor: '#32CD30' }}></div>
        </div>
      </div>
    ));
  };

  return (
    <div className="bg-gradient-to-r from-red-500 to-orange-500 p-8 font-sans rounded-lg border-2 mx-2 border-gray-500">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white flex-row border-2 border-gray-500 hover:border-black gap rounded-lg shadow-md p-4">
            <p className="text-xl text-start font-semibold mb-4 text-gray-800">Statistics</p>
            {renderStatistics()}
          </div>

          <TaskStatisticsCard />
          <TodayAbsentStatistics />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
