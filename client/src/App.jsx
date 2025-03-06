import { Route, Routes } from "react-router-dom"

import './App.css'

import Home from './components/Home'
import Popular from "./components/Search"
import UserProfile from "./components/UserProfile"

function App() {

  return (
    <Routes>
      <Route path="/" element=<Home /> />
      <Route path="/search" element=<Search /> />
      <Route path="/profile" element=<UserProfile /> />
      {/* <Route path="/articles/:id" element=<Detail /> /> */}
      <Route path='*' element={<h4>Error 404</h4>} />
    </Routes>
  )
}

export default App
