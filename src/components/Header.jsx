import React from 'react'

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
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="membros.html">Membros</a>
            </li>
            <li>
              <a href="historia.html">História</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
