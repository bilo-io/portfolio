import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.jsx';
import Home from './app/pages/home/Home.js';
import Tutorials from './app/pages/tutorials/Tutorials.js';
import Projects from './app/pages/projects/Projects.js';
import Contact from './app/pages/contact/Contact.js';
// import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './app/components/navbar/Navbar.js';
import Footer from './app/components/footer/Footer.js';
require('./app/app.scss');
ReactDOM.render(
    <div>
        <Navbar/>
        <BrowserRouter>
            <div className="app-content">    
                <Route path="/home" component={Home} />
                <Route path="/tutorials" component={Tutorials} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
            </div>    
        </BrowserRouter>
        <Footer />
    </div>,
    document.getElementById('app'));
