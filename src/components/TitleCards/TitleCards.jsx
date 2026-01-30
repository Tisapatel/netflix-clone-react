import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'

const TitleCards = ({ title, category }) => {

  const [apiData, setApiData] = useState([])
  const cardsRef = useRef()

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer YOUR_TMDB_TOKEN'
    }
  }

  const handleWheel = (event) => {
    event.preventDefault()
    cardsRef.current.scrollLeft += event.deltaY
  }

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`,
      options
    )
      .then(res => res.json())
      .then(res => setApiData(res.results || []))
      .catch(err => console.error(err))

    const el = cardsRef.current
    el.addEventListener('wheel', handleWheel)

    return () => {
      el.removeEventListener('wheel', handleWheel)
    }
  }, [])

  return (
    <div className="title-cards">
      <h2>{title?title : "Popular on Netflix"}</h2>

      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => (
          card.poster_path && (
            <div className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500`+card.poster_path}
                alt=''
              />
              <p>{card.original_title}</p>
            </div>
          )
        ))}
      </div>
    </div>
  )
}

export default TitleCards
