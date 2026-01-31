import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useParams, useNavigate } from 'react-router-dom'

const Player = () => {

  const { id } = useParams()          // ✅ movie id from URL
  const navigate = useNavigate()      // ✅ back navigation

  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    type: ''
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
    }
  }

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then(res => res.json())
      .then(data => {
        const trailer = data.results.find(
          vid => vid.type === 'Trailer' && vid.site === 'YouTube'
        )

        if (trailer) {
          setApiData(trailer)
        }
      })
      .catch(err => console.error('Trailer error:', err))
  }, [id])

  return (
    <div className='player'>
      {/* BACK BUTTON */}
      <img
        src={back_arrow_icon}
        alt="back"
        className="back-btn"
        onClick={() => navigate(-1)}
      />

      {/* VIDEO */}
      {apiData.key && (
        <iframe
          width="90%"
          height="90%"
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title="trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}

      {/* INFO */}
      <div className="player-info">
        <p>{apiData.published_at?.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
