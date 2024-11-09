import React from 'react'
import './skills.css'
import programming from '../../assets/programming.svg'
import integrate from '../../assets/integrate.svg'
import problemSolving from '../../assets/problemSolving.svg'

const Skills = () => {
    return (
      <section id="skills">
        <span className="skillsTitle">What I do</span>
        <span className="skillsDesc">Solving your technical problems with solutions that work. I have experience with multiple platforms and services that online businesses use including but not limited to Shopify, Google Tag Manager, Google Analytics, Stackadapt, and I am willing to learn more.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={programming} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Programming</h2>
                    <p>Building web applications and scripts that make your life easier</p>
                </div>
            </div>
        </div>
        <div className="skillBars">
            <div className="skillBar">
                <img src={integrate} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Integration and Implementation</h2>
                    <p> I'll do the heavy lifting and set things up so you dont have to.</p>
                </div>
            </div>
        </div>
        <div className="skillBars">
            <div className="skillBar">
                <img src={problemSolving} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Problem Solving</h2>
                    <p>Tech problems? Solved. Fast and easy</p>
                </div>
            </div>
        </div>
        
      </section>
    )
}
 
export default Skills