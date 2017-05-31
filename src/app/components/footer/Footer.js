import React from 'react';
require('./footer.scss');

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setState({
            // title: 'bilo.io',
            links: [
                {
                    name: 'Github',
                    link: 'https://github.com/bilo-io'
                }, {
                    name: 'LinkedIn',
                    link: 'https://za.linkedin.com/in/bilolwabona'
                }]
        });
    }    
    render() {
        return (
            <div className="footer">{this.socialLinks()}</div>
        )
    }

    socialLinks() {
        if (this.state) {
            return (
                <div className="links">
                    {this
                        .state
                        .links
                        .map((link) => {
                            return <a key={link.link} href={link.link}>{link.name}</a>
                        })}
                </div>
            )
        }
    }
}