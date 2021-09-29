import React from 'react'
import Project from './Project.js'
import SectionHeader from './SectionHeader.js'

const Projects = () => {
    // Opportunity to 
    
    return (
        <div className="projects-container">
            <SectionHeader title="Project"/>
            <div className="projects-card-container">
            <Project name="Project1" projectName="Project1 Name"/>
            <Project name="Project2" projectName="Project2 Name"/>
            <Project name="Project3" projectName="Project3 Name"/>
            </div>
        </div>
    )
}

export default Projects
