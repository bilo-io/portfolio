import React from 'react';
require('./style.scss');
import Profile from '../../components/profile';
import image from '../../../img/profile-pic.jpg';
import imgCTSunset from '../../../img/ct-sunset.jpg';
import imgTkd from '../../../img/bilo-tkd.jpg';
import * as d3 from 'd3';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let skills = [
            {
                name: "JS",
                children: [
                    {
                        name: "nodejs",
                        size: 12
                    }, {
                        name: "frontend",
                        size: 35
                    }
                ]
            }, {
                name: "C#",
                children: [
                    {
                        name: ".NET",
                        size: 14
                    }, {
                        name: "Unity3d",
                        size: 28
                    }
                ]
            }
        ]
    }
    render() {
        return (
            <div className='container'>
                <div className='content'>
                    <div className='panel-light'>
                        <h2>bio</h2>
                        <p>I'm a software engineer with a passion for data visualisation and user
                            experience
                        </p>
                    </div>

                    <div className='panel-dark'>
                        <h2>taekwon-do</h2>
                        <p>In 2009 I began practising ITF Taekwon-Do, and have since competed (and won)
                            in 3 South African and African tournaments.</p>
                    </div>
                    {/* <div className='panel'>
                        <img src={imgTkd} width='100%'/>
                    </div> */}
                    <div className='panel-light'>
                        <h2>education</h2>
                        <p>I began my journey in the field of computer science back in 2009, at the
                            University of Cape Town, South Africa.</p>
                    </div>
                </div>
            </div>
        )
    }
}