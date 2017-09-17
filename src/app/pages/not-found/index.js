import React from 'react';
import {Link} from 'react-router-dom';
import './style.scss';
export default class NotFound extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='page'>
                <div className='title'>404</div>
                <div className='text'>Got lost in my space?</div>
                <div className='confirm-button'>
                    <Link className='button' to='/home'>Go Home</Link>
                </div>
            </div>
        )
    }
}