import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import config from '../config';

function Dashboard() {
  const [apiStatus, setApiStatus] = useState({ statusCode: null, payload: null, error: null });

  useEffect(() => {
    const fetchApiStatus = async () => {
      try {
        const response = await fetch(config.apiUrl);
        const statusCode = response.status;
        let payload = null;

        if (statusCode === 200) {
          payload = await response.text();
        }

        const result = { statusCode, payload, error: null };
        setApiStatus(result);

        console.log('=== API Status Check ===');
        console.log(`Status Code: ${statusCode}`);
        if (statusCode === 200) {
          console.log(`Payload: ${payload}`);
        }
        console.log('========================');
      } catch (err) {
        const errorMsg = err.message;
        const result = { statusCode: null, payload: null, error: errorMsg };
        setApiStatus(result);

        console.log('=== API Status Check ===');
        console.log(`Error: ${errorMsg}`);
        console.log('========================');
      }
    };

    fetchApiStatus();
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Welcome to Turing Dashboard <span className="api-url">(API: {config.apiUrl})</span></h2>
        <p>Monitor your application metrics and performance in real-time</p>
      </div>

      <div className="api-status-section">
        <h3>API Status</h3>
        <div className="api-status-info">
          <div className="status-item">
            <strong>Endpoint:</strong> {config.apiUrl}
          </div>
          <div className="status-item">
            <strong>Status Code:</strong>
            <span className={apiStatus.statusCode === 200 ? 'status-success' : apiStatus.statusCode ? 'status-error' : 'status-pending'}>
              {apiStatus.statusCode || 'Fetching...'}
            </span>
          </div>
          {apiStatus.statusCode === 200 && apiStatus.payload && (
            <div className="status-item">
              <strong>Payload:</strong>
              <pre className="payload-display">{apiStatus.payload}</pre>
            </div>
          )}
          {apiStatus.error && (
            <div className="status-item">
              <strong>Error:</strong> <span className="status-error">{apiStatus.error}</span>
            </div>
          )}
        </div>
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

