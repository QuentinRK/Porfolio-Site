import React from 'react'
import Card from './Card.js'
import Fade from 'react-reveal/Fade';
import SectionHeader from './SectionHeader.js'
import '../styles/projects.scss'

const Projects = () => {    
    return (
        <Fade left>
        <div className="projects-container" id="projects">
            <SectionHeader title="Projects"/>
            <div className="projects-card-container">
            <Card name="Project1" projectName="Project1 Name"/>
            <Card name="Project2" projectName=""/>
            <Card name="Project3" projectName="Project3 Name"/>
            <Card name="Project4" projectName="Project4 Name"/>
            </div>
        </div>
        </Fade>
    )
}

export default Projects
