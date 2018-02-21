import React, {Component} from 'react'
import {connect} from 'react-redux'
import Profile from '../../components/profile'
import './style.scss'
import {Card, Collapsible, Icon} from 'bilo-ui'
import {Progress} from '../../components/progress'
import {Resume} from '../../components'
import Map from '../../components/map'
import ProjectCard from '../../components/project-card'
import imgBiloCli from '../../img/img-bilo-cli.png'
import imgBiloUi from '../../img/img-bilo-ui.png'
import imgBilo from '../../img/profile-pic.jpg'
import imgBiloTKD from '../../img/bilo-tkd.jpg'
import imgCtSunset from '../../img/ct-sunset.jpg'

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
        const topPanel = (
            <div
                className='panel-dark'
                style={{
                backgroundImage: `url(${imgCtSunset})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '30% 35%'
            }}>
                <Map/>
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
        )
        const tkdPanel = (
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
        )
        const projectPanel = (
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
        )
        const skillsPanel = (
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
        )
        const educationPanel = (
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
        )
        const resumePanel = (
            <div className='panel-light'>
                <div>
                    <h2>resumé</h2>
                    <Collapsible label={'the boring version of my CV'}>
                        <br/>
                        <Resume/>
                    </Collapsible>
                </div>
            </div>
        )
        return (
            <div className='container'>
                <div className='content'>
                    {topPanel}
                    {projectPanel}
                    {skillsPanel}
                    {/* {tkdPanel} */}
                    {resumePanel}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
