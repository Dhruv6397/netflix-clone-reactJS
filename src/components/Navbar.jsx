import React from 'react'
import NavLogo from './NavLogo.png'
import './Nav.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';

export default function Navbar() {
  return (
    <>
    <nav> 
        <header className='logo'><img className='imglogo' src={NavLogo} alt='NavLogo'/></header>
        <ul className='list'>    
            <li className='item'>Home</li>
            <li className='item'>TV Shows</li>
            <li className='item'>Movies</li>
            <li className='item'>New & Popular</li>
            <li className='item'>My List</li>
            <li className='item'>Browse by Languages</li>
        </ul>
        <div className="sidcmp">
            <SearchRoundedIcon/>
            <span>chlidren</span>
            <NotificationsNoneRoundedIcon/>
        </div>
      </nav>
    </>
  )
}
