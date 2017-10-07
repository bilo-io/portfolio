import React from 'react';
import Profile from '../../components/profile'
require('./style.scss');

export class Home extends React.Component {
    constructor(props) {
        super(props)
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
                        <h2>experience</h2>
                        <p>I did a couple of gamedev internships in 2012 and 2013. 
                        </p>
                        
                    </div>

                    <div className='panel-light'>
                        <h2>taekwon-do</h2>
                        <p>In 2009 I began practising ITF Taekwon-Do, and have since competed (and won)
                            in 3 South African and African tournaments.</p>
                    </div>
                    {/* <div className='panel'>
                        <img src={imgTkd} width='100%'/>
                    </div> */}
                    <div className='panel-dark'>
                        <h2>education</h2>
                        <p>I began my journey in the field of computer science back in 2009, at the
                            University of Cape Town, South Africa.</p>
                    </div>
                </div>
                {/* <Profile /> */}
            </div>
        )
    }
}

export default Home;