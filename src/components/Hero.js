import React from 'react'
import '../styles/hero.css'
const Hero = ({ name, job }) => {
    return (
        <div className="hero-container"> 
        <div className="hero">
        <article>
        <h1>{name}</h1>    
        <h3>{job}</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, perferendis.</p>
        </article>            
        </div>
        </div>
    )
}

export default Hero
