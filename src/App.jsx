import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Cards from './components/Cards';
import Charts from './components/Charts';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app">
      <Header onToggleSidebar={toggleSidebar} />
      <div className="app-container">
        <Sidebar isOpen={sidebarOpen} />
        <main className="main-content">
          <Dashboard />
          <Cards />
          <Charts />
        </main>
      </div>
    </div>
  );
}

export default App;

