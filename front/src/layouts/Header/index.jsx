import React from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header id='header'>
      <nav id='nav'>
        <div className="logo">
          <h3>Floral Studio</h3>
        </div>
        <div className="navBtns">
          <ul>
            <NavLink to={"/"} className={true ? "activeNavLink" : "pendingNavLink"}>
            <li>Home</li>
            </NavLink>
            <NavLink to={"/AddPage"} className={true ? "activeNavLink" : "pendingNavLink"}>
            <li>Add</li>
            </NavLink >
            <NavLink to={"/"} className={true ? "activeNavLink" : "pendingNavLink"}>
            <li>Contact</li>
            </NavLink>
            <NavLink to={"/"} className={true ? "activeNavLink" : "pendingNavLink"}>
            <li>Pricing</li>
            </NavLink>
            <NavLink to={"/"} className={true ? "activeNavLink" : "pendingNavLink"}>
            <li>Portfolio</li>
            </NavLink>
            
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header