const config = {
  apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:3001',
  apiKey: process.env.REACT_APP_API_KEY || '',
  environment: process.env.REACT_APP_ENV || 'development',
  debug: process.env.REACT_APP_DEBUG === 'true',
};

console.log('=== Environment Variables ===');
console.log(`REACT_APP_API_URL: ${config.apiUrl}`);
console.log(`REACT_APP_API_KEY: ${config.apiKey}`);
console.log(`REACT_APP_ENV: ${config.environment}`);
console.log(`REACT_APP_DEBUG: ${config.debug}`);
console.log('=============================');

export default config;
