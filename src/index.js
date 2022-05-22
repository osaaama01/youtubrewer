import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Settings from './pages/settings/settings.component';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="settings" element={<Settings />} />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);
