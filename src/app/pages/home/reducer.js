import {UPDATE_QUERY, SEARCH_RESULTS, SEARCH_SUCCESS, SEARCH_ERROR} from './actions';

const initialState = {
    pageTitle: 'Home',
    loading: false,
    results: [],
    query: undefined,
    response: undefined
}

const homeReducer = (state = initialState, {
    type,
    ...action
}) => {
    switch (type) {
        case UPDATE_QUERY:
            return {
                ...state,
                query: action.query
            }
        case SEARCH_RESULTS:
            return {
                ...state,
                loading: action.loading,
                query: action.query
            }
        case SEARCH_SUCCESS:
            return {
                ...state,
                loading: action.loading,
                results: action.results,
                response: action.response
            }
        case SEARCH_ERROR:
            return {
                ...state,
                loading: action.loading,
                error: action.error,
                results: []
            }
        default: return state;
    }
}

export default homeReducer;