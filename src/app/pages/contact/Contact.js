import React from 'react';
import './contact.scss';
export default class Contact extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='contact-container'>
                <div className='contact-form'>
                    <h2>contact me</h2>
                    <p>Drop me a line or two and I'll try to get back asap!</p>
                    <input type="text" placeholder="your email"/>
                    <input type="text" placeholder="must be 'bout something" />
                    <textarea placeholder={"... so what is your message?"} /> 
                    <br />
                    <button>SEND</button>
                </div>    
            </div>
        )
    }
}