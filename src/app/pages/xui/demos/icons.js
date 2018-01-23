import React, { Component } from 'react'
import {Button, Icon, Loader, LoaderType} from 'bilo-ui';

export default class Icons extends Component {
    render() {
        return (
            <div className='ws-card'>
                <h2>Icons</h2>
                <Icon name={'camera'} style={{padding: '1em'}}/>
                <Icon name={'bars'} transform={'rotate-90'}/>
            </div>
        )
    }
}