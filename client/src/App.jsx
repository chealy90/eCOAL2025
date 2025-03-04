import { Route, Routes } from "react-router-dom"

import './App.css'

import Home from './components/Home'
import Popular from "./components/Popular"
// import UserPage from './components/UserPage'

function App() {

  return (
    <Routes>
      <Route path="/" element=<Home /> />
      <Route path="/popular" element=<Popular /> />
      <Route path='*' element={<h4>Error 404</h4>} />
    </Routes>
  )
}

export default App
