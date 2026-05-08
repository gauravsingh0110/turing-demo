import React from 'react';
import './Sidebar.css';

function Sidebar({ isOpen }) {
  const menuItems = [
    { id: 1, label: 'Dashboard', icon: '📊' },
    { id: 2, label: 'Analytics', icon: '📈' },
    { id: 3, label: 'Reports', icon: '📄' },
    { id: 4, label: 'Users', icon: '👥' },
    { id: 5, label: 'Settings', icon: '⚙️' },
    { id: 6, label: 'Help', icon: '❓' },
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <nav className="sidebar-nav">
        <ul className="menu-list">
          {menuItems.map((item) => (
            <li key={item.id} className="menu-item">
              <button
                className="menu-link"
                onClick={(e) => e.preventDefault()}
              >
                <span className="menu-icon">{item.icon}</span>
                <span className="menu-label">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;

