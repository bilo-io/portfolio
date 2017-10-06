import React from 'react';
import './style.scss';

export class Playground extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return this.state ? (
            <div className='page page-padded'>
                <h1>{this.props.title}</h1>
            </div>
        ) : null
    }
}

export default Playground;