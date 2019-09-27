import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {
  const navStyle = {
    color: 'white'
  }

  const navImg = {
    width: '50%'
  }

  return (
    <div>
      <nav>
        <Link  to="/">
          <img src="https://pbs.twimg.com/profile_images/1167221863103074305/Ziap6jxO_400x400.png" style={navImg} alt='logo-starwars'/>
        </Link>
        <ul className="nav-title">
          <Link style={navStyle} to="/character">
            <li>Character</li>
          </Link>
          <Link style={navStyle} to="/contact">             <li>Contact Me</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}
