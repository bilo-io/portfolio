import React from 'react';
import './style.scss';

class Playground extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='page page-padded'>
                <h1>{this.props.title}</h1>
                <div className="ws-card">
                    <span data-text="true">a</span>
                </div>
            </div>
        )
    }
}

export default Playground;