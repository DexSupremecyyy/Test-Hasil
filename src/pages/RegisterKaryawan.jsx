
import React, { useState } from 'react';

const RegisterKaryawan = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    employeeId: '',
    department: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering Karyawan:", formData);
    alert("Registration Successful (Mock)");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-[450px]">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Register Karyawan</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Full Name</label>
            <input 
              type="text" 
              className="w-full p-2 border rounded" 
              onChange={(e) => setFormData({...formData, fullName: e.target.value})} 
              required 
            />
          </div>
          <div>
            <label className="block mb-1">Employee ID</label>
            <input 
              type="text" 
              className="w-full p-2 border rounded" 
              onChange={(e) => setFormData({...formData, employeeId: e.target.value})} 
              required 
            />
          </div>
          <div>
            <label className="block mb-1">Department</label>
            <select 
              className="w-full p-2 border rounded"
              onChange={(e) => setFormData({...formData, department: e.target.value})}
              required
            >
              <option value="">Select Department</option>
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input 
              type="password" 
              className="w-full p-2 border rounded" 
              onChange={(e) => setFormData({...formData, password: e.target.value})} 
              required 
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterKaryawan;
