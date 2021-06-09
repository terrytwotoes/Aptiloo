import React from 'react'
import './hero.css'
import svgBg from '../../assets/5.svg'

const Hero = () => {
  return (
    <div className="hero">
      <section className="hero-wrapper">
        <div className="big-image">
          <img className='img-1' src={svgBg} alt="" />
        </div>
        <div className="hero-content">
          <h1 className="hero-heading"><span>Smarter </span>study management in one connected platform</h1>
          <p className='hero-para'>Say farewell to multiple systems and programs, our web based school management system connects every facet of your school to simplify the complex.</p>
        </div>
      </section>
    </div>
  )
}

export default Hero
