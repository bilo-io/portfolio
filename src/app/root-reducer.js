import { combineReducers } from 'redux';
// Pages
import contact from './pages/contact/reducer';
import firebase from './pages/firebase/reducer';
import home from './pages/home/reducer';
import markdownReader from './pages/markdown-reader/reducer';
import ryda from './pages/ryda/reducer';
import tutorials from './pages/tutorials/reducer';
// Containers
import map from './containers/map/reducer';

const rootReducer = combineReducers({
    // Pages
    contact,
    firebase,
    home,
    markdownReader,
    ryda,
    tutorials,
    map,
});

export default rootReducer;