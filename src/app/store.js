import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './root-reducer';

const loggerMiddleware = createLogger();
const middleware = [
    thunkMiddleware,
    loggerMiddleware
]
const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            ...middleware
        )
    )
);
// const store = createStore(
//        reducer, 
//        composeWithDevTools(
//     applyMiddleware(...middleware),
//     // other store enhancers if any
// ));

export default store;

