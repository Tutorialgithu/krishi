import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleDot} from '@fortawesome/free-solid-svg-icons';

const TaskStatisticsCard = () => {
  return (
    <div className="card bg-white flex-fill border-2 border-gray-500 hover:border-black rounded-lg shadow-md p-4 mb-6">
      <div className="card-body">
        <h4 className=" text-xl font-semibold text-gray-800 mb-5">Task Statistics</h4>

        <div className="grid grid-cols-2 gap-4">
          {/* Total Tasks */}
          <div className="text-center">
            <div className="bg-gray-100 rounded-lg border-2 border-gray-500 hover:border-black shadow-md px-4 py-2">
              <p className="text-sm font-medium text-gray-600 mb-1">Total Tasks</p>
              <h3 className="text-xl font-semibold">385</h3>
            </div>
          </div>

          {/* Overdue Tasks */}
          <div className="text-center">
            <div className="bg-gray-100 border-2 border-gray-500 rounded-lg hover:border-black shadow-md px-4 py-2">
              <p className="text-sm font-medium text-gray-600 mb-1">Overdue Task</p>
              <h3 className="text-xl font-semibold">19</h3>
            </div>
          </div>
        </div>

        {/* Progress Bars */}
        <div className="mt-6 px-2">
          <div className="flex justify-between h-7 mb-3">
            
            <div className="w-5/12 bg-green-500 text-sm text-white py-1 rounded-l-full text-center">45.1%</div>
            <div className="w-3/12 bg-yellow-500 text-sm text-white py-1 text-center">26.4%</div>
            <div className="w-2/12 bg-red-900 text-sm text-white py-1 text-center">10.4%</div>
            <div className="w-3/12 bg-red-500 text-sm text-white py-1  text-center">14.7%</div>
            <div className="w-2/12 bg-blue-500 text-sm text-white py-1 rounded-r-full text-center">3.4%</div>
            </div>

        </div>

        {/* Task Details */}
        <div className="mx-2 font-medium text-gray-700">
            <div className='border-2 border-gray-500 hover:border-black rounded-md shadow-md p-2 mb-1' > <TaskDetail label="Completed Tasks" value="166" color="green-500" /></div>
            <div className='border-2 border-gray-500 hover:border-black rounded-md shadow-md p-2 mb-1' > <TaskDetail label="In Progress Tasks" value="97" color="yellow-500" /></div>
            <div className='border-2 border-gray-500 hover:border-black rounded-md shadow-md p-2 mb-1' > <TaskDetail label="On Hold Tasks" value="38" color="red-900" /></div>
            <div className='border-2 border-gray-500 hover:border-black rounded-md shadow-md p-2 mb-1' > <TaskDetail label="Pending Tasks" value="54" color="red-500" /></div>
            <div className='border-2 border-gray-500 hover:border-black rounded-md shadow-md p-2 mb-1' > <TaskDetail label="Review Tasks" value="12" color="blue-500" /></div>
        </div>
      </div>
    </div>
  );
};

// Component for rendering task details with icons
const TaskDetail = ({ label, value, color }) => (
  <div className="flex justify-between">
    <FontAwesomeIcon icon={faCircleDot} className={`text-${color} mr-4`} />
    <p className="flex-1">{label}</p>
    <p className="text-right">{value}</p>
  </div>
);

export default TaskStatisticsCard;
