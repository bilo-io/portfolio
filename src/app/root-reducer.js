import { combineReducers } from 'redux';
// Pages
import browserReducer from './pages/browser/reducer';
import contactReducer from './pages/contact/reducer';
import elasticReducer from './pages/elastic/reducer';
import draftjsReducer from './pages/draft-js/reducer';
import homeReducer from './pages/home/reducer';
import markdownReaderReducer from './pages/places/reducer';
import placesReducer from './pages/places/reducer';
import playgroundReducer from './pages/playground/reducer';
import rydaReducer from './pages/ryda/reducer';
import tutorialsReducer from './pages/tutorials/reducer';
import xuiReducer from './pages/xui/reducer';
import wordcloudReducer from './pages/wordcloud/reducer';
// Containers
import mapReducer from './containers/map/reducer';

const rootReducer = combineReducers({
    // Pages
    browser: browserReducer,
    contact: contactReducer,
    draftjs: draftjsReducer,
    elastic: elasticReducer,
    home: homeReducer,
    markdownReader: markdownReaderReducer,
    places: placesReducer,
    playground: playgroundReducer,
    ryda: rydaReducer,
    tutorials: tutorialsReducer,
    wordcloud: wordcloudReducer,
    // Containers
    map: mapReducer,
    xui: xuiReducer,
});

export default rootReducer;