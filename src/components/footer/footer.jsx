import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <section className="footer">
    <div className="footer-wrapper">
      <div className="sec-1">
        <a href="/"><i class="fas fa-drafting-compass"></i>Aptiloo</a>
        <p>Coaching and student management made easy, in one connected platform.</p>
      </div>
      <div className="sec-2">
        <div className="social-icons">
        <i class="fab fa-facebook-square fa-2x"></i>
        <i class="fab fa-instagram-square fa-2x"></i>
        <i class="fab fa-twitter-square fa-2x"></i>
        </div>
        <p>© Aptiloo Education Pty Ltd 2021 •</p>  
      </div>
    </div>
    </section>
  )
}

export default Footer
