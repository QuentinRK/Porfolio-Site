import React from 'react'

const Hero = ({ name, job }) => {
    return (
        <div className="hero-container">
        <article>
        <h1>{name}</h1>    
        <h3>{job}</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, perferendis.</p>
        </article>            
        </div>
    )
}

export default Hero
