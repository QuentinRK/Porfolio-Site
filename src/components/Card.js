import React from 'react'
import codeCard from '../images/code-card.jpg'
import '../styles/card.css'

const Card = ({ name, projectName}) => {
    return (

        <div className="card">
        <img className="card-img" src={codeCard} alt="coding"/>
        
        <div className="card-container">

        <h4 className="project-title"><b>{name}</b></h4>
        <p className="project-name">{projectName}</p>
        <button className="btn">
            View
        </button>
        </div>
        </div>
    )
}

export default Card
