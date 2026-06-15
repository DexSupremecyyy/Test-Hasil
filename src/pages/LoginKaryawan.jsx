
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginKaryawan = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock login logic
    console.log("Karyawan Login:", employeeId, password);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Karyawan Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Employee ID</label>
            <input 
              type="text" 
              className="w-full p-2 border rounded" 
              value={employeeId} 
              onChange={(e) => setEmployeeId(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input 
              type="password" 
              className="w-full p-2 border rounded" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginKaryawan;
