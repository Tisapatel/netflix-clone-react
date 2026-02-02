import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { useNavigate } from 'react-router-dom'
import { logout, auth } from '../../firebase/config'

const Navbar = () => {
  const navRef = useRef(null)
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  // Track logged in user
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser)
    })
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark')
      } else {
        navRef.current.classList.remove('nav-dark')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  const goToProfile = () => {
    navigate('/profile') // yeh tumhara profile page route
  }

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="logo" />

        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={search_icon} alt="" className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt="" className='icons' />

        {user && (
          <div className="navbar-profile">
            <img src={profile_img} alt="" className='profile' />
            <img src={caret_icon} alt="" />
            <div className="dropdown">
              <p onClick={goToProfile}>Manage Profiles</p>
              <p onClick={handleLogout}>Sign Out of Netflix</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
