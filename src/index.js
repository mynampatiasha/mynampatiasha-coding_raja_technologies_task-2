import React from 'react';
import ReactDOM from 'react-dom'; // Corrected import for ReactDOM
import App from './App';
import { MusicProvider } from './Context';
import { BrowserRouter as Router } from 'react-router-dom';

// Create a root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your app
root.render(
  <React.StrictMode>
    <MusicProvider>
      <Router>
        <App />
      </Router>
    </MusicProvider>
  </React.StrictMode>
);
