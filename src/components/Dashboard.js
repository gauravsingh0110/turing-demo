import React from 'react';
import './Dashboard.css';
import config from '../config';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Welcome to Turing Dashboard <span className="api-url">(API: {config.apiUrl})</span></h2>
        <p>Monitor your application metrics and performance in real-time</p>
      </div>
      <div className="quick-stats">
        <div className="stat-item">
          <div className="stat-label">Active Users</div>
          <div className="stat-value">1,234</div>
          <div className="stat-change positive">↑ 12% from last week</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Total Revenue</div>
          <div className="stat-value">$45,231</div>
          <div className="stat-change positive">↑ 8% from last week</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Conversion Rate</div>
          <div className="stat-value">3.42%</div>
          <div className="stat-change negative">↓ 2% from last week</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Bounce Rate</div>
          <div className="stat-value">42.3%</div>
          <div className="stat-change positive">↓ 5% from last week</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

