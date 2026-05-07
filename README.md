# Turing Demo - React Dashboard

A modern React.js dashboard application with proper build tooling, development server, and production serving.

## Quick Start

```bash
# Install dependencies
npm install

# Development - Hot reload on http://localhost:3000
npm start

# Production build
npm run build

# Serve production build on http://localhost:3000
npm run serve
```

## Features

✨ **Modern React Dashboard**
- React 18 with hooks
- Responsive design (mobile, tablet, desktop)
- Professional UI with gradient colors
- Smooth animations and transitions

📊 **Components**
- Header with navigation, search, and user profile
- Collapsible sidebar with 6 menu items
- Dashboard with welcome message and 4 quick stat cards
- 3 system status cards (Performance, Security, Updates)
- Analytics section with traffic chart and visitor distribution

🔨 **Build Tools**
- Webpack 5 bundler with code splitting
- Babel 7 for ES6+ and JSX
- webpack-dev-server with HMR
- serve for production

## Scripts

- `npm start` - Development server with hot reload (port 3000)
- `npm run build` - Production build with code splitting
- `npm run serve` - Serve production build (port 3000)

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.js        # Top navigation
│   ├── Sidebar.js       # Side menu
│   ├── Dashboard.js     # Dashboard view
│   ├── Cards.js         # Status cards
│   └── Charts.js        # Analytics charts
├── App.js               # Main component
└── index.js             # Entry point
public/
└── index.html           # HTML template
dist/                    # Production build
├── index.html
├── main.[hash].js       # App code
└── vendors-[hash].js    # Dependencies
```

## Technologies

- **React 18** - UI library
- **Webpack 5** - Module bundler
- **Babel 7** - JavaScript transpiler
- **CSS3** - Styling and animations
- **serve** - Production server

