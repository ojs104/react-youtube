import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Today from './pages/Today'
import Youtuber from './pages/Youtuber'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Home' element={<Home />}  />
        <Route path='/today' element={<Today/>} />
        <Route path='/youtuber' element={<Youtuber />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

