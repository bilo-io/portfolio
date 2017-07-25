import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
    <Router>
        <App></App>
    </Router>
, document.getElementById('app'));
