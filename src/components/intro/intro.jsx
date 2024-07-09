import React from 'react'
import './intro.css'
import bg from '../../assets/clem.png'
import btnImg from '../../assets/suitcase.svg'
import { Link } from 'react-scroll'

const Intro = () => {
    return (
      <section id="intro">
        <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText"> I'm <span className="introName">Clem </span><br /> Technical Solutions Engineer</span>
        <p className='introPara'>I'm a skilled Technical Solutions Engineer with experience in <br />solving technical problems  and a passion for building software.</p>
        <Link> <button className="btn"><img src={btnImg} alt="suitcase svg" className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="headshot" className="bg" />
      </section>
    )
}
 
export default Intro