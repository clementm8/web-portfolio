import React from 'react'
import './projects.css'

const Projects = () => {
    return (
      <section id="projects">
        <h2 className="projectsTitle">My Projects</h2>
        <span className="projectDesc">Here are some projects that I have built for courses while in college, and out of personal interest. I am excited to bring my skills and experience to help businesses achieve their goals.</span>
        <div className="projectDivs">
            <div className="projectItem"></div>
            <div className="projectItem"></div>
            <div className="projectItem"></div>
            <button className="projectsBtn">See More</button>
        </div>
      </section>
    )
}
 
export default Projects