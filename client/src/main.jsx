import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Link, Routes } from "react-router"
import './index.css'
import App from './App.jsx'

import React from 'react'
import { BrowserRouter } from 'react-router'
import { CookiesProvider } from 'react-cookie'
import Header from './components/Header.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CookiesProvider>
      <App />
      </CookiesProvider>
      
    </BrowserRouter>
  </React.StrictMode>,

)
