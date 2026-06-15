
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginAdmin from './pages/LoginAdmin';
import LoginKaryawan from './pages/LoginKaryawan';
import RegisterKaryawan from './pages/RegisterKaryawan';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<div className="p-10 text-center"><h1>Welcome to Attendance System</h1><p>Please login to continue.</p></div>} />
          <Route path="/login-admin" element={<LoginAdmin />} />
          <Route path="/login-karyawan" element={<LoginKaryawan />} />
          <Route path="/register-karyawan" element={<RegisterKaryawan />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
