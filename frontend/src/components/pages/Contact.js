import React, {useState} from 'react'
import '../../styles/contact.scss'
import { request } from '../Request';
import Fade from 'react-reveal/Fade';

const Contact = () => {    

    const [response, setResponse] = useState()

    const clearForm = () => { document.getElementById('form').reset()};
    const refresh = (res) => { 
        console.log('Success')
        setResponse(res)
        console.log(response)
        clearForm()
        setTimeout(() => {
            setResponse()
        }, 8000)

    }

    const post = async (e) => {
        e.preventDefault();
        
        const  name = document.getElementsByName("name")[0].value;
        const  email = document.getElementsByName("email")[0].value;
        const  message = document.getElementsByName("message")[0].value;  
;

        await request.post('/email', {
            name: name,
            email: email,
            message: message,
        })                
        .then(res => {
            refresh(res.status) 
        })
        .catch(res => {
            refresh(res.response.status)       
        })
        }    


    return (
        <div className="contact-container">
        <form onSubmit={post} id='form'>
        <label for="Name">Name:</label><br/>
        <input type="text" id="name" name="name"/><br/>

        <label for="Email">Email:</label><br/>
        <input type="email" id="email" name="email"/><br/>

        <label for="Message">Message:</label><br/>
        <textarea id="message" name="message" rows="8"/>
        <br/>
        <button type="submit" className="btn">Send Message</button>
        </form>
        {response &&
            <Fade>
            <h4 className={response === 201 ? 'success-response' :  'error-response'}>{response === 201 ? 'Message Has Been Sent!' : 'An Error Occured'}</h4>
            </Fade>
        }
        </div>
    )
}

export default Contact
