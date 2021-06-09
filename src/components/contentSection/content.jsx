import React from 'react'
import './content.css'
import coachingSvg from '../../assets/coaching.svg'
import studentSvg from '../../assets/3.svg'
import parentSvg from '../../assets/2.svg'

const Content = () => {
  return (
    <section className='aptiloo-content'>
    <div className="content-wrapper">
      <h1>why choose aptiloo?</h1>
      <section className="section-wrapper">
        <div className="svg">
          <img src={coachingSvg} alt="coaching svg" />
        </div>
        <div className="content">
          <h6>aptiloo for coachings</h6>
          <h2>Transform your processes,deliver better learning</h2>
          <p>Empower staff with the AI driven tools and time to improve student learning outcomes</p>
          <a href='#'>discover more</a>
        </div>
      </section>
      <section className="section-wrapper student-wrapper">
        <div className="svg">
          <img src={studentSvg} alt="coaching svg" />
        </div>
        <div className="content">
          <h6>aptiloo for students</h6>
          <h2>Play a central role in your child’s school experience</h2>
          <p>Gain detailed insights into your child’s education while connecting with the wider school community.</p>
          <a href="#">discover more</a>
        </div>
      </section>
      <section className="section-wrapper">
        <div className="svg">
          <img src={parentSvg} alt="coaching svg" />
        </div>
        <div className="content">
          <h6>aptiloo for parents</h6>
          <h2>Play a central role in your child’s school experience</h2>
          <p>Gain detailed insights into your child’s education while connecting with the wider school community.</p>
          <a href="#">discover more</a>
        </div>
      </section>
    </div>
    </section>
  )
}

export default Content
