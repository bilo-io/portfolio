import React from 'react';
import './style.scss'

export default class DraftJSCard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='ws-card'>
                <label>{this.props.title}</label>
                <div className='custom-input'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}