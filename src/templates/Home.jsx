import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Map from '../components/Map'
import Membros from '../components/Membros'

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Main />
        <Map />
        <Membros />
      </main>
    </div>
  )
}

export default Home
