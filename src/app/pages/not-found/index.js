import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
export default class NotFound extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='not-found-container'>
                <div className='content'>
                    <div className='title'>404</div>
                    <div className='text'>Got lost in my space?</div>
                    <div className='confirm-button' style={{top: '10em'}}>
                        <Link className='button' to='/home'>Go Home</Link>
                    </div>    
                </div>    
            </div>
        )
    }
}