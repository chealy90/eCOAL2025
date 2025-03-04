import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Header from './components/Header'
import CreateArticle from './components/CreateArticle'
function App() {
  

  return (
    <>
      <Header />
      <CreateArticle />
    </>
  )
}

export default App
