import React from 'react';
import { Route, Switch} from 'react-router-dom';
// Components
import Map from './components/map/Map.jsx';
import Navbar from './components/navbar/Navbar.js';
import Footer from './components/footer/Footer.js';
// Pages
import Home from './pages/home/Home.js';
import Tutorials from './pages/tutorials/Tutorials.js';
import Tutorial from './pages/tutorial/Tutorial.js';
import Contact from './pages/contact/Contact.js';
import Projects from './pages/projects/Projects.js';
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
                        <Route path="/tutorials" component={Tutorials}/>
                        <Route path="/tutorials/:id" component={Tutorial}/>
                        <Route path="/projects" component={Projects}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/contact" component={Contact}/>
                    </Switch>
                </div>    
                <Footer/>
            </div>
        )
    }
}