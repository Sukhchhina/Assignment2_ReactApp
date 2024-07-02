// Dashboard.js

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProfileWidget from './ProfileWidget';
import UserListWidget from './UserListWidget';
import CustomTool1 from './CustomTool1';
import CalendarWidget from './CalendarWidget';
import WeatherWidget from './WeatherWidget'; 
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <nav className="navbar">
                <ul className="nav-links">
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/tool1">Calculator</Link></li>
                </ul>
            </nav>
            <div className="content">
                <Routes>
                    <Route path="/profile" element={<ProfileWidget />} />
                    <Route path="/users" element={<UserListWidget />} />
                    <Route path="/tool1" element={<CustomTool1 />} />
                </Routes>
            </div>

            <div className="widgets-container">
                <WeatherWidget />
                <CalendarWidget />
            </div>
        </div>
    );
};

export default Dashboard;
