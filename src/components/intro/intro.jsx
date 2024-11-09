import React from 'react';
import './intro.css';
import bg from '../../assets/clem.png';
import btnImg from '../../assets/suitcase.svg';
import { Link } from 'react-scroll';
import HireMe from './hire-me';

const Intro = () => {
    return (
      <section id="intro">
        <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText"> I&apos;m <span className="introName">Clem </span><br /> Technical Web Specialist</span>
        <p className='introPara'>Tech doesn&apos;t have to be a headache—let me handle it so you can focus on matters most.</p>
        <Link activeClass='active' to='footer' spy={true} smooth={true} offset={-250} duration={500}><button className="btn"><img src={btnImg} alt="suitcase svg" className='btnImg' style={{ width: 'auto', height: 'auto' }}/>Hire Me</button></Link>
        <div className='tagLine'><i>Success through code</i></div>
        </div>
        <img src={bg} alt="headshot" className="bg" />
      </section>
    )
}
 
export default Intro
