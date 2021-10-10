import React from 'react'
import '../styles/card.scss'

const Card = ({ name, description, link}) => {
    return (
        <div className="card">
        <div className="card-container">

        <h4 className="project-title"><b>{name}</b></h4>

        <h3 className="description-tag">Description</h3>
        <hr/>
        <p className="project-description">{ description }</p>
        <a href={ link } className="btn">
            View { name }
        </a>
        </div>
        </div>
    )
    }

export default Card
