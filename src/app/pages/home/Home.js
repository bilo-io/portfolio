import React from 'react';
require('./home.scss');
import Profile from '../../components/profile/Profile';
import image from '../../../img/profile-pic.jpg';
export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                <Profile />
                <div classNam='content'></div>
            </div>
        )
    }
}