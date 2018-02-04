import React, {Component} from 'react'
import {connect} from 'react-redux'
import Profile from '../../components/profile'
import './style.scss'
import {Collapsible, Icon} from 'bilo-ui'
import {Progress} from '../../components/progress'
import ProjectCard from '../../components/project-card'
import imgBiloCli from '../../../img/img-bilo-cli.png'
import imgBiloUi from '../../../img/img-bilo-ui.png'
import imgBilo from '../../../img/profile-pic.jpg'
import imgBiloTKD from '../../../img/bilo-tkd.jpg'
import imgCtSunset from '../../../img/ct-sunset.jpg'

import {myAction} from './actions';

const mapStateToProps = (state, ownProps) => {
    let _state = state.home;
    return {myProps: _state.myProps}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        myAction: () => dispatch(myAction())
    }
}

export class Home extends Component {
    render() {
        return (
            <div className='container'>
                <div className='content'>
                    <div
                        className='panel-dark'
                        style={{
                        backgroundImage: `url(${imgCtSunset})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '30% 35%'
                    }}>
                        <img
                            style={{
                            width: '10em',
                            height: 'auto',
                            borderRadius: '50%',
                            position: 'absolute',
                            marginTop: '6em',
                            right: '6em'
                        }}
                            src={imgBilo}/>
                        <div
                            style={{
                            position: 'relative',
                            top: '10em',
                            color: 'black'
                        }}>
                            I'm a software engineer with a passion for data visualisation and user
                            experience
                        </div>

                    </div>
                    <div className='panel-light'>
                        <h2>projects</h2>
                        <ProjectCard
                            url='https://bilo-io.github.io/bilo-ui/'
                            name='bilo-ui'
                            image={imgBiloUi}
                            description='my own, customiseable React component library'/>
                        <ProjectCard
                            url='https://github.com/bilo-io/bilo-cli'
                            name='bilo-cli'
                            image={imgBiloCli}
                            description='my own bash cli, to speed up repetitive dev tasks'/>
                    </div>
                    <div className='panel-dark float-right'>
                        <h2>experience & skills</h2>
                        <p>I did a couple of gamedev internships in 2012 and 2013.
                        </p>
                        <div>
                            <Progress label='React' percentage='80%'/>
                            <Progress label='SCSS' percentage='70%'/>
                            <Progress label='Ruby & Rails' percentage='45%'/>
                            <Progress label='Unity3D' percentage='50%'/>
                            <Progress label='UX Design' percentage='70%'/>
                            <br/>
                            <br/>
                        </div>
                    </div>
                    <div
                        className='panel-dark'
                        style={{
                        backgroundImage: `url(${imgBiloTKD})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '30% 30%'
                    }}>
                        <h2>taekwon-do</h2>
                        <p>In 2009 I began practising ITF Taekwon-Do, and have since competed (and won)
                            in 3 South African and African tournaments.</p>
                        {/* <img src={imgBiloTKD}/> */}
                    </div>
                    <div className='panel-dark float-right'>
                        <h2>education</h2>
                        <p>
                            I began my journey in the field of computer science back in 2009, at the
                            University of Cape Town, South Africa.
                        </p>
                        <p>
                            <strong>MSc in Computer Science in February 2016</strong>
                        </p>
                    </div>
                    <div className='panel-light'>
                        <h2>resumé</h2>
                        <Collapsible label={'the boring version of my CV'}>
                            <div>
                                <div
                                    style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}>
                                    <div>
                                        <b>Kwegyir (Bilo) Lwabona</b>
                                        <br/>
                                        <b>Full Stack Software Engineer</b>
                                        <br/>
                                        <b>
                                            <a
                                                href='https://www.google.co.za/maps/place/Cape+Town/@-33.9152208,18.3758741,10z/data=!3m1!4b1!4m5!3m4!1s0x1dcc500f8826eed7:0x687fe1fc2828aa87!8m2!3d-33.9248685!4d18.4240553?hl=en'>
                                                Cape Town, South Africa
                                            </a>
                                        </b>
                                    </div>
                                    {/* <div
                                        style={{
                                        width: '4em',
                                        height: '4em'
                                    }}>
                                        <img
                                            style={{
                                            borderRadius: '50%'
                                        }}
                                            src={imgBilo}/>
                                    </div> */}
                                </div>
                                <div
                                    style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}>
                                    <a href='tel:+27791991899'>
                                        <Icon name='phone'/>
                                        &nbsp;+27791991899
                                    </a>
                                    <a href='mailto:bilo.lwabona@gmail.com'>
                                        <Icon name='envelope'/>
                                        &nbsp;bilo.lwabona@gmail.com
                                    </a>
                                    <a href='skype:bilo89za?userinfo'>
                                        <Icon name='f17e'/>
                                        &nbsp;bilo89za
                                    </a>
                                </div>
                            </div>
                            <hr/>
                            EXPERIENCE
                            <hr/>
                            <div>
                                <b>Bitwise Development (various roles): (Nov 2013 - present)</b>
                                <ul>
                                    <li>
                                        Frontend Web Developer: (Jan 2016 - present)</li>
                                    <li>
                                        Web API .NET Developer: (Jun 2015 - Dec 2015: 7 months)</li>
                                </ul>
                            </div>
                            <div>
                                <h4>WhereIsMyTransport (20 months)</h4>
                                <ul>
                                    <li>iOS Native Developer (Nov 2013 - May 2015: 20 months)</li>
                                </ul>
                            </div>
                            <div>
                                <h4>Unity3d GameDev Internships (6 months)</h4>
                                <ul>
                                    <li>Triggerfish Animation (Jan 2013 - Feb 2013: 2 months)</li>
                                    <li>Tasty Poison Games (Nov 2012 - Dec 2012: 2 months)</li>
                                    <li>Lung Animation (Jun 2012 - July 2012: 2 months)</li>
                                </ul>
                            </div>
                            <hr/>
                            EDUCATION
                            <hr/>
                            <div>
                                <b>University of Cape Town (UCT): 2009 - 2015</b>
                                <b>MSc in Computer Science: 2013 - 2015</b>

                                <ul>
                                    <li>“Multitouch-based Collaborative Pre-visualisation for Computer Animation”</li>
                                </ul>

                                <b>Honours in Computer Science: 2012</b>
                                <ul>
                                    <li>“Kinect Guided Virtual Tours of Cultural Heritage Sites”</li>
                                </ul>
                                <b>BSc in Computer Science 2009 - 2011</b>
                                <ul>
                                    <li>specialized in Computer Games Design</li>
                                </ul>
                            </div>
                            <div>
                                <b>German School of Cape Town (DSK) 1998 - 2008</b>
                                <ul>
                                    <li>Abitur (German A-levels) 2008</li>
                                    <li>Matric (National Senior Certificate) 2007</li>
                                </ul>
                            </div>
                            <hr/>
                            SKILLS
                            <hr/>
                            Development: .NET, Azure, Git, Angular, React, iOS, Android, Unity3d, Linux
                            Languages: 1st: German & English, 2nd: Afrikaans & Swahili, 3rd: French Other:
                            ITF Taekwon-Do since 2009. 8 time gold medalist at 3 Championships
                            <hr/>
                            REFERENCES:
                            <hr/>
                            Professional: Dave New:
                            <a href='mailto:dave@whereismytransport.com'>dave@whereismytransport.com</a>
                            <br/>
                            Personal: Henk Van Jaarsveld:
                            <a href='mailto:henk@whereismytransport.com'>henk@whereismytransport.com</a>
                            <br/>
                        </Collapsible>
                    </div>
                </div>
                {/* <Profile /> */}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
