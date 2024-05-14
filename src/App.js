import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Balance from './components/Balance';
import Swap from './components/Swap';
import UserInfo from './components/UserInfo';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light"> {/* Add fixed-top class */}
          <div className="container">
            <Link className="navbar-brand" to="/">Your App Name</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto"> {/* Add ml-auto class to align menu items to the right */}
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/balance">Balance</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/swap">Swap</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/userInfo">User Info</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-5 pt-3"> {/* Add mt-5 for margin top and pt-3 for padding top */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/balance" element={<Balance />} />
            <Route path="/swap" element={<Swap />} />
            <Route path="/userInfo" element={<UserInfo />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
