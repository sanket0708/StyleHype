import React from "react";
import { useState } from "react";

const UserManagement = () => {
  const users = [
    {
      _id: 123213,
      name: "John doe",
      email: "john@example.com",
      role: "admin",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer", //default role
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);

    //reset form
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "customer",
    });
  };

  const handleRoleChange = (userId, newRole) => {
    // console.log({ id: userId, role: newRole });
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      console.log("deleting user", userId);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl md:text-3xl uppercase tracking-widest font-light mb-8">User Management</h2>
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm shadow-gray-900/5 p-6 sm:p-8 mb-6">
        <h3 className="text-sm uppercase tracking-widest text-gray-700 mb-4">Add New User</h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-600 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              required
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-600 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              required
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-600 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              required
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-600 mb-2">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="sm:col-span-2 pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto bg-black hover:bg-gray-900 text-white py-2.5 px-6 rounded text-sm uppercase tracking-widest"
            >
              Add User
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm shadow-gray-900/5 overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-xs uppercase tracking-widest text-gray-700 py-3 px-4">Name</th>
              <th className="text-xs uppercase tracking-widest text-gray-700 py-3 px-4">Email</th>
              <th className="text-xs uppercase tracking-widest text-gray-700 py-3 px-4">Role</th>
              <th className="text-xs uppercase tracking-widest text-gray-700 py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50">
                <td className="py-3 px-4 font-medium text-gray-900 whitespace-nowrap">{user.name}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4">
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                    className="w-full rounded border border-gray-300 bg-white px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  >
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
                <td className="py-3 px-4">
                  <button
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded text-sm uppercase tracking-widest"
                    onClick={() => handleDeleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
