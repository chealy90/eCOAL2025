import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'
import { useCookies } from 'react-cookie'
import { Routes, Route, Link } from 'react-router'

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['mycookie']);

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<h2>cc</h2>}/>
        <Route path="/login" element={<Login setCookie={setCookie}/>} />
        <Route path="/register" element={<Register setCookie={setCookie}/>} />
      </Routes>
    </>
  )
}

export default App
