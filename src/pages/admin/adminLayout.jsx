import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6 space-y-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="flex flex-col space-y-2">
          <Link to="/admin/dashboard" className="hover:text-pink-400">Dashboard</Link>
          <Link to="/admin/users" className="hover:text-pink-400">Users</Link>
          <Link to="/admin/products" className="hover:text-pink-400">Products</Link>
          <Link to="/admin/orders" className="hover:text-pink-400">Orders</Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 bg-gray-100">
        <Outlet /> {/* 👉 will render the selected child route */}
      </main>
    </div>
  );
};

export default AdminLayout;
