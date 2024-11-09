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
              <button className="btn"><li className="projectLink"><a href="https://www.coursera.org/account/accomplishments/verify/8PLKWMH8RHM8" rel="noreferrer" target='_blank'>Google AI Essentials- Google</a></li></button>
              <button className="btn"><li className="projectLink"><a href="https://www.coursera.org/account/accomplishments/verify/YH8JVJOBCAMM" rel="noreferrer" target='_blank'>Programming with Python by Meta</a></li></button>
              <button className="btn"><li className="projectLink"><a href="https://www.sololearn.com/en/certificates/CT-T7826LE4" target='_blank'>Javascript by Sololearn</a></li></button>
              <button className="btn"><li className="projectLink"><a href="https://www.coursera.org/account/accomplishments/verify/95MUU3YXRKEE" target='_blank'>Introduction to Back-End Development by Meta</a></li></button>
              </ul>
          </div>
        </div>
        <a rel="noopener noreferrer" href="/ClemsResume.pdf" target="_blank" class="btn"> My Resume </a>
        <div id="contact">
          <h1 className="contactPageTitle">Contact Me</h1>
          <span className="contactDesc">Please fill out the form below to get in touch</span>
          <div className="contactForm">
            <input type="text" className="name" placeholder='Your Name' />
            <input type="text" className="email" placeholder='Your Email Address' />
            <textarea name="messae" className="msg" rows='5' placeholder='Your Message'></textarea>
            <button type='submit' value='Send' className="submitBtn">Submit</button>
            <div className="links">
              <a href="https://www.linkedin.com/in/clemom" target='_blank' rel='noreferrer'><img src={Linkedin} alt="" className="link" /></a>
            </div>
          </div>
        </div>
      </section>
    )
}
 
export default Contact