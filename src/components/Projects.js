import React from 'react'
import Card from './Card.js'
import SectionHeader from './SectionHeader.js'
import '../styles/projects.scss'

const Projects = () => {    
    return (
        <div className="projects-container" id="projects">
            <SectionHeader title="Projects"/>
            <div className="projects-card-container">
            <Card name="Project1" projectName="Project1 Name"/>
            <Card name="Project2" projectName=""/>
            <Card name="Project3" projectName="Project3 Name"/>
            <Card name="Project4" projectName="Project4 Name"/>
            </div>
        </div>
    )
}

export default Projects
