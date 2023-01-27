import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Historia from './templates/Historia'
import Home from './templates/Home'
import Membros from './templates/Membros'

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/members" element={<Membros />} />
          <Route path="/history" element={<Historia />} />
        </Routes>
        <Footer />
      </>
    </Router>
  )
}

export default App
