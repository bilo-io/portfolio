import React from 'react';
import {Link} from 'react-router-dom';
require('./navbar.scss');

export class Navbar extends React.Component {
        render() {
        return (
            <div className='navbar'>
                {this.props.children}
            </div>
        )
    }
}

export default Navbar;