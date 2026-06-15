
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">AbsensiApp</Link>
        <div className="space-x-4">
          <Link to="/login-admin" className="hover:underline">Admin Login</Link>
          <Link to="/login-karyawan" className="hover:underline">Karyawan Login</Link>
          <Link to="/register-karyawan" className="hover:underline">Register</Link>
          <Link to="/dashboard" className="bg-white text-blue-600 px-4 py-2 rounded font-semibold">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
