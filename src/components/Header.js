import React from 'react'

const Header = ({ name }) => {
    return (
        <div className="container">
        <div className="header">
        <h1 className="title">My First React App</h1>
        <nav className="navbar">
            <ul className="navbar-items">
                <li className="navbar-item">
                    <a className="links" href="/">Home</a>
                </li>
                <li className="navbar-item">
                    <a className="links" href="/about">About</a>
                </li>
                <li className="navbar-item">
                    <a className="links" href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
        </div>
        </div>   
    )
}

export default Header
