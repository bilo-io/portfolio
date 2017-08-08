import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
// Components
import Map from './components/map/map';
import Navbar from './components/navbar/navbar';
import Sidenav from './components/sidenav/sidenav';
import Profile from './components/profile/profile';
// Pages
import Home from './pages/home/home';
import Contact from './pages/contact/contact';
import Projects from './pages/projects/projects';
import Tutorial from './pages/tutorial/tutorial';
import Tutorials from './pages/tutorials/tutorials';
import NotFound from './pages/not-found/not-found';

require('./app.scss');

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.setState({
            sidenavOpen: false,
            sidenavItems: [
                { link: '/home', text: 'about' },
                { link: '/contact', text: 'contact' },
                { link: '/tutorials', text: 'tutorials' },
            ]
        });
    }
    toggleSidenav() {
        this.setState({
            ...this.state,
            sidenavOpen: !this.state.sidenavOpen
        });
    }
    render() {
        return this.state ? (
            <div>
                <Navbar>
                    <i className='material-icons' onClick={ this.toggleSidenav.bind(this)}>menu</i>
                </Navbar>
                <Sidenav isOpen={this.state.sidenavOpen}>
                    {this.state.sidenavItems.map((item) => {
                        return <Link key={item.link} className='sidenav-link' to={item.link} onClick={this.toggleSidenav.bind(this)}>{item.text}</Link>
                    })}    
                </Sidenav>

                <div className='app-content'>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/projects" component={Projects} />
                        <Route exact path="/tutorials" component={Tutorials} />
                        <Route path="/tutorials/:tutorialId" component={Tutorial} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
            </div>
        ) : null;
    }
}