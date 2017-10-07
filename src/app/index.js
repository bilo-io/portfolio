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
import DraftJS from './pages/draft-js';
import Home from './pages/home';
import MarkdownReader from './pages/markdown-reader';
import NotFound from './pages/not-found';
import Places from './pages/places';
import Playground from './pages/playground';
import Ryda from './pages/ryda';
import Tutorials from './pages/tutorials';

require('../app.scss');

export class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let pages = [
            {
                link: '/',
                name: 'Bilo'
            },{
                link: '/contact',
                name: 'Contact'
            },{
                link: '/draftjs',
                name: 'Draft.js'
            }, {
                link: '/tutorials',
                name: 'Tutorials'
            }, {
                link: '/places',
                name: 'Places'
            },{
                link: '/playground',
                name: 'Playground'
            }, {
                link: '/ryda',
                name: 'Ryda'
            }
        ];
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
                            {pages.map((page) => {
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
                            <Route exact path="/draftjs" component={DraftJS}/>
                            <Route exact path="/tutorials" component={Tutorials} />
                            <Route exact path="/tutorials/:tutorialId" component={MarkdownReader}/>
                            <Route exact path="/places" component={Places} />
                            <Route exact path="/playground" component={Playground} />
                            <Route exact path="/ryda" component={Ryda}/>
                            <Route path="*" component={NotFound}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;