import React from 'react';
import {Link} from 'react-router-dom';
require('./style.scss');
var axios = require('axios');
var readme = require('../../../../README.md');
import tutorials from './data';

export default class Tutorials extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        let keys = Object.keys(tutorials);
        let posts = [];

        this.setState({tutorials: tutorials});
    }
    render() {
        return (
            <div className='tut-container'>
                <div className='tut-content'>
                    <input type='text' placeholder={'search tags...'} onChange={(e) => {}}/>
                    <div className="posts-container">
                        {tutorials.map((tut, idx) => {
                            return <TutTile key={idx} tutId={tut.id} img={tut.img}>{tut.name}</TutTile>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

const TutTile = (props) => {
    var height = '4em';
    return props
        ? (
            <Link className='ws-card' to={'/tutorials/' + props.tutId}>
                <div style={{
                    position: 'relative'
                }}>
                    <img
                        src={props.img}
                        style={{
                        display: 'inline',
                        height: height,
                        width: height,
                    }}/>
                    <div
                        style={{
                        textDecoration: 'none',
                        color: 'white',
                        position: 'absolute',
                        left: height,
                        top: '0em',
                        lineHeight: height,
                        marginLeft: '1em',

                    }}>{props.children}</div>
                </div>
            </Link>
        )
        : null
}