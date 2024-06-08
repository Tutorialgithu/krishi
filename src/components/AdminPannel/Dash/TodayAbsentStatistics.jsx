import React from 'react';

const LeaveInfoBox = ({ name, date, status, imageUrl }) => {
  let statusClass = '';
  switch (status) {
    case 'Approved':
      statusClass = 'bg-green-200 text-green-600 border-green-600 hover:bg-green-500';
      break;
    case 'Pending':
      statusClass = 'bg-yellow-200 text-yellow-600 border-yellow-600 hover:bg-yellow-500';
      break;
    case 'Rejected':
      statusClass = 'bg-red-200 text-red-600 border-red-600 hover:bg-red-500';
      break;
    default:
      break;
  }

  return (
    <div className="p-3 rounded-md border-2 bg-gray-50 hover:bg-white border-gray-500 hover:border-black mb-2">
      <div className="flex items-center">
        <a href="#" className="avatar flex-shrink-0 mr-3">
          <img
            className="h-8 w-8 rounded-full object-cover border-2 border-black hover:border-white"
            src={imageUrl}
            alt="User Image"
          />
        </a>
        <div className="text-lg font-bold">{name}</div>
      </div>
      <div className="row align-items-center mt-2">
        <div className="col-6 flex justify-between items-center">
          <div>
            <h6 className="mb-0 font-semibold">{date}</h6>
            <span className="text-md text-gray-500">Leave Date</span>
          </div>
          <span className={`font-medium rounded-xl px-2 py-1 border ${statusClass} hover:border-white hover:text-white`}>
            {status}
          </span>
        </div>
      </div>
    </div>
  );
};

const TodayAbsentStatistics = () => {
  const leaveData = [
    {
      name: 'Sarika Sharma',
      date: '25 May 2024',
      status: 'Approved',
      imageUrl: 'src/assets/images/user.jpg'
    },
    {
      name: 'Rahul Patel',
      date: '15 June 2024',
      status: 'Pending',
      imageUrl: 'src/assets/images/user.jpg' 
    },
    {
      name: 'Priya Singh',
      date: '5 July 2024',
      status: 'Rejected',
      imageUrl: 'src/assets/images/user.jpg' 
    },
    {
      name: 'Amit Kumar',
      date: '10 August 2024',
      status: 'Pending',
      imageUrl: 'src/assets/images/user.jpg'
    },
    {
      name: 'Neha Gupta',
      date: '2 September 2024',
      status: 'Approved',
      imageUrl: 'src/assets/images/user.jpg'
    }
  ];

  return (
    <div className="bg-white rounded-lg border-2 border-gray-500 hover:border-black shadow-md p-4">
      <p className="text-xl text-start mb-4 font-semibold text-gray-800">Today Absent</p>
      <div className="card-body">
        {leaveData.map((leave, index) => (
          <LeaveInfoBox
            key={index}
            name={leave.name}
            date={leave.date}
            status={leave.status}
            imageUrl={leave.imageUrl}
          />
        ))}
        <div className="load-more text-center">
          <a
            className="inline-block bg-white border border-gray-300 hover:border-white hover:bg-black hover:text-white rounded-md px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md transition duration-300"
            href="#"
          >
            Load More
          </a>
        </div>
      </div>
    </div>
  );
};

export default TodayAbsentStatistics;
