import React, { Component, PropTypes } from 'react';
import Search from 'bilo-ui';
import './style.scss';

export default class WordCloud extends Component {
    static propTypes = {
        // isActive: PropTypes.bool,
        // hello: PropTypes.func.isRequired,
        // index: PropTypes.number.isRequired,
        // name: PropTypes.string.isRequired
    }
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='page page-padded'>
                <h1>Word Cloud</h1>
            </div>
        )
    }
}