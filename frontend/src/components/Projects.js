import React, { useEffect, useState } from 'react'
import Card from './Card.js'
import Fade from 'react-reveal/Fade';
import SectionHeader from './SectionHeader.js'
import '../styles/projects.scss'
import axios from 'axios';

const Projects = () => {    
    const request = axios.create({
        baseURL: "http://127.0.0.1:8000/api"
    })

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = async () => {

            await request.get('projects')
            .then(res => {
                res.data.forEach(element => {
                    const item = <Card name={ element.title } description={ element.description} link={element.link} />
                    return setProjects(array => [...array, item])

                });
            })
        }

        getProjects() 

    }, [])

    return (
        <Fade left>
        <div className="projects-container" id="projects">
            <SectionHeader title="Projects"/>
            <div className="projects-card-container">
                {projects}
            </div>
        </div>
        </Fade>
    )
}

export default Projects
