import React from 'react'
import Fade from 'react-reveal/Fade'
import '../styles/hero.scss'
const Hero = ({ name, job }) => {
    return (
        <div className="hero-container"> 
        <div className="hero">
        <article>

        <Fade left>
        <h1>{name}</h1>    
        <h3>{job}</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, perferendis.</p>
        </Fade>
        </article>            
        </div>
        </div>
    )
}

export default Hero
