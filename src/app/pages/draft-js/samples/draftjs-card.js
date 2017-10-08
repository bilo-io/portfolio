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
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}