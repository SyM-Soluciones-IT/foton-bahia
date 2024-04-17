import React from 'react'
import App from './src/App.jsx'
import { createRoot } from 'react-dom/client';
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
