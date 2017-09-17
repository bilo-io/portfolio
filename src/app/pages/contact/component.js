import React from 'react';
require('./style.scss');

export class Contact extends React.Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.setState({
            mailObject: {
                
            }
        })
    }
    render() {
        return (
            <div>
                <h2>contact me</h2>
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
                    onChange={(e) => this.updateMailObject({messgae: e.target.value})}/>
                <br/>
                <button
                    onClick={() => {
                        this.props.sendEmail(this.state.mailObject)
                }}>SEND</button>
            </div>
        )
    }
    updateMailObject(obj) {
        this.setState({
            mailObject: {
                ...this.state.mailObject,
                ...obj
            }
        }, () => {
            console.log(this.state.mailObject)
        })
    }
}

export default Contact;