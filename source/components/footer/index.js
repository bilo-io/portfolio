import React, {Component} from 'react'
import './style.scss';

export default class Footer extends Component {
    static propTypes = {}
    state = {
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
            }, {
                name: 'skype',
                link: 'skype:bilo89za?userinfo'
            }
        ]
    }
    render() {
        const {links} = this.state
        return (
            <div className='footer'>
            Footer    
                <div className='icons-container'>
                    {links.map((link) => {
                        return <a className={`icons socicon-${link.name}`} key={link.link} href={link.link}></a>
                    })}
                </div>
            </div>
        )
    }
}
