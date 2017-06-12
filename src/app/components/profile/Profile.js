import React from 'react';
import image from '../../../img/profile-pic.jpg';
require('./profile.scss');

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.setState({
            // title: 'bilo.io',
            links: [
                {
                    name: 'github',
                    link: 'https://github.com/bilo-io'
                }, {
                    name: 'linkedin',
                    link: 'https://za.linkedin.com/in/bilolwabona'
                }, {
                    name: 'twitter',
                    link: 'https://twitter.com/bilo_io'
                }
            ]
        });
    }
    render() {
        return (
            <div className='profile'>
                    <h3>
                    <b>Bilo</b>
                    </h3>
                    <div>
                        UX Specialist
                        <br />
                        <br />
                        Frontend Developer
                        <br />
                        <br />
                        Game Developer
                    </div>
                <img src={image} className='pic' />
                <div>
                </div>
                <div className='section'>
                    <div>MSc in CompSci.</div>
                </div>
                <div className='section'>
                    <div>ReactJS, AngularJS, Angular 2</div>
                    <div>.NET Core, NodeJS</div>
                    <div>.Unity3d</div>
                </div>
                
                <div className='icons-container'>
                    {this.state && this
                        .state
                        .links
                        .map((link) => {
                            return <a className={`icons socicon-${link.name}`} key={link.link} href={link.link}></a>
                        })}
                </div>    
            </div>
        )
    }
}