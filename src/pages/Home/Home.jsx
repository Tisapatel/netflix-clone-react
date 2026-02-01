import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/banner.png'
// import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />

     <div className="hero">
  <img src={hero_banner} alt="" className="banner-img" />

  <div className="hero-caption">
    <h2>BRIDGERTON</h2>

    <p>
      Dreams collide with duty as a maid and a Bridgerton bachelor fall
      for each other against all odds.
    </p>

    <div className="hero-btns">
      <button className="btn">
        <img src={play_icon} alt="" />
        Play
      </button>

      <button className="btn dark-btn">
        <img src={info_icon} alt="" />
        More Info
      </button>
    </div>
  </div>
</div>


      <div className="more-cards">
        <TitleCards />
        <TitleCards title="Blockbuster Movies" category="top_rated" />
        <TitleCards title="Only on Netflix" category="now_playing" />
        <TitleCards title="Upcoming" category="upcoming" />
        <TitleCards title="Top Picks for You" category="popular" />
      </div>

      <Footer />
    </div>
  )
}

export default Home
