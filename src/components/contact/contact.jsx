import React from 'react'
import './contact.css'
import { Link } from 'react-scroll'
import Linkedin from '../../assets/linkedin.svg'

const Contact = () => {
    return (
      <section id="contact">
          <h1 className="contactPageTitle">Contact Me</h1>
          <span className="contactDesc">Please fill out the form below to get in touch</span>
          <div className="contactForm">
            <input type="text" className="name" placeholder='Your Name' />
            <input type="text" className="email" placeholder='Your Email Address' />
            <textarea name="message" className="msg" rows='5' placeholder='Your Message'></textarea>
            <button type='submit' value='Send' className="submitBtn">Submit</button>
          </div>
          <div className="links">
              <a href="https://www.linkedin.com/in/clemom" target='_blank' rel='noreferrer'><img src={Linkedin} alt="" className="link" /></a>
            </div>
      </section>
    )
}
 
export default Contact