import React from 'react';
import {Link} from 'react-router-dom';
import {errMessage, errorDescription} from '../../../utils/error';
import './style.scss';
export default class Error extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { statusCode } = this.props;
        return (
            <div className='not-found-container'>
                <div className='content'>
                    <div className='title'>{statusCode}</div>
                    <div className='text'>{statusCode}</div>
                    <div
                        className='confirm-button'
                        style={{
                        top: '10em'
                    }}>
                        <Link className='button' to='/'>Go Home</Link>
                    </div>
                </div>
            </div>
        )
    }
}