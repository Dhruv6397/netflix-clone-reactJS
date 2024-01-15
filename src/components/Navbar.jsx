import React from 'react'
import NavLogo from './NavLogo.png'

export default function Navbar() {
  return (
    <>
    <header>
        <img src={NavLogo} alt='NavLogo'/>
    </header>
      <nav>
        <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
        </ul>
      </nav>
    </>
  )
}
