import React, { useState, useEffect } from 'react';
import { products } from '../../assets/assets';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
    recentOrders: [],
    topProducts: [],
    monthlyRevenue: [],
    usersGrowth: []
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      const bestSellers = products.filter(p => p.bestseller).slice(0, 5);

      // Mock data
      const mockStats = {
        totalUsers: 1247,
        totalProducts: products.length,
        totalOrders: 342,
        totalRevenue: 15678.50,
        recentOrders: [
          { id: 1, customer: 'Sarah Johnson', amount: 89.99, status: 'completed', date: '2024-01-15' },
          { id: 2, customer: 'Mike Chen', amount: 45.50, status: 'pending', date: '2024-01-15' },
          { id: 3, customer: 'Emma Wilson', amount: 67.25, status: 'shipped', date: '2024-01-14' },
          { id: 4, customer: 'David Brown', amount: 123.75, status: 'completed', date: '2024-01-14' },
          { id: 5, customer: 'Lisa Garcia', amount: 34.99, status: 'pending', date: '2024-01-13' }
        ],
        topProducts: bestSellers.map(p => ({
          ...p,
          sales: Math.floor(Math.random() * 100) + 10
        })),
        monthlyRevenue: Array.from({ length: 12 }, (_, i) => ({
          month: `Month ${i + 1}`,
          revenue: Math.floor(Math.random() * 5000) + 1000
        })),
        usersGrowth: Array.from({ length: 12 }, (_, i) => ({
          month: `Month ${i + 1}`,
          users: Math.floor(Math.random() * 200) + 50
        }))
      };

      setTimeout(() => {
        setStats(mockStats);
        setLoading(false);
      }, 1000);
    };

    fetchStats();
  }, []);

  const StatCard = ({ title, value, icon, color, change }) => (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4" style={{ borderLeftColor: color }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {change && (
            <p className={`text-sm ${change > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {change > 0 ? '+' : ''}{change}% from last month
            </p>
          )}
        </div>
        <div className="text-3xl">{icon}</div>
      </div>
    </div>
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'shipped': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Users" value={stats.totalUsers.toLocaleString()} icon="👥" color="#ec4899" change={12} />
        <StatCard title="Total Products" value={stats.totalProducts} icon="🛍️" color="#8b5cf6" change={8} />
        <StatCard title="Total Orders" value={stats.totalOrders} icon="📦" color="#06b6d4" change={-3} />
        <StatCard title="Total Revenue" value={`$${stats.totalRevenue.toLocaleString()}`} icon="💰" color="#10b981" change={15} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Revenue */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Revenue</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={stats.monthlyRevenue}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Users Growth */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Users Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={stats.usersGrowth}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#ec4899" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Existing Recent Orders and Top Products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h3>
          <div className="space-y-3">
            {stats.recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-pink-600 font-semibold">
                      {order.customer.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{order.customer}</p>
                    <p className="text-sm text-gray-500">{order.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">${order.amount}</p>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Products</h3>
          <div className="space-y-3">
            {stats.topProducts.map((product, index) => (
              <div key={product._id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-pink-600 font-bold text-sm">#{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-500">{product.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{product.sales} sales</p>
                  <p className="text-sm text-gray-500">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
