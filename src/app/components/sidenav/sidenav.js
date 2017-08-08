import React from 'react';
import { Link } from 'react-router';
// import { Button } from 'bilo-xui';
require('./sidenav.scss');

export default class Sidenav extends React.Component {
    render() {
        return !this.props.isOpen ? null : (
            <div className='sidenav'>
                {this.props.children}
            </div>
        )
    }
}