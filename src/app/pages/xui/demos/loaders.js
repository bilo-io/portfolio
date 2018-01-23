import React, { Component } from 'react'
import { Button, Icon, Loader, LoaderType } from 'bilo-ui';

export default class Loaders extends Component {
    render() {
        return (
            <div className='ws-card'>
                <h2>Loaders</h2>
                <Loader type={LoaderType.SPINNER}/>
                <Loader type={LoaderType.RAINBOW} />
            </div>
        )
    }
}