import React from 'react';
import './Cards.css';

function Cards() {
  const cardData = [
    {
      id: 1,
      title: 'Performance',
      description: 'Your site is performing 23% better than average',
      icon: '⚡',
      color: '#667eea',
    },
    {
      id: 2,
      title: 'Security',
      description: 'All security checks passed. No vulnerabilities found',
      icon: '🔒',
      color: '#27ae60',
    },
    {
      id: 3,
      title: 'Updates',
      description: '3 new updates available for your system',
      icon: '🔄',
      color: '#f39c12',
    },
  ];

  return (
    <section className="cards-section">
      <h3 className="section-title">System Status</h3>
      <div className="cards-grid">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="card"
            style={{ borderLeftColor: card.color }}
          >
            <div className="card-icon" style={{ color: card.color }}>
              {card.icon}
            </div>
            <h4 className="card-title">{card.title}</h4>
            <p className="card-description">{card.description}</p>
            <button
              className="card-link"
              onClick={(e) => e.preventDefault()}
            >
              Learn more →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cards;

