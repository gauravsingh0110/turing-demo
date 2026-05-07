import React from 'react';
import './Charts.css';

function Charts() {
  return (
    <section className="charts-section">
      <h3 className="section-title">Analytics</h3>
      <div className="charts-grid">
        <div className="chart-container">
          <h4>Monthly Traffic</h4>
          <div className="chart-placeholder">
            <svg viewBox="0 0 100 50" preserveAspectRatio="none">
              <polyline
                points="0,40 10,30 20,35 30,20 40,25 50,10 60,15 70,5 80,10 90,0 100,5"
                fill="none"
                stroke="#667eea"
                strokeWidth="2"
              />
              <polyline
                points="0,40 10,30 20,35 30,20 40,25 50,10 60,15 70,5 80,10 90,0 100,5"
                fill="url(#gradient)"
                opacity="0.3"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#667eea', stopOpacity: 0.5 }} />
                  <stop offset="100%" style={{ stopColor: '#667eea', stopOpacity: 0 }} />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="chart-stats">
            <span>Peak: 45,231 visitors</span>
            <span>Avg: 32,456 visitors</span>
          </div>
        </div>

        <div className="chart-container">
          <h4>Visitor Distribution</h4>
          <div className="pie-chart">
            <div className="pie-item" style={{ '--percentage': '45%', '--color': '#667eea' }}>
              <span>45%</span>
            </div>
            <div className="pie-item" style={{ '--percentage': '30%', '--color': '#764ba2' }}>
              <span>30%</span>
            </div>
            <div className="pie-item" style={{ '--percentage': '25%', '--color': '#f39c12' }}>
              <span>25%</span>
            </div>
          </div>
          <div className="legend">
            <div><span style={{ backgroundColor: '#667eea' }}></span> Desktop: 45%</div>
            <div><span style={{ backgroundColor: '#764ba2' }}></span> Mobile: 30%</div>
            <div><span style={{ backgroundColor: '#f39c12' }}></span> Tablet: 25%</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Charts;

