import { combineReducers } from 'redux';
// Pages
import contactReducer from './pages/contact/reducer';
import demoReducer from './pages/demo/reducer';
import homeReducer from './pages/home/reducer';
import markdownReaderReducer from './pages/places/reducer';
import placesReducer from './pages/places/reducer';
import tutorialsReducer from './pages/tutorials/reducer';
// Containers
import sidenavReducer from './containers/sidenav/reducer';

const rootReducer = combineReducers({
    // Pages
    contact: contactReducer,
    demo: demoReducer,
    home: homeReducer,
    tutorials: tutorialsReducer,
    places: placesReducer,
    markdownReader: markdownReaderReducer,
    // Containers
    sidenav: sidenavReducer
});

export default rootReducer;