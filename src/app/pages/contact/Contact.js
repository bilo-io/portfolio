import React from 'react';
import './contact.scss';
export default class Contact extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className='contact-form'>
                    <input type="text" placeholder=""/>
                    <input type="text" />
                    <button>SEND</button>
                </div>    
            </div>
        )
    }
}