import {connect} from 'react-redux';
import React, {Component} from 'react'
import './style.scss'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'

export default class MapLab extends Component {
    constructor(props) {
        super(props)
        this.style = 'dark'
        this.token = 'pk.eyJ1IjoiYmlsb2x3YWJvbmEiLCJhIjoiY2lmcDVpOW90MDFncnRlbHgwZXN1bDVsciJ9.iIMCbu4WnvsBgsGsChtY2Q'
        this.layerStyle = `https://api.tiles.mapbox.com/v4/mapbox.${this.style}/{z}/{x}/{y}.png?access_token=${this.token}`
    }
    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
        
    }
    render() {
        const position = [this.state.lat, this.state.lng]
        
        return (
            <div className='page'>
                <Map className='map' center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url={ this.layerStyle }/>
                    <Marker position={position}>
                        <Popup>
                            <span>
                                A pretty CSS3 popup.
                                <br/>
                                Easily customizable.
                            </span>
                        </Popup>
                    </Marker>
                </Map>
            </div>
        )
    }
}

