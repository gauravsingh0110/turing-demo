import React from 'react';
import './Header.css';

function Header({ onToggleSidebar }) {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-btn" onClick={onToggleSidebar}>
          ☰
        </button>
        <h1 className="logo">Turing Dashboard</h1>
      </div>
      <div className="header-right">
        <input
          type="text"
          placeholder="Search..."
          className="search-box"
        />
        <div className="user-profile">
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="avatar"
          />
          <span className="user-name">Admin</span>
        </div>
      </div>
    </header>
  );
}

export default Header;

