import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Link, Routes } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </StrictMode>,
)
