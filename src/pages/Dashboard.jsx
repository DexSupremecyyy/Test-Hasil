
import React from 'react';
import { Users, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Total Employees', value: '120', icon: <Users />, color: 'bg-blue-500' },
    { label: 'Present Today', value: '98', icon: <CheckCircle />, color: 'bg-green-500' },
    { label: 'Late Arrivals', value: '4', icon: <Clock />, color: 'bg-yellow-500' },
    { label: 'Absence', value: '2', icon: <AlertCircle />, color: 'bg-red-500' },
  ];

  const recentAttendance = [
    { id: 1, name: 'Budi Santoso', time: '08:00 AM', status: 'On Time' },
    { id: 2, name: 'Siti Aminah', time: '08:15 AM', status: 'On Time' },
    { id: 3, name: 'Andi Wijaya', time: '08:45 AM', status: 'Late' },
    { id: 4, name: 'Dewi Lestari', time: '09:00 AM', status: 'Late' },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border flex items-center space-x-4">
            <div className={`${stat.color} p-3 rounded-full text-white`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-gray-500 text-sm">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h2 className="text-xl font-bold mb-4">Recent Attendance</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-4">ID</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Time</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentAttendance.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{item.id}</td>
                  <td className="py-3 px-4">{item.name}</td>
                  <td className="py-3 px-4">{item.time}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded text-sm ${
                      item.status === 'On Time' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
