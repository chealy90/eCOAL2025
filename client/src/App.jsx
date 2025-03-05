import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import react from 'react'
import axios from "axios";
import './App.css'
import {Route, Link, Routes} from "react-router-dom"
import Header from './components/Header'
import Article from './components/Article.jsx'
import Detail from './components/Detail.jsx'



function App() {
  

  return (
    <>
       <Header />


    <nav>
      <Link to="/article">Article</Link>
      <Link to="/detail/:id">Detail</Link>
    </nav>

    <Routes>
      <Route path="/article" element={<Article />} />
      <Route path="/detail/:id" element={<Detail />} />

    </Routes>
    
 
    </>
  )
}

export default App
