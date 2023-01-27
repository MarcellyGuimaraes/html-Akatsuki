import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../templates/Home'
import Membros from './Membros'

const Header = () => {
  return (
    <header>
      <div className="bg-red-600">
        <h1>
          <img src="./img/logo.png" alt="" />
        </h1>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/members">Membros</Link>
            </li>
            <li>
              <Link to="/history">História</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
