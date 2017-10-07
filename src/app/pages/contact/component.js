import React from 'react';
require('./style.scss');

export class Contact extends React.Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.setState({mailObject: {}})
    }
    render() {
        return (
            <div className='contact-container'>
                <div className='contact-form'>
                    <h2>contact me via email</h2>
                    <p>Drop me a line or two and I'll try to get back to you!</p>
                    <input
                        type="text"
                        placeholder="your email"
                        onChange={(e) => this.updateMailObject({email: e.target.value})}/>
                    <input
                        type="text"
                        placeholder="must be 'bout something"
                        onChange={(e) => this.updateMailObject({subject: e.target.value})}/>
                    <textarea
                        placeholder={"... so what is your message?"}
                        onChange={(e) => this.updateMailObject({message: e.target.value})}/>
                    <br/>
                    <button
                        onClick={() => {
                        this
                            .props
                            .sendEmail(this.state.mailObject)
                    }}>SEND</button>
                </div>
            </div>
        )
    }
    updateMailObject(obj) {
        this.setState({
            mailObject: {
                ...this.state.mailObject,
                ...obj
            }
        })
    }
}

export default Contact;