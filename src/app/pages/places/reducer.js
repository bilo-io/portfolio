import {
    SEARCH_GOOGLE,
    SEARCH_GOOGLE_SUCCESS,
    SEARCH_GOOGLE_ERROR,
    SELECT_RESULT
} from './actions';

const initialState = {
    query: 'Cape Town',
    results: []
}

export const placesReducer = (state = initialState, { type, ...action }) => {
    switch (type) {
        case SEARCH_GOOGLE:
            return {
                ...state,
                query: action.query
            }   
        case SEARCH_GOOGLE_SUCCESS:
            return {
                ...state,
                results: action.results
            }   
        case SEARCH_GOOGLE_ERROR:
            return {
                ...state,
                error: action.error
            }   
        case SELECT_RESULT:
            return {
                ...state,
                result: action.result
            }   
        default: return state;    
    }
}

export default placesReducer;