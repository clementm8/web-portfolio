import React from 'react';
import './intro.css';
import bg from '../../assets/clem.png';
import btnImg from '../../assets/suitcase.svg';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
      <section id="intro">
        <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText"> I&apos;m <span className="introName">Clem </span><br /> Web Developer</span>
        <p className='introPara'>Working on your site doesn&apos;t have to be a headache <br /> Let me handle it so you can focus on what matters most</p>
        <button style={{ cursor: 'pointer' }} activeClass='active' to='footer' spy={true} smooth={true} offset={-250} duration={500} className="btn hire-me"><img src={btnImg} alt="suitcase svg" className='btnImg' />Hire Me</button>
        {/* <div className='tagLine'><i>Success through code</i></div> */}
        </div>
        <img src={bg} alt="headshot" className="bg" />
      </section>
    )
}
 
export default Intro
