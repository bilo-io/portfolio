import React from 'react';
import { Route, Switch} from 'react-router-dom';
// Components
import Map from './components/map/map';
import Navbar from './components/navbar/navbar';
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
        this.state = {};
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className='app-content'>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/home" component={Home}/>
                        <Route exact path="/contact" component={Contact}/>
                        <Route exact path="/projects" component={Projects}/>
                        <Route exact path="/tutorials" component={Tutorials}/>
                        <Route path="/tutorials/:tutorialId" component={Tutorial} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>    
                {/* <Profile /> */}
            </div>
        )
    }
}