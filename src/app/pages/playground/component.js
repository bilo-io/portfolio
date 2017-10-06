import React from 'react';

class Playground extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='page page-padded'>
                <h1>{this.props.title}</h1>
                <span></span>
            </div>
        )
    }
}

export default Playground;