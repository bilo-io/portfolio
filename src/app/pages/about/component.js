import React from 'react';
require('./style.scss');

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {}
    render() {
        return (
            <div className='page'>
                <h1>About</h1>
                <p>
                    This is a sample application demonstrating the usage of various frontend technologies:
                    <ul>
                        <li>React</li>
                        <li>Redux</li>
                        <li>SASS</li>
                    </ul>
                </p>

                <p>
                    This sample app was created by Bilo Lwabona... to see more of his stuff, checkout:
                    <ul>
                        <li><a href='https://github.com/bilo-io'>GitHub</a></li>
                        <li><a href='https://www.linkedin.com/in/bilolwabona/'>LinkedIn</a></li>
                    </ul>
                </p>
            </div>
        )
    }
}