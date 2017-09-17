import { combineReducers } from 'redux';
// Pages
import homeReducer from './pages/home/reducer';
import demoReducer from './pages/demo/reducer';
import tutorialsReducer from './pages/tutorials/reducer';
import placesReducer from './pages/places/reducer';
import markdownReaderReducer from './pages/places/reducer';
// Containers
import sidenavReducer from './containers/sidenav/reducer';

const rootReducer = combineReducers({
    // Pages
    demo: demoReducer,
    home: homeReducer,
    tutorials: tutorialsReducer,
    places: placesReducer,
    markdownReader: markdownReaderReducer,
    // Containers
    sidenav: sidenavReducer
});

export default rootReducer;