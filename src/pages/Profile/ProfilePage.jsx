import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ProfilePage.css'
import { auth } from '../../firebase/config'

// 🔥 Import images from src/assets
import cartoon1 from '../../assets/avatars/cartoon1.png'
import cartoon2 from '../../assets/avatars/cartoon2.png'
import cartoon3 from '../../assets/avatars/cartoon3.png'
import cartoon4 from '../../assets/avatars/cartoon4.png'

const ProfilePage = () => {
  const [user, setUser] = useState(null)
  const [avatar, setAvatar] = useState(null) 
  const navigate = useNavigate()

  const defaultAvatars = [cartoon1, cartoon2, cartoon3, cartoon4]

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (!currentUser) {
        navigate('/login') 
      } else {
        setUser(currentUser)
        // Randomly pick one avatar only once
        const randomAvatar =
          defaultAvatars[Math.floor(Math.random() * defaultAvatars.length)]
        setAvatar(randomAvatar)
      }
    })
    return () => unsubscribe()
  }, [navigate])

  const goToHome = () => {
    navigate('/') 
  }

  if (!user || !avatar) return null

  return (
    <div className="profile-page">
      <h1>Who's watching?</h1>

      <div className="profiles">
        {/* User Profile Card */}
        <div className="profile-card" onClick={goToHome}>
          <img src={avatar} alt="Profile" />
          <p>{user.displayName || 'User'}</p>
        </div>

        {/* Add new profile button */}
        <div className="profile-card add-profile">
          <div className="plus">+</div>
          <p>Add Profile</p>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
