import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.jsx';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

ReactDOM.render(
    <Router>
        <App></App>
    </Router>
, document.getElementById('app'));
