import React from 'react'
import './projects.css'
import { Link } from 'react-scroll'

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projectsTitle">My Projects</h2>
      <span className="projectDesc">Here are my favorite projects that i've worked on so far.</span>
      <div className="projectDivs">
        <div className="projectItem">
          <p className="projectTitle">AI Weather App</p>
          <div className="projectItemDesc">
            <p>In this project I took a React-based weather app, added a heavy dose of AI, and created an interactive experience that knows what location you want weather information from, explains the weather data in simple language, and even suggests what to wear. This project taught me about API integrations, user-based authentication, storing user tokens in a ServiceWorker, task-based API configuration, and sending and receiving requests from the API.</p>
            <ul className='projectStack'>
              <li> <p className="techStackItem">Javascript</p></li>
              <li> <p className="techStackItem">React</p></li>
              <li> <p className="techStackItem">Open AI API</p></li>
              <li> <p className="techStackItem">Vercel</p></li>
            </ul>
            <ul className="projectLinks">
              <li className="projectLink">
                <a rel="noreferrer" href="https://github.com/clementm8/ai-weather-app" target="_blank" className="btn">
                  Source Code
                </a>
              </li>
              <li className="projectLink"><a rel="noreferrer" href="https://weather-ai-app-three.vercel.app/" target="_blank" className="btn"> Try it out </a></li>
            </ul>

          </div>
        </div>
        <div className="projectItem">
          <p className="projectTitle">To Do List</p>
          <div className="projectItemDesc">
            <p>In this project I built a simple to do list using React. By integrating my Firebase database into the app, tasks can be created, updated and deleted. This project taught me about CRUD operations using the Model View Controller design pattern, hosting projects on vercel, and how to build with react.</p>
            <ul className='projectStack'>
              <li> <p className="techStackItem">Javascript</p></li>
              <li> <p className="techStackItem">React</p></li>
              <li> <p className="techStackItem">Firebase</p></li>
              <li> <p className="techStackItem">Vercel</p></li>
            </ul>
            <ul className="projectLinks">
            <li className="projectLink"><a rel="noreferrer" href="https://github.com/clementm8/vanilla-to-do" target="_blank" className="btn"> Source Code </a></li>
              <li className="projectLink"><a rel="noreferrer" href="https://vanilla-to-do-xi.vercel.app/" target="_blank" className="btn"> Try it out </a></li>
            </ul>
          </div>
        </div>
        <div className="projectItem">
          <p className="projectTitle">GraphQL API</p>
          <div className="projectItemDesc">
            <p>In this project I built a GraphQL API using the Apollo client. This project taught me about how GraphQL works, making requests to a GraphQL API using NodeJs, and how to build queries and mutations.</p>
            <ul className='projectStack'>
              <li> <p className="techStackItem">Javascript</p></li>
              <li> <p className="techStackItem">Apollo</p></li>
            </ul>
            <ul className="projectLinks">
            <li className="projectLink"><a rel="noreferrer" href="https://github.com/clementm8/graphql-api" target="_blank" className="btn"> Source Code </a></li>
            <li className="projectLink"><a rel="noreferrer" href="" target="_blank" className="btn"> Query the API- coming soon </a></li>
            </ul>
          </div>
        </div>
        {/* <button className="projectsBtn">See More</button> */}
      </div>
    </section>
  )
}

export default Projects
