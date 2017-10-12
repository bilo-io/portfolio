import React from 'react';
import './style.scss'

export default class DraftJSCard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='ws-card'>
                <label><b>{this.props.title}</b></label>
                <br/>
                <div style={{marginTop: '1em', background: 'rgba(white,0.1)'}}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}