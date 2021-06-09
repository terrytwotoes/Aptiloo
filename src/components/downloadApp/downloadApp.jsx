import React from 'react'
import './downloadApp.css'
import mobileSvg from '../../assets/mobile.svg'

const DownloadApp = () => {
  return (
    <section className="download">
    <div className="download-wrapper">
      <div className="mobile-svg">
        <img src={mobileSvg} alt="" />
      </div>
      <div className="download-app">
        <h2>Get the Aptiloo mobile app</h2>
        <p>Access mock tests and question banks for free with Aptiloo app.</p>
        <button className="btn download">Download the app</button>
      </div>
    </div>
    </section>
  )
}

export default DownloadApp
