import React from 'react'
import Card from './Card.js'
import SectionHeader from './SectionHeader.js'
import '../styles/projects.css'

const Projects = () => {    
    return (
        <div className="projects-container">
            <SectionHeader title="Project"/>
            <div className="projects-card-container">
            <Card name="Project1" projectName="Project1 Name"/>
            <Card name="Project2" projectName="Project2 Name"/>
            <Card name="Project3" projectName="Project3 Name"/>
            </div>
        </div>
    )
}

export default Projects
