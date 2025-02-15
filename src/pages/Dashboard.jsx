import React from "react";
import { FaUsers,FaUber, FaShoppingCart, FaDollarSign, FaClock, FaBox, FaList, FaChartBar, FaSignOutAlt, FaBars } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const data = [
  { name: "5k", sales: 20 },
  { name: "10k", sales: 40 },
  { name: "15k", sales: 45 },
  { name: "20k", sales: 30 },
  { name: "25k", sales: 70 },
  { name: "30k", sales: 35 },
  { name: "35k", sales: 50 },
  { name: "40k", sales: 65 },
  { name: "45k", sales: 40 },
  { name: "50k", sales: 55 },
  { name: "55k", sales: 50 },
  { name: "60k", sales: 60 },
];

const Sidebar = () => {
  return (
    <div className="d-flex flex-column p-3 bg-white shadow position-fixed" style={{ width: "250px", height: "100vh", top: "0", left: "0" }}>
          <h4 className="text-primary text-center">Seller Page</h4>
          <ul className="nav flex-column mt-3">
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link text-white fw-bold bg-primary p-2 rounded">
                <FaUsers className="me-2" /> Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products_ad" className="nav-link text-dark">
                <FaBox className="me-2" /> Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/orderlist" className="nav-link text-dark">
                <FaList className="me-2" /> Order Lists
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/productstock" className="nav-link text-dark">
                <FaChartBar className="me-2" /> Product Stock
              </Link>
            </li>
            <li className="nav-item">
                <Link to="/contact" className="nav-link text-dark">
                    <FaUber className="me-2" /> Contact
                </Link>
            </li>
          </ul>
          <hr />
          <Link to="/" className="nav-link text-danger">
            <FaSignOutAlt className="me-2" /> Logout
          </Link>
        </div>
  );
};

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center p-3 shadow-sm bg-white">
      <FaBars className="text-secondary" size={24} />
      <div className="d-flex align-items-center">
        <img src="./assets/main.png.jpg" className="rounded-circle border" alt="User" height = "45px" width= "50px"/>
        <div className="text-end me-2">
          <span className="d-block fw-bold">Moni Roy</span>
          <span className="text-muted">Admin</span>
        </div>
    
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1" style={{ marginLeft: "250px" }}>
        <Header />
        <div className="container my-4">
          <h2>Dashboard</h2>
          <br />
          <div className="row text-center">
            {[{
              icon: <FaUsers className="text-primary" size={24} />, label: "Total Users", value: "40,689", trend: "⬆ 8.5%", color: "text-success"
            }, {
              icon: <FaShoppingCart className="text-warning" size={24} />, label: "Total Orders", value: "10,293", trend: "⬆ 1.3%", color: "text-success"
            }, {
              icon: <FaDollarSign className="text-success" size={24} />, label: "Total Sales", value: "$89,000", trend: "⬇ 4.3%", color: "text-danger"
            }, {
              icon: <FaClock className="text-danger" size={24} />, label: "Pending Orders", value: "2040", trend: "⬆ 1.8%", color: "text-success"
            }].map((stat, index) => (
              <div key={index} className="col-md-3 mb-3">
                <div className="card shadow-sm p-3">
                  <div className="d-flex align-items-center">
                    <div className="me-3">{stat.icon}</div>
                    <div>
                      <h5 className="mb-0 fw-bold">{stat.value}</h5>
                      <small>{stat.label}</small>
                      <p className={`mb-0 ${stat.color}`}>{stat.trend}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="card shadow-sm p-4 mt-4">
            <h4>Sales Details</h4>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#007bff" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="card shadow-sm p-4 mt-4">
            <h4>Recent Transactions</h4>
            <table className="table table-striped mt-3">
              <thead className="bg-light">
                <tr>
                  <th>Product</th>
                  <th>Location</th>
                  <th>Date - Time</th>
                  <th>Quantity</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Apple Watch</td>
                  <td>6096 Marjolaine Landing</td>
                  <td>12.09.2019 - 12:53 PM</td>
                  <td>423</td>
                  <td>$34,295</td>
                  <td><span className="badge bg-success">Delivered</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;