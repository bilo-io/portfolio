import React from 'react';
import store from './store';
import {Route, Switch, Link} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
// Components
import Navbar from './components/navbar';
// Containers
import Sidenav from './containers/sidenav';
import {toggleSidenav} from './containers/sidenav/actions'
// Pages
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
        return (
            <Router>
                <div>
                    <Navbar>
                        <img
                            src='https://raw.githubusercontent.com/bilo-io/resources/master/logo/react.png'
                            onClick={() => {
                            store.dispatch(toggleSidenav())
                        }}
                            width='48'/>
                        <Link to="/">bilo.bio</Link>
                    </Navbar>
                    <div className='app-content'>
                        <Sidenav>
                            {[
                                {
                                    link: '/',
                                    name: 'Bio'
                                }, {
                                    link: '/contact',
                                    name: 'Contact'
                                }, {
                                    link: '/elastic',
                                    name: 'Elastic'
                                }, {
                                    link: '/places',
                                    name: 'Places'
                                }, {
                                    link: '/ryda',
                                    name: 'Ryda'
                                }, {
                                    link: '/tutorials',
                                    name: 'Tutorials'
                                }, {
                                    link: '/xui',
                                    name: 'XUI'
                                }
                            ].map((page) => {
                                return <Link
                                    key={page.link}
                                    to={page.link}
                                    className='sidenav-link'
                                    onClick={() => store.dispatch(toggleSidenav())}>
                                    {page.name}
                                </Link>
                            })}
                        </Sidenav>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/contact" component={Contact}/>
                            <Route exact path="/elastic" component={Elastic}/>
                            <Route exact path="/places" component={Places}/>
                            <Route exact path="/ryda" component={Ryda}/>
                            <Route exact path="/tutorials" component={Tutorials}/>
                            <Route exact path="/draftjs" component={DraftJS}/>
                            <Route exact path="/tutorials/:tutorialId" component={MarkdownReader}/>
                            <Route exact path="/xui" component={XUI}/>
                            <Route exact path="/playground" component={Playground} />
                            <Route path="*" component={NotFound}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;