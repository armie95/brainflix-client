import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo/BrainFlix-logo.svg'
import profileImage from '../../assets/Images/Mohan-muruge.jpg'
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className="nav" id="top">
      <NavLink to="/" className="nav__home-link">
        <img src={logo} alt="Brain Flix logo" className="nav__logo" />
      </NavLink>
      <div className="nav__search-container">
        <input
          className="nav__search-input"
          type="text"
          name="search"
          id="search"
          placeholder="Search"
        />
        <NavLink to="/upload" className="nav__upload-link">
          <button className="nav__upload-btn">
            <div className="nav__upload-icon"></div> upload
          </button>
        </NavLink>
        <div className="nav__profile-image-container">
          <img
            src={profileImage}
            alt="User Avatar"
            className="nav__profile-image"
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
