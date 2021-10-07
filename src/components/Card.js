import React from 'react'
import '../styles/card.scss'

const Card = ({ name, projectName}) => {
    return (
        <div className="card">
        <div className="card-container">

        <h4 className="project-title"><b>{name}</b></h4>

        <h3 className="description-tag">Description</h3>
        <hr/>
        <p className="project-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"</p>
        <button className="btn">
            View
        </button>
        </div>
        </div>
    )
    }

export default Card
