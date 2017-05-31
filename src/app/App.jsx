import React from 'react';
import { Route, Switch} from 'react-router-dom';
// Components
import Map from './components/map/Map.jsx';
import Navbar from './components/navbar/Navbar.js';
import Footer from './components/footer/Footer.js';
// Pages
import Home from './pages/home/Home.js';
import Contact from './pages/contact/Contact.js';
import Projects from './pages/projects/Projects.js';
import Tutorial from './pages/tutorial/Tutorial.js';
import Tutorials from './pages/tutorials/Tutorials.js';

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
                        <Route path="/tutorials/:tutorialId" component={Tutorial}/>
                    </Switch>
                </div>    
                <Footer/>
            </div>
        )
    }
}