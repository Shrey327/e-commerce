import React from 'react'
import './Navbar.css'
import logo from '../img/Slice_1__2_-removebg-preview.png'
const Navbar = () => {
  return (
    <div className='xyz'>
      <header className="Navbar">
      
      <div className="main">
      <div>
      
        <img
          className="header__logo"
          src={logo}
          alt=""
        />
      
      </div>
        <div className="ptag"><p>SHREYANSH</p></div>
        
        <div className="header__search">
        <input type="text" className="header__searchInput" />
      </div>

        
        </div>
        
        </header>
        
    </div>
  )
}

export default Navbar
