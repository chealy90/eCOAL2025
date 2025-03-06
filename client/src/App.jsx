import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Header from './components/Header'
import CreateArticle from './components/CreateArticle'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home.jsx'
import { useCookies } from 'react-cookie'
import { Routes, Route, Link } from 'react-router'
import react from 'react'
import Article from './components/Article.jsx'
import Detail from './components/Detail.jsx'
import Footer from './components/Footer.jsx'

import UserProfile from "./components/UserProfile"
import Search from "./components/Search"


function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['mycookie']);

  return (
    <>

      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='createArticle' element={<CreateArticle setCookie={setCookie}/>}/>
        <Route path='/detail/:id' element={<Detail />}/>
        <Route path='/home' element={<Home />}/>
        <Route path="/login" element={<Login setCookie={setCookie}/>} />
        <Route path="/register" element={<Register setCookie={setCookie}/>} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<UserProfile cookies={cookies} removeCookie={removeCookie}/>} />
      </Routes>
      <Footer cookies={cookies}/>

    </>
  )
}

export default App
