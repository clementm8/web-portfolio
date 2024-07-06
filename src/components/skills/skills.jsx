import React from 'react'
import './skills.css'
import programming from '../../assets/programming.svg'
import integrate from '../../assets/integrate.svg'
import problemSolving from '../../assets/problemSolving.svg'

const Skills = () => {
    return (
      <section id="skills">
        <span className="skillsTitle">What I do</span>
        <span className="skillsDesc">I am a skilled Technical Solutions Engineer with experience in <br />solving complex technical problems. I have a strong understanding of web development and programming. I have experience with multiple platforms that online businesses use such as Shopify, Google Tag Manager, Google Analytics, Stackadapt, and I am willing to learn more.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={programming} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Programming</h2>
                    <p>Building applications with React and writing scripts in Javascript</p>
                </div>
            </div>
        </div>
        <div className="skillBars">
            <div className="skillBar">
                <img src={integrate} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Integrations</h2>
                    <p>Experience working with REST and GraphQL APIs, using NodeJs to integrate systems</p>
                </div>
            </div>
        </div>
        <div className="skillBars">
            <div className="skillBar">
                <img src={problemSolving} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Problem Solving</h2>
                    <p>Effeciently solving complex technical problems using critical thinking and analytical skills.</p>
                </div>
            </div>
        </div>
      </section>
    )
}
 
export default Skills