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
                    <div className='fullscreen'>
                        <AppTopBar>
                            <img
                                src='https://raw.githubusercontent.com/bilo-io/resources/master/logo/react.png'
                                onClick={() => this.toggleSidenav()}
                                width='48'/>
                            <Link to="/">bilo.io</Link>
                        </AppTopBar>
                        <AppBody>
                            <AppSidenav
                                isOpen={this.state.sidenav.isOpen}
                                style={{position: 'fixed', top: '3em'}}>
                                {sidenav.items.map((page) => {
                                        return <Link
                                            key={page.link}
                                            to={page.link}
                                            className='sidenav-link'
                                            onClick={() => {
                                            this.toggleSidenav()
                                        }}>
                                            {page.name.toUpperCase()}
                                        </Link>
                                    })}
                            </AppSidenav>
                            <Switch>
                                <Route exact path="/"
                                    component={() => <Async load={import(/* webpackChunkName: "Home"*/ './pages/home')} />} />
                                <Route exact path="/tutorials" 
                                    component={() => <Async load={import(/* webpackChunkName: "Tutorials"*/ './pages/tutorials')} />}/>
                                <Route exact path="/tutorials/:tutorialId"
                                    component={() => <Async load={import(/* webpackChunkName: "MarkdownReader"*/ './pages/markdown-reader')} />} />
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
                    }
                    // }, {
                    //     link: '/contact',
                    //     name: 'contact'
                    // }, {
                    //     link: '/firebase',
                    //     name: 'firebase'
                    // }
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