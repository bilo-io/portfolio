import React from 'react';
require('./map.scss');

export default class Map extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="map-style">Map</div>
        )
    }
}