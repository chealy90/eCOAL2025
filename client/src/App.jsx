import { Route, Routes } from "react-router-dom"

import './App.css'

import Home from './components/Home'
import UserPage from './components/UserPage'

function App() {

  return (
    <Routes>
      <Route path="/" element=<Home /> />
      <Route path="/user-page" element=<UserPage /> />
      <Route path='*' element={<h4>Error 404</h4>} />
    </Routes>
  )
}

export default App
