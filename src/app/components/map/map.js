import React from 'react';
import L from 'leaflet';
require('./map.scss');

export default class Map extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.initMap();
    }

    render() {
        return (
            <div className="map-container">
                <div id="leafletmap" className="map-component"></div>
            </div>
        )
    }

    initMap() {
        let style = 'light';
        
        let token = 'pk.eyJ1IjoiYmlsb2x3YWJvbmEiLCJhIjoiY2l5eWN5Z2EwMDAwaDMzcXhpczllYzRtdiJ9.rfFcy4B00uukeTntIJLeGg';
        
        let tileLayer = L.tileLayer(`https://api.tiles.mapbox.com/v4/mapbox.${style}/{z}/{x}/{y}.png?access_token=${token}`, {
            attribution: '',
            maxZoom: 18,
            id: 'your.mapbox.project.id',
            accessToken: 'your.mapbox.public.access.token'
        });

        let mapOptions = {
            zoomControl: false,
            attributionControl: false,
        };

        var map = new L.Map('leafletmap', mapOptions).setView([51.505, -0.09], 13);

        map.addLayer(tileLayer);
    }
}