import React, { useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'; 
import { animateScroll as scroll } from 'react-scroll';
import '../styles/header.scss'

const Header = () => {
    
    const location = useLocation()
    const pathname = window.location.pathname
    
    const [header, setHeader] = useState("header")

    const listenScrollEvent = () => {
        window.scrollY > 10 ? setHeader("header2") : setHeader("header")
        
    }
    
    useEffect(() => {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem){
                elem.scrollIntoView({behaviour: "smooth"})
            } else {
                window.scrollTo({top:0, left:0, behavior: "smooth"})
            }
        }


        window.addEventListener('scroll', listenScrollEvent);

        return () => window.removeEventListener('scroll', listenScrollEvent);

    }, [location,])

    const scrollTop = () => {
        scroll.scrollToTop()
    }


    return (
        <div className="header-container">
        <div className={header}>
        <h1 className="title" onClick={scrollTop}>My First React App</h1>
        <nav className="navbar">
            <ul className="navbar-items">
                <li className="navbar-item">
                    <Link className="links" to='/' onClick={() => {
                        if (pathname === "/"){
                            scrollTop()
                        }
                    }}>Home</Link>
                </li>
                <li className="navbar-item"><Link className="links"  to="/#about">About</Link></li>
                <li className="navbar-item">

                    <Link className="links"  to="/#projects">Projects</Link>
                </li>

                <li className="navbar-item">
                <Link className="links"to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
        </div>
        </div>

        
    )
}

export default Header
