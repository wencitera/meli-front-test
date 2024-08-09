import React from 'react';
import App from '../components/App';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </StrictMode>
)
