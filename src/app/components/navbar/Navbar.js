import React from 'react';
require('./navbar.scss');

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.initState();
    }

    initState() {
        this.setState({
            title: 'bilo.io',
            links: [{
                name: 'Github',
                link: 'https://github.com/bilo-io'
            },{
                name: 'LinkedIn',
                link: 'https://za.linkedin.com/in/bilolwabona'
            }]
        })
    }

    render() {
        return ( 
            <div className="navbar">
                <label>{this.state && this.state.title}</label>
                {this.portfolioLinks()}
            </div>
        )
    }

    portfolioLinks() {
        return (
            <div >
                {this.state && this.state.links.map( (link) => {
                    <span>{link.name}</span>
                })}
            </div>
        )
    }
}