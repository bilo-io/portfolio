import React from 'react';
require('./app.scss');

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: `Bilo's Portfolio`
        };
    }

    render() {
        return (
            <div className="app-title">
                {this.state.title}
            </div>
        )
    }
}