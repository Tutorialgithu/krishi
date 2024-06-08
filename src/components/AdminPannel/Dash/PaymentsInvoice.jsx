import React from 'react';

const PaymentsInvoice = () => {
  // Sample invoice data
  const invoices = [
    {
      id: '#INV-0001',
      client: 'ABC Technologies',
      paymentType: 'Paypal',
      paidDate: '31 Mar 2024',
      paidAmount: '₹ 65,000'
    },
    {
      id: '#INV-0002',
      client: 'XYZ Technologies',
      paymentType: 'Paypal',
      paidDate: '22 Mar 2024',
      paidAmount: '₹ 55,000'
    },
    {
      id: '#INV-0003',
      client: 'IJK Technologies',
      paymentType: 'Paypal',
      paidDate: '18 Mar 2024',
      paidAmount: '₹ 75,000'
    },
    {
      id: '#INV-0004',
      client: 'MNO Technologies',
      paymentType: 'Paypal',
      paidDate: '11 Mar 2024',
      paidAmount: '₹ 21,000'
    },
    {
      id: '#INV-0005',
      client: 'PQR Technologies',
      paymentType: 'Credit Card',
      paidDate: '5 Apr 2024',
      paidAmount: '₹ 45,000'
    },
    {
      id: '#INV-0006',
      client: 'LMN Technologies',
      paymentType: 'Bank Transfer',
      paidDate: '2 Apr 2024',
      paidAmount: '₹ 60,000'
    },
  ];

  return (
    <div className="w-full overflow-auto md:w-1/2 sm:w-full mx-auto">
      <div className="bg-white border-2 border-gray-500 rounded-lg shadow-md mt-2 mb-2">
        {/* Header */}
        <div className="bg-transparent border-b-2 border-gray-300 flex items-center justify-between py-4 px-5 rounded-t-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-0">Payments</h3>
        </div>
        
        {/* Invoice List */}
        <div className="text-gray-600 justify-between overflow-x-auto">

          <table className="w-full table-auto">
            <thead>
              <tr className='font-bold text-md'>
                <th className="border-t border-gray-300 py-2 px-3 text-gray-700 font-semibold">Invoice ID</th>
                <th className="border-t border-gray-300 py-2 px-3 text-gray-700 font-semibold">Client</th>
                <th className="border-t border-gray-300 py-2 px-3 text-gray-700 font-semibold">Payment Type</th>
                <th className="border-t border-gray-300 py-2 px-3 text-gray-700 font-semibold">Paid Date</th>
                <th className="border-t border-gray-300 py-2 px-3 text-gray-700 font-semibold">Paid Amount</th>              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr className='font-semibold text-sm ' key={invoice.id}>
                  <td className="border-t border-gray-300 py-2 px-3 text-gray-700">{invoice.id}</td>
                  <td className="border-t border-gray-300 py-2 px-3 text-gray-700">{invoice.client}</td>
                  <td className="border-t border-gray-300 py-2 px-3 text-gray-700">{invoice.paymentType}</td>
                  <td className="border-t border-gray-300 py-2 px-3 text-gray-700">{invoice.paidDate}</td>
                  <td className="border-t border-gray-300 py-2 px-3 text-gray-700">{invoice.paidAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="text-center py-3 px-6 text-md text-gray-700">
          <a href="#" className="hover:text-gray-900">View all Payments</a>
        </div>
      </div>
    </div>
  );
};

export default PaymentsInvoice;
