import React, { useState } from 'react';

// Define constants for task labels
const OPEN_TASKS_LABEL = "open tasks";
const TASK_COMPLETED_LABEL = "task completed";

const ProjectCard = () => {
  const [projects, setProjects] = useState([
      {
        "id": 1,
        "name": "Digital Steria",
        "ot": 1,
        "tc": 9,
        "progress": 45,
        "action": "Edit"
      },
      {
        "id": 2,
        "name": "Stock Gurukul",
        "ot": 155,
        "tc": 6,
        "progress": 80,
        "action": "Edit"
      },
      {
        "id": 3,
        "name": "Vitota lifestyle",
        "ot": 14,
        "tc": 24,
        "progress": 50,
        "action": "Edit"
      },
      {
        "id": 4,
        "name": "HRM DS",
        "ot": 19,
        "tc": 19,
        "progress": 68,
        "action": "Edit"
      },
      {
        "id": 5,
        "name": "HRM in-house",
        "ot": 17,
        "tc": 91,
        "progress": 90,
        "action": "Edit"
      }
    ]
    
  );

  const handleActionChange = (e, projectId) => {
    const updatedProjects = projects.map(project =>
      project.id === projectId ? { ...project, action: e.target.value } : project
    );
    setProjects(updatedProjects);
  };

  return (
    <div className="w-1/3 md:w-1/2 sm:w-full mx-auto">
      <div className="bg-white border-2 border-gray-500 rounded-lg shadow-md mt-2 mb-2">
        {/* Header */}
        <div className="bg-gray-100 border-b-2 border-gray-300 flex items-center justify-between py-4 px-5 rounded-t-lg">
          <h3 className="text-xl font-bold text-gray-900">Projects</h3>
        </div>
        
        {/* Project List */}
        <div className="text-gray-600 justify-items-center overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className='font-bold text-md'>
                <th className="border-t border-gray-300 py-2 px-3 text-gray-900">Project Name</th>
                <th className="border-t border-gray-300 py-2 px-3 text-gray-700">Progress</th>
                <th className="border-t border-gray-300 py-2 px-3 text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {projects.map(project => (
                <tr className='font-semibold text-sm' key={project.id}>
                  <td className="border-t border-gray-300 py-2 px-3">{project.name} <br /> 
                    <span className='text-sm font-normal'>{project.ot} {OPEN_TASKS_LABEL}, {project.tc} {TASK_COMPLETED_LABEL}</span>
                  </td>
                  <td className="border-t border-gray-300 py-2 px-3">
                    <progress
                      value={project.progress}
                      max="100"
                      className="w-32 h-2.5 bg-gray-200"
                    />
                  </td>
                  <td className="border-t border-gray-300 py-2 px-3">
                    <select
                      value={project.action}
                      onChange={(e) => handleActionChange(e, project.id)}
                      className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    >
                      <option value="Edit">Edit</option>
                      <option value="Delete">Delete</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="text-center py-3 px-6 text-md text-gray-700">
          <a href="#" className="hover:text-gray-900">View all Projects</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
