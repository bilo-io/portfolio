import React from 'react'
import { Card, Icon } from 'bilo-ui'

export const Resume = (props) => {
    const { style } = props
    const resumeStyle = {
        maxWidth: '45em',
        backgroundColor: 'white',
        margin: 'auto'
    }
    const heading = (
        <Card className='padded' style={{...style}}>
            <div
                style={{
                display: 'flex',
                flexDirection: 'row',
                    justifyContent: 'space-between',
                
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

                <div
                    style={{
                    width: '4em',
                    height: '4em'
                }}>
                    {/* <img
                            style={{
                            width: '20em',
                            height: 'auto',
                            borderRadius: '50%'
                        }}
                        src={imgBilo}/> */}
                </div>

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
        </Card>
    )
    const experience = (
        <Card className='padded'>
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
        </Card>
    )
    const education = (
        <Card className='padded'>
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
        </Card>
    )
    const skills = (
        <Card className='padded'>
            SKILLS
            <hr/>
            Development: .NET, Azure, Git, Angular, React, iOS, Android, Unity3d, Linux
            Languages: 1st: German & English, 2nd: Afrikaans & Swahili, 3rd: French Other:
            ITF Taekwon-Do since 2009. 8 time gold medalist at 3 Championships
        </Card>
    )
    const references = (
        <Card className='padded'>
            REFERENCES:
            <hr/>
            Professional: Dave New:
            <a href='mailto:dave@whereismytransport.com'>dave@whereismytransport.com</a>
            <br/>
            Personal: Henk Van Jaarsveld:
            <a href='mailto:henk@whereismytransport.com'>henk@whereismytransport.com</a>
        </Card>
    )
    return <div
    style={resumeStyle}>
        <Card className='padded'>
            {heading}
            {experience}
            {education}
            {skills}
            {references}
            <br/>
        </Card>
    </div>
}