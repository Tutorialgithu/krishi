import React, { useState } from 'react';

const ClientComponents = () => {
  const [clients, setClients] = useState([
    {
      id: 1,
      image: "src/assets/images/user.jpg",
      name: "John Doe",
      position:"CEO",
      email: "john.doe@example.com",
      status: "Active",
      action: "Edit",
    },
    {
      id: 2,
      image: "src/assets/images/user.jpg",
      name: "Jane Smith",
      position:"CEO",
      email: "jane.smith@example.com",
      status: "Inactive",
      action: "Edit",
    },
    {
      id: 3,
      image: "src/assets/images/user.jpg",
      name: "Alex Johnson",
      position:"Manager",
      email: "alex.johnson@example.com",
      status: "Active",
      action: "Edit",
    },
    {
      id: 4,
      image: "src/assets/images/user.jpg",
      name: "Emily Brown",
      position:"Manager",
      email: "emily.brown@example.com",
      status: "Inactive",
      action: "Edit",
    },
    {
      id: 5,
      image: "src/assets/images/user.jpg",
      name: "Michael Wilson",
      position:"CEO",
      email: "michael.wilson@example.com",
      status: "Active",
      action: "Edit",
    },
    
    // Add more clients as needed...
  ]);

  const handleStatusChange = (e, clientId) => {
    const updatedClients = clients.map(client =>
      client.id === clientId ? { ...client, status: e.target.value } : client
    );
    setClients(updatedClients);
  };

  const handleActionChange = (e, clientId) => {
    const updatedClients = clients.map(client =>
      client.id === clientId ? { ...client, action: e.target.value } : client
    );
    setClients(updatedClients);
  };

  return (
    <div className="w-1/3 md:w-1/2 sm:w-full mx-auto">
      <div className="bg-white border-2 border-gray-500 rounded-lg shadow-md mt-2 mb-2">
        {/* Header */}
        <div className="bg-transparent border-b-2 border-gray-300 flex items-center justify-between py-4 px-5 rounded-t-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-0">Clients</h3>
        </div>
        
        {/* Client List */}
        <div className="text-gray-600 justify-between overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className='font-bold text-md'>
                <th className="border-t border-gray-300 py-2 px-3 text-gray-700 font-semibold">Image</th>
                <th className="border-t border-gray-300 py-2 px-3 text-gray-700 font-semibold">Name</th>
                <th className="border-t border-gray-300 py-2 px-3 text-gray-700 font-semibold">Position</th>
                <th className="border-t border-gray-300 py-2 px-3 text-gray-700 font-semibold">Email</th>
                <th className="border-t border-gray-300 py-2 px-3 text-gray-700 font-semibold">Status</th>
                <th className="border-t border-gray-300 py-2 px-3 text-gray-700 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr className='font-semibold text-sm' key={client.id}>
                  <td className="border-t border-gray-300 py-2 px-3 text-gray-700">
                    <img src={client.image} alt={client.name} className="w-12 h-12 rounded-full" />
                  </td>
                  <td className="border-t border-gray-300 py-2 px-3 text-gray-700">{client.name}</td>
                  <td className="border-t border-gray-300 py-2 px-3 text-gray-700">{client.position}</td>
                  <td className="border-t border-gray-300 py-2 px-3 text-gray-700">{client.email}</td>
                  <td className="border-t border-gray-300 py-2 px-3 text-gray-700">
                    <select
                      value={client.status}
                      onChange={(e) => handleStatusChange(e, client.id)}
                      className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </td>
                  <td className="border-t border-gray-300 py-2 px-3 text-gray-700">
                    <select
                      value={client.action}
                      onChange={(e) => handleActionChange(e, client.id)}
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
          <a href="#" className="hover:text-gray-900">View all clients</a>
        </div>
      </div>
    </div>
  );
};

export default ClientComponents;
