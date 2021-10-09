import React from 'react'
import '../../styles/contact.scss'

const Contact = () => {
    return (
        <div className="contact-container">
        <form>
        <label for="Name">Name:</label><br/>
        <input type="text" id="name" name="name"/><br/>

        <label for="Email">Email:</label><br/>
        <input type="email" id="email" name="email"/><br/>

        <label for="Message">Message:</label><br/>
        <textarea id="message" name="message" rows="8"/>
        </form><br/>

        <button type="submit" className="btn">Send Message</button>
        </div>
    )
}

export default Contact
