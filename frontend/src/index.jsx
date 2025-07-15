import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Make sure you have an App.js file in the src directory

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
