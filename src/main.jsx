import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Global styles
// If you plan to use React Router for navigation (highly recommended for multiple pages)
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap App with BrowserRouter if using React Router */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);