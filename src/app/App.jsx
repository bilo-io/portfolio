import React from 'react';
import Map from './components/map/Map.jsx';
import Navbar from './components/navbar/Navbar.js';

require('./app.scss');

export default class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <Navbar />
                
            </div>
        )
    }
}