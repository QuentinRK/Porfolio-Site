import React from 'react'
import { AiFillLinkedin as Linkedin,
         AiFillGithub as Github,
         AiOutlineMail as Mail} from 'react-icons/ai'
import '../styles/footer.scss'

const Footer = () => {
    return (
        <div className="footer-container">
        <ul className="social-media">
        <Linkedin id="linkedin"/>
        <Github id="github"/>
        <Mail id="Mail"/>
        </ul>
        </div>
    )
}

export default Footer
