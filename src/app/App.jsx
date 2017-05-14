import React from 'react';
// Components
import Map from './components/map/Map.jsx';
import Navbar from './components/navbar/Navbar.js';
import Footer from './components/footer/Footer.js';
// Pages
import Home from './pages/home/Home.js';
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
                <Navbar/>
                <div className="app-content">
                    {/*<Home/>*/}
                    {/*<Tutorials/>*/}
                </div>
                <Footer/>
            </div>
        )
    }
}