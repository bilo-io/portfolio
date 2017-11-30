import React from 'react';
import { Search } from 'bilo-ui';
import './style.scss';

export default class Playground extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
    }
    render() {
        return this.state ? (
            <div className='page'>
            </div>
        ) : null
    }
}