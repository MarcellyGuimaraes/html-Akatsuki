import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-red-900 py-4 text-white font-bold font-mono shadow-2xl shadow-neutral-900">
      <div className="flex flex-col items-center justify-between px-28 md:flex-row">
        <h1 className="text-2xl">Logo</h1>

        <nav className="w-56">
          <ul className="flex justify-between">
            <li className=" hover:text-red-500">
              <Link to="/">Home</Link>
            </li>
            <li className=" hover:text-red-500">
              <Link to="/members">Membros</Link>
            </li>
            <li className=" hover:text-red-500">
              <Link to="/history">História</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
