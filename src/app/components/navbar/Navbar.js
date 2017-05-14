import React from 'react';
import { Link } from 'react-router-dom';
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
            <div className='navbar'>
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
                <div className='links'>
                    {this.state.pages.map((page) => {
                        return <Link key={page.link} to={page.link}>{page.name}</Link>
                    })}
                </div>
            )
        }    
    }
}