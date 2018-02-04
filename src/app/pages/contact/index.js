import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'bilo-ui';
import {
    sendEmail
} from './actions';
require('./style.scss');


const mapStateToProps = (state) => {
    let _state = state.contact;
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendEmail: (mailObj) => dispatch(sendEmail(mailObj))
    }
}


export class Contact extends Component {
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
                    <Input
                        type="text"
                        placeholder="your email"
                        onChange={(e) => this.updateMailObject({email: e.target.value})}/>
                    <Input
                        type="text"
                        placeholder="must be 'bout something"
                        onChange={(e) => this.updateMailObject({subject: e.target.value})}/>
                    <Input
                        type="text"    
                        placeholder={"... so what is your message?"}
                        onChange={(e) => this.updateMailObject({message: e.target.value})}/>
                    <br/>
                    <Button
                        type='primary'    
                        onClick={() => {
                        this.props.sendEmail(this.state.mailObject)
                        }}>
                        SEND
                    </Button>
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Contact);