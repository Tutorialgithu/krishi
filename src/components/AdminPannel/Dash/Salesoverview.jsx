import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SalesOverview = () => {
  const [data] = useState([
    {
      Year: '2018',
      Sales: 80,
      Revenue: 90,
    },
    {
      Year: '2019',
      Sales: 75,
      Revenue: 65,
    },
    {
      Year: '2020',
      Sales: 50,
      Revenue: 40,
    },
    {
      Year: '2021',
      Sales: 75,
      Revenue: 65,
    },
    {
      Year: '2022',
      Sales: 75,
      Revenue: 65,
    },
    {
      Year: '2023',
      Sales: 95,
      Revenue: 88,
    },
    {
      Year: '2024',
      Sales: 85,
      Revenue: 77,
    },
  ]);

  return (
    <div className="h-full w-6/12 bg-white rounded-lg mx-3 p-4">
      <h1 className="text-xl font-semibold text-center hover:font-bold underline mb-4">Sales Overview</h1>
      <div className="w-full h-full">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Revenue" fill="#32CD30" />
            <Bar dataKey="Sales" fill="#FF9636" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesOverview;
