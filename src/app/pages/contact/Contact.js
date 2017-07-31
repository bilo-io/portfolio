import React from 'react';
import './contact.scss';
import axios from 'axios';
// import envs from '../../envs';
export default class Contact extends React.Component {
    
    constructor(props) {
        super(props);
        this.sendEmail = this.sendEmail.bind(this);
        // console.log({ envs });
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
                    <button onClick={ () => { this.sendEmail }}>SEND</button>
                </div>    
            </div>
        )
    }

    sendEmail() {
    }
}