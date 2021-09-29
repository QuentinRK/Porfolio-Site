import React from 'react'
import codeCard from '../images/code-card.jpg'

const Project = ({ name, projectName}) => {
    return (

        <div className="card">
        <img src={codeCard} alt="coding" style={{width: "100%", 
                                                "border-radius": "5px 5px 0 0"}}/>
        
        <div className="card-container">

        <h4><b>{name}</b></h4>
        <p>{projectName}</p>
        </div>
        </div>
    )
}

export default Project
