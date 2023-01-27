import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-red-800 py-4 text-white font-bold font-mono">
      <div className="flex flex-col items-center justify-between px-12 md:flex-row">
        <h1 class="text-2xl">Logo</h1>

        <nav className="w-56">
          <ul className="flex justify-between">
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
