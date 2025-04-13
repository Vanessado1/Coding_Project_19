import React from 'react';
import ReactDOM from 'react-dom/client'; // ReactDOM for modern root rendering
import './index.css'; // Import global styles
import App from './App'; // Import main App component

// Create the root and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> {/* Optional for enforcing development best practices */}
    <App />
  </React.StrictMode>
);
