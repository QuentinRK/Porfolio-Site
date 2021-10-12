import React, { useEffect, useState } from 'react';
import Bounce from 'react-reveal/Bounce';
import SectionHeader from './SectionHeader'
import '../styles/section.scss'
import { request} from './Request'

const Section = () => {

    const [bio, setBio] = useState()  

    useEffect(() => {

        const getBio = async () =>{

            await request.get('about-me')
                .then(res => {
                    console.log(res)
                    if (res.data.length > 0){
                        
                        setBio(res.data[0].bio)
                    }

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
