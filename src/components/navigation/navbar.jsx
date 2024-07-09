import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.svg'
import { Link } from 'react-scroll'
import Menu from '../../assets/menu.svg'

const Navbar = () => {
    const [showMenu, setShowMenu]= useState(false)
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo' />
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-10} duration={500} className="desktopMenuListItem">Projects</Link>
                <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-250} duration={500} className="desktopMenuListItem">My Experience</Link>
            </div>
            <button className="desktopMenuBtn" onClick={()=>{
                document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
            }}>
                <img src={contactImg} alt="" className="desktopMenuImg" />
                Contact Me
            </button>

            <img src={Menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)} >About</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-10} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
                <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-250} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>My Experience</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-250} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact Me</Link>
            </div>
        </nav>
    )
}

export default Navbar