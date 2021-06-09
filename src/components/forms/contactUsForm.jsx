import React from 'react'
import "./contactUsForm.css"

const ContactUsForm = () => {
  return (
    <section className="form-wrapper">
      <div className="form-content">
        <h1>Let's get in touch</h1>
        <p>Need to contact us? Just use this form.</p>
      </div>
      <hr className="solid"/>
      <div className="contact-us-form">
        <form action="">
          <input type="email" placeholder="Your Email Address"/>
          <textarea name="message" id="message" placeholder="Your Message..." cols="30" rows="5"></textarea>
          <button className="send-message-btn">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default ContactUsForm
