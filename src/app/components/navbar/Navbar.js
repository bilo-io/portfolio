import React from 'react';
require('./navbar.scss');

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.initState();
    }

    initState() {
        this.setState({
            title: 'bilo.io',
            pages: [
                {
                    name: 'Home',
                    link: '/'
                }, {
                    name: 'Projects',
                    link: '/projects'
                },
                {
                    name: 'Tutorials',
                    link: '/tutorials'
                }
            ]
        });
    }

    render() {
        return (
            <div className="navbar">
                {this.pageTitle()}
                {this.pageRoutes()}
            </div>
        )
    }
    pageTitle() {
        return (
            <div>
                <label>{this.state && this.state.title}</label>
            </div>
        )
    }

    pageRoutes() {
        if (this.state) {
            return (
                <div className="links">
                    {this.state.pages.map((page) => {
                        return <a key={page.link} href={page.link}>{page.name}</a>
                    })}
                </div>
            )
        }    
    }
}