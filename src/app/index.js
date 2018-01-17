import React from 'react';
import store from './store';
import {Route, Switch, Link} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Async from 'react-code-splitting'
// Components
import {AppTopBar, AppSidenav, AppBody} from 'bilo-ui';
// Containers

require('../app.scss');

export class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let {sidenav} = this.state;
        return this.state
            ? (
                <Router>
                    <div>
                        <AppTopBar>
                            <img
                                src='https://raw.githubusercontent.com/bilo-io/resources/master/logo/react.png'
                                onClick={() => this.toggleSidenav()}
                                width='48'/>
                            <Link to="/">bilo.bio</Link>
                        </AppTopBar>
                        <AppBody>
                            <AppSidenav isOpen={this.state.sidenav.isOpen}>
                                {sidenav.items.map((page) => {
                                        return <Link
                                            key={page.link}
                                            to={page.link}
                                            className='sidenav-link'
                                            onClick={() => {
                                            this.toggleSidenav()
                                        }}>
                                            {page.name}
                                        </Link>
                                    })}
                            </AppSidenav>
                            <Switch>
                                <Route exact path="/"
                                    component={() => <Async load={import(/* webpackChunkName: "Home"*/ './pages/home')} />} />
                                <Route exact path="/browser"
                                    component={() => <Async load={import(/* webpackChunkName: "Browser"*/ './pages/browser')} />} />
                                <Route exact path="/contact" 
                                    component={() => <Async load={import(/* webpackChunkName: "Contact"*/ './pages/contact')} />}/>
                                <Route exact path="/firebase"
                                    component={() => <Async load={import(/* webpackChunkName: "Firebase"*/ './pages/firebase')} />}/>
                                <Route exact path="/places" 
                                    component={() => <Async load={import(/* webpackChunkName: "Places"*/ './pages/places')} />}/>
                                <Route exact path="/playground" 
                                    component={() => <Async load={import(/* webpackChunkName: "Playground"*/ './pages/playground')} />}/>
                                <Route exact path="/ryda" 
                                    component={() => <Async load={import(/* webpackChunkName: "Ryda"*/ './pages/ryda')} />}/>
                                <Route exact path="/tutorials" 
                                    component={() => <Async load={import(/* webpackChunkName: "Tutorials"*/ './pages/tutorials')} />}/>
                                <Route exact path="/tutorials/:tutorialId"
                                    component={() => <Async load={import(/* webpackChunkName: "MarkdownReader"*/ './pages/markdown-reader')} />} />
                                <Route exact path="/xui" 
                                    component={() => <Async load={import(/* webpackChunkName: "XUI"*/ './pages/xui')} />}/>
                                <Route path="*"
                                    component={() =>
                                        <Async load={import(/* webpackChunkName: "NotFound"*/ './pages/not-found')} />} />
                            </Switch>
                        </AppBody>
                    </div>
                </Router>
            )
            : null
    }
    componentWillMount() {
        this.setState({
            sidenav: {
                isOpen: false,
                items: [
                    {
                        link: '/',
                        name: 'bilo'
                    }, {
                        link: '/browser',
                        name: 'browser'
                    }, {
                        link: '/contact',
                        name: 'contact'
                    // }, {
                    //     link: '/firebase',
                    //     name: 'firebase'
                    // }, {
                    //     link: '/places',
                    //     name: 'places'
                    // }, {
                    //     link: '/playground',
                    //     name: 'playground'
                    }, {
                        link: '/ryda',
                        name: 'rYda'
                    }, {
                        link: '/tutorials',
                        name: 'Tutorials'
                    }, {
                        link: '/xui',
                        name: 'XUI'
                    }
                ]
            }
        })
    }
    toggleSidenav() {
        let sidenav = this.state.sidenav
        this.setState({
            ...this.state,
            sidenav: {
                ...sidenav,
                isOpen: !sidenav.isOpen
            }
        }, () => console.log(this.state.sidenav));
    }
}

export default App;