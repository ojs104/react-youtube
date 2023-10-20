import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Today from './pages/Today'
import Youtuber from './pages/Youtuber'
import Not from './pages/Not'
import Header from './components/section/Header'
import Main from './components/section/Main'
import Footer from './components/section/Footer'
import Search from './pages/Search'


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/today' element={<Today/>} />
          <Route path='/youtuber' element={<Youtuber />}/>
          <Route path='*' element={<Not />}/>
          <Route path='/search/:searchId' element={<Search />}/>
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>

  )
}

export default App

