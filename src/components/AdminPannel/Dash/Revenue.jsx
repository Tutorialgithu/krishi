import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Revenue() {
  const data = [
    {
      Year: '2018',
      Income: 80,
      Outcome: 90,
    },
    {
      Year: '2019',
      Income: 75,
      Outcome: 65,
    },
    {
      Year: '2020',
      Income: 50,
      Outcome: 40,
    },
    {
      Year: '2021',
      Income: 75,
      Outcome: 65,
    },
    {
      Year: '2022',
      Income: 75,
      Outcome: 65,
    },
    {
      Year: '2023',
      Income: 95,
      Outcome: 88,
    },
    {
      Year: '2024',
      Income: 85,
      Outcome: 77,
    },
  ];

  return (
    <div className="w-1/2 h-full bg-white border-black mx-3 rounded-lg p-2">
      <h1 className="text-xl font-semibold underline mb-4 hover:font-bold text-center">Total Revenue</h1>
      <div className="w-full h-1/2">
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
            <Bar dataKey="Outcome" name="Outcome" fill="#E34547" />
            <Bar dataKey="Income" name="Income" fill="#32CD30" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Revenue;
