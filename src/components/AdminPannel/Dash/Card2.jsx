import React, { useState } from 'react';

const Card = ({ title, value, percentage, previousValue }) => {
  const [widthPercentage, setWidthPercentage] = useState(70);

  return (
    <div className='w-full flex-row border-2 bg-white border-gray-500 hover:border-black pt-2 pb-2 pr-3 pl-3 mb-4 mt-8 rounded-md'>
      <div className="flex justify-between mb-3">
        <div>
          <span className="block text-black font-bold">{title}</span>
        </div>
        <div>
          <span className={`${percentage >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {percentage >= 0 ? `+${percentage}%` : `${percentage}%`}
          </span>
        </div>
      </div>
      <h3 className="mb-3 font-semibold">{value}</h3>
      <div className="h-2 bg-gray-200 rounded mb-2">
        <div className="h-full mb-1 bg-primary rounded" style={{ width: `${widthPercentage}%`, backgroundColor:'#32CD30' }}></div>
      </div>
      <p className="mb-1 font-semibold text-s">Previous Month <span className=" text-s text-green-900">{previousValue}</span></p>
    </div>
  );
};

const Card2 = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4">
    <Card title="New Employees" value="10" percentage={10} previousValue="218" />
    <Card title="Earnings" value="₹ 1,42,300" percentage={12.5} previousValue="₹ 1,15,852" />
    <Card title="Expenses" value="₹ 8,500" percentage={-2.8} previousValue="₹ 7,500" />
    <Card title="Profit" value="₹ 1,12,000" percentage={-75} previousValue="₹ 1,42,000" />
  </div>
);

export default Card2;
