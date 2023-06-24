import React from 'react'
import SearchBar from './SearchBar'
import './NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar({ onSearch, logout }) {

  return (
    <div className='nav'>
      <SearchBar onSearch={onSearch} />
      <Link to="/favorites">
        <h4>Favorites</h4>
      </Link>
      <Link to="/home">
        <h4>Home</h4>
      </Link>
      <Link to="/about">
        <h4>About</h4>
      </Link>
      <Link to="/">
        <button onClick={logout}>Salir</button>
      </Link>
    </div>
  )
}
