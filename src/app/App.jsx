import React from 'react';
import Map from './components/map/Map.jsx';

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
            <div>
                <div className="app-title">
                    {this.state.title}
                </div>
                <Map />
            </div>
        )
    }
}