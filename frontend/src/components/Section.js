import React from 'react';
import Bounce from 'react-reveal/Bounce';
import SectionHeader from './SectionHeader'
import '../styles/section.scss'

const Section = () => {

    return (

        <>
        <div className="section-container" id="about">
        <Bounce>
        <SectionHeader title="About Me"/>
        <div className="section-content">

        <p className="aboutme-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam asperiores explicabo veritatis ut, repudiandae id necessitatibus quod qui excepturi voluptates modi recusandae laudantium magnam illum sit quisquam impedit rem, beatae a! Aut velit iusto quis, quas maxime voluptates ipsum tenetur et perspiciatis modi impedit repellat repellendus debitis expedita, id accusamus!</p>
        </div>
        </Bounce>
        </div>
        </>
    )
}

export default Section
