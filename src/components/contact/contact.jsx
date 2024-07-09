import React from 'react'
import './contact.css'
import { Link } from 'react-scroll'
import Linkedin from '../../assets/linkedin.svg'

const Contact = () => {
    return (
      <section className="contactPage">
        <div className="clients">
        <h1 className="contactPageTitle">My Experience</h1>
        {/* <p className="experienceDesc">Here are recent highlights of my education and professional experience</p> */}
        </div>
        <div id="experience">
        <div className="experienceItem">
        <p className="experienceTitle">Professional Certifications</p>
              <ul className="certificationLinks">
              <Link> <button className="btn"><li className="projectLink"></li>Google AI Essentials- Google</button></Link>
              <Link> <button className="btn"><li className="projectLink"></li>IT Support Certificate- Google</button></Link>
              <Link> <button className="btn"><li className="projectLink"></li>Programming with Python by Meta</button></Link>
              <Link> <button className="btn"><li className="projectLink"></li>Javascript by Sololearn</button></Link>
              <Link> <button className="btn"><li className="projectLink"></li>Introduction to Back-End Development by Meta</button></Link>
              </ul>
          </div>
        </div>
        <Link> <button className="btn">My Resume</button></Link>
        <div id="contact">
          <h1 className="contactPageTitle">Contact Me</h1>
          <span className="contactDesc">Please fill out the form below to discuss any work oportunities</span>
          <div className="contactForm">
            <input type="text" className="name" placeholder='Your Name' />
            <input type="text" className="email" placeholder='Your Email Address' />
            <textarea name="messae" className="msg" rows='5' placeholder='Your Message'></textarea>
            <button type='submit' value='Send' className="submitBtn">Submit</button>
            <div className="links">
              <img src={Linkedin} alt="" className="link" />
            </div>
          </div>
        </div>
      </section>
    )
}
 
export default Contact