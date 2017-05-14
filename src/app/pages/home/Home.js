import React from 'react';
require('./home.scss');

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>This is the home page!</h1>
            </div>
        )
    }
}