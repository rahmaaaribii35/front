import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AdminLayout = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const navItems = [
    { path: "/admin/dashboard", label: "Dashboard", icon: "📊" },
    { path: "/admin/users", label: "Users", icon: "👥" },
    { path: "/admin/products", label: "Products", icon: "🛍️" },
    { path: "/admin/order", label: "Order", icon: "📦" },
  ];

  if (!user || user.role !== "admin") {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans text-gray-800">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-white text-gray-900 flex flex-col p-6 space-y-6 shadow-md
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-pink-600">
            Admin Panel
          </h2>
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-gray-900 hover:text-pink-500"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col space-y-2 mt-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex items-center space-x-3 px-4 py-2 rounded-xl transition
                ${location.pathname === item.path
                  ? "bg-pink-100 text-pink-600 font-medium"
                  : "hover:bg-pink-50 hover:text-pink-600"
                }
              `}
              onClick={() => setSidebarOpen(false)}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-white">A</span>
            </div>
            <div>
              <p className="text-sm font-medium">{user.email}</p>
              <p className="text-xs text-gray-400">Administrator</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col lg:ml-64">
        {/* Top bar */}
        <div className="flex justify-between items-center p-4 bg-white shadow-md border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleSidebar}
              className="lg:hidden text-gray-600 hover:text-pink-600"
            >
              ☰
            </button>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Welcome, {user.email}
            </h1>
          </div>
          <button
            onClick={handleLogout}
            className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-xl shadow-sm transition"
          >
            Logout
          </button>
        </div>

        {/* Outlet for admin pages */}
        <div className="p-4 sm:p-6 lg:p-8 flex-1 overflow-auto">
          <Outlet />
        </div>
      </main>

    </div>
  );
};

export default AdminLayout;
