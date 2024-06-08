import React from 'react';

const InvoicesComponent = () => {
  // Sample invoice data
  const invoices = [
    {
      id: '#INV-0001',
      client: 'ABC Technologies',
      dueDate: '11 Mar 2024',
      total: '₹ 60,000',
      status: 'Partially Paid'
    },
    {
      id: '#INV-0002',
      client: 'XYZ Inc.',
      dueDate: '15 Mar 2024',
      total: '₹ 75,000',
      status: 'Unpaid'
    },
    {
      id: '#INV-0003',
      client: 'PQR Corporation',
      dueDate: '20 Mar 2024',
      total: '₹ 45,000',
      status: 'Paid'
    },
    {
      id: '#INV-0004',
      client: 'LMN Enterprises',
      dueDate: '25 Mar 2024',
      total: '₹ 90,000',
      status: 'Partially Paid'
    },
    {
      id: '#INV-0005',
      client: 'EFG Solutions',
      dueDate: '30 Mar 2024',
      total: '₹ 55,000',
      status: 'Unpaid'
    },


  ];

  return (
    <div className="md:w-1/2 sm:w-full mx-auto">
      <div className="bg-white border-2 border-gray-500 rounded-lg shadow-md mt-2 mb-2">
        {/* Header */}
        <div className="bg-transparent border-b-2 border-gray-300 flex items-center justify-between py-4 px-5 rounded-t-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-0">Invoices</h3>
        </div>
        
        {/* Invoice List */}
        <div className="text-gray-600 justify-between overflow-x-auto">

          <table className="w-full table-auto">
            <thead>
              <tr className='font-bold text-md'>
                <th className="border-t border-gray-300 py-2 px-3 text-gray-700 font-semibold">Invoice ID</th>
                <th className="border-t border-gray-300 py-2 px-3 text-gray-700 font-semibold">Client</th>
                <th className="border-t border-gray-300 py-2 px-3 text-gray-700 font-semibold">Due Date</th>
                <th className="border-t border-gray-300 py-2 px-3 text-gray-700 font-semibold">Total</th>
                <th className="border-t border-gray-300 py-2 px-3 text-gray-700 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr className='font-semibold text-sm ' key={invoice.id}>
                  <td className="border-t border-gray-300 py-2 px-3 text-gray-700">{invoice.id}</td>
                  <td className="border-t border-gray-300 py-2 px-3 text-gray-700">{invoice.client}</td>
                  <td className="border-t border-gray-300 py-2 px-3 text-gray-700">{invoice.dueDate}</td>
                  <td className="border-t border-gray-300 py-2 px-3 text-gray-700">{invoice.total}</td>
                  <td className="border-t border-gray-300 py-2 px-3 text-gray-700 flex items-center">
                    <span className={`inline-block px-3 py-2 font-semibold rounded-lg ${
                      invoice.status === 'Partially Paid' ? 'bg-yellow-200 text-yellow-700' :
                      invoice.status === 'Paid' ? 'bg-green-200 text-green-700' :
                      'bg-red-200 text-red-700'
                    }`}>
                      {invoice.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="text-center py-3 px-6 text-md text-gray-700">
          <a href="#" className="hover:text-gray-900">View all invoices</a>
        </div>
      </div>
    </div>
  );
};

export default InvoicesComponent;
