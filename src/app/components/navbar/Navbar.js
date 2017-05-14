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
                    name: 'home',
                    link: '/'
                }, {
                    name: 'projects',
                    link: '/projects'
                },
                {
                    name: 'tutorials',
                    link: '/tutorials'
                },
                {
                    name: 'contact',
                    link: '/contact'
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