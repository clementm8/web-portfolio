import React from 'react'
import './projects.css'

const Projects = () => {
    return (
      <section id="projects">
        <h2 className="projectsTitle">My Projects</h2>
        <span className="projectDesc">Here are some projects that I have built for courses while in college, and out of personal interest. I am excited to bring my skills and experience to help businesses achieve their goals.</span>
        <div className="projectDivs">
            <div className="projectItem">
              <p className="projectTitle">AI Weather App</p>
              <div className="projectItemDesc">
                <p>In this project I integrated the OpenAI API into a JavaScript-based web app. I took a React-based weather app, added a heavy dose of AI, and created an interactive experience that knows what location you want weather information from, explains the weather data in simple language, and even suggests what to wear. This project taught me about API integrations, user-based authentication, storing user tokens in a ServiceWorker, task-based API configuration, and sending and receiving requests to the API.</p>
              </div>
            </div>
            <div className="projectItem"></div>
            <div className="projectItem"></div>
            <button className="projectsBtn">See More</button>
        </div>
      </section>
    )
}
 
export default Projects