import { combineReducers } from 'redux';
// Pages
import browser from './pages/browser/reducer';
import contact from './pages/contact/reducer';
import firebase from './pages/firebase/reducer';
import home from './pages/home/reducer';
import markdownReader from './pages/places/reducer';
import places from './pages/places/reducer';
import playground from './pages/playground/reducer';
import ryda from './pages/ryda/reducer';
import tutorials from './pages/tutorials/reducer';
import xui from './pages/xui/reducer';
// Containers
import map from './containers/map/reducer';

const rootReducer = combineReducers({
    // Pages
    browser,
    contact,
    firebase,
    home,
    markdownReader,
    places,
    playground,
    ryda,
    tutorials,
    map,
    xui,
});

export default rootReducer;