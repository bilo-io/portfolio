import React from 'react';
import store from './store';
import {Route, Switch, Link} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
// Components
import {AppTopBar, AppSidenav, AppBody} from 'bilo-ui';
// Containers
import Browser from './pages/browser';
import Contact from './pages/contact';
import Elastic from './pages/elastic';
import DraftJS from './pages/draft-js';
import Home from './pages/home';
import MarkdownReader from './pages/markdown-reader';
import NotFound from './pages/not-found';
import Places from './pages/places';
import Playground from './pages/playground';
import Ryda from './pages/ryda';
import Tutorials from './pages/tutorials';
import XUI from './pages/xui';

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
                                <Route exact path="/" component={Home} />
                                <Route exact path="/browser" component={Browser} />
                                <Route exact path="/contact" component={Contact}/>
                                <Route exact path="/draftjs" component={DraftJS}/>
                                <Route exact path="/elastic" component={Elastic}/>
                                <Route exact path="/places" component={Places}/>
                                <Route exact path="/playground" component={Playground}/>
                                <Route exact path="/ryda" component={Ryda}/>
                                <Route exact path="/tutorials" component={Tutorials}/>
                                <Route exact path="/tutorials/:tutorialId" component={MarkdownReader}/>
                                <Route exact path="/xui" component={XUI}/>
                                <Route path="*" component={NotFound}/>
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
                    }, {
                        link: '/draftjs',
                        name: 'draft.js'
                    }, {
                        link: '/elastic',
                        name: 'elastic'
                    }, {
                        link: '/places',
                        name: 'places'
                    }, {
                        link: '/playground',
                        name: 'playground'
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