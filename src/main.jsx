// main.jsx (or index.jsx)

import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for routing

// Create a root for React 18
const root = ReactDOM.createRoot(document.getElementById('root')); // Using createRoot

// Wrap your app with BrowserRouter to enable routing
root.render(
  
    <BrowserRouter>  {/* Wrap the entire app with BrowserRouter */}
      <App />
    </BrowserRouter>
);
