import React from 'react'
import Main from '../components/Main'
import Map from '../components/Map'
import Membros from '../components/Membros'

const Home = () => {
  return (
    <main className="font-mono bg-red-900 text-white">
      <Main />
      <Map />
      <Membros />
    </main>
  )
}

export default Home
