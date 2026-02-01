import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import { Link } from 'react-router-dom'

const TitleCards = ({ title, category }) => {

  const [apiData, setApiData] = useState([])
  const cardsRef = useRef(null)

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
    }
  }

  const handleWheel = (event) => {
    event.preventDefault()
    cardsRef.current.scrollLeft += event.deltaY
  }

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category || 'now_playing'}?language=en-US&page=1`,
      options
    )
      .then(res => res.json())
      .then(data => setApiData(data.results || []))
      .catch(err => console.error('TMDB ERROR:', err))

    const el = cardsRef.current
    el.addEventListener('wheel', handleWheel, { passive: false })

    return () => el.removeEventListener('wheel', handleWheel)
  }, [category])

  return (
    <div className="title-cards">
      <h2>{title || 'Popular on Netflix'}</h2>

      <div className="card-list" ref={cardsRef}>
        {apiData.map(movie => (
          movie.poster_path && (
            <Link to={`/player/${movie.id}`} className="card" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />

              {/* Hover overlay */}
              <div className="card-overlay">
                <p className="card-title">{movie.title}</p>
                <button className="watch-btn">
                  <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Watch Now
                </button>
              </div>
            </Link>
          )
        ))}
      </div>
    </div>
  )
}

export default TitleCards