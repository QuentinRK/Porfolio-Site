import React, { useEffect, useState } from 'react';
import Bounce from 'react-reveal/Bounce';
import SectionHeader from './SectionHeader'
import '../styles/section.scss'
import axios from 'axios';

const Section = () => {

    const [bio, setBio] = useState()  
    const request = axios.create({
            baseURL: "http://127.0.0.1:8000/api"
    })
    
    useEffect(() => {

        const getBio = async () =>{

            await request.get('about-me')
                .then(res => {
                    setBio(res.data[0].bio)
                })
        }

        getBio()
    }, [bio])

    return (

        <>
        <div className="section-container" id="about">
        <Bounce>
        <SectionHeader title="About Me"/>
        <div className="section-content">

        <p className="aboutme-text">{bio}</p>
        </div>
        </Bounce>
        </div>
        </>
    )
}

export default Section
