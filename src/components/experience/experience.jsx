import React from 'react'
import './experience.css'

const Experience = () => {
    return (
        <section id="experience">
            <h2 className="sectionTitle">My Experience</h2>
            <div className="experienceDivs">
                {/* <p className="experienceDesc">Here are recent highlights of my education and professional experience</p> */}
                <div class='certifications'>
                    <h3 className="sectionh3">Professional Certifications</h3>
                    <ul className="certificationLinks">
                        <li ><a className="btn" href="https://www.coursera.org/account/accomplishments/verify/8PLKWMH8RHM8" rel="noreferrer" target='_blank'>Google AI Essentials- Google</a></li>
                        <li ><a className="btn" href="https://www.coursera.org/account/accomplishments/verify/YH8JVJOBCAMM" rel="noreferrer" target='_blank'>Programming with Python by Meta</a></li>
                        <li ><a className="btn" href="https://www.sololearn.com/en/certificates/CT-T7826LE4" rel="noreferrer" target='_blank'>Javascript by Sololearn</a></li>
                        <li ><a className="btn" href="https://www.coursera.org/account/accomplishments/verify/95MUU3YXRKEE" rel="noreferrer" target='_blank'>Introduction to Back-End Development by Meta</a></li>
                    </ul>
            </div>
            <a rel="noopener noreferrer" href="/ClemsResume.pdf" target="_blank" class="btn"> View My Resume </a>
            </div>
            
        </section>
    )
}

export default Experience