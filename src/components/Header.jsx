import React from 'react'
import { Link } from 'react-router-dom'



export default function Header() {
  return (
    <header>
      <div id="header-home">
        <Link to="/">Home</Link>
      </div>
      <nav>
        <Link to="/pirate">Pirate</Link>
        <Link to="/chef">Chef</Link>
        <Link to="/minion">Minion</Link>
      </nav>
    </header>
  )
}

