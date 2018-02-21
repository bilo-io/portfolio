import {OPEN_TUTORIAL, UPDATE_QUERY} from './actions';

const initialState = {
    query: '',
    tutorial: ''
}

export const tutorialsReducer = (state = initialState, {
    type,
    ...action
}) => {
    switch (type) {
        case OPEN_TUTORIAL:
            return {
                ...state,
                tutorial: action.tutorial
            }
        case UPDATE_QUERY:
            return {
                ...state,
                query: action.query
            }
        default:
            return state;
    }
}

export default tutorialsReducer;