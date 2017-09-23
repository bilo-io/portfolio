import {SEARCH_GOOGLE, SEARCH_GOOGLE_SUCCESS, SEARCH_GOOGLE_ERROR, SELECT_PLACE} from './actions';

const initialState = {
    query: 'Cape Town',
    searchResults: [],
    searchSelections: {}
}

export const rydaReducer = (state = initialState, {
    type,
    ...action
}) => {
    switch (type) {
        case SEARCH_GOOGLE:
            return {
                ...state,
                query: action.query
            }
        case SEARCH_GOOGLE_SUCCESS:
            let searchResults = { ...state.searchResults };
            searchResults[action.searchTag] = action.searchResults;
            return {
                ...state,
                searchResults
            }
        case SEARCH_GOOGLE_ERROR:
            return {
                ...state,
                error: action.error
            }
        case SELECT_PLACE:
            let searchSelections = { ...state.searchSelections };
            searchSelections[action.searchTag] = action.place;
            let resetResults = { ...state.searchResults };
            resetResults[action.searchTag] = []
            return {
                ...state,
                searchSelections,
                searchResults: resetResults
            }
        default:
            return state;
    }
}

export default rydaReducer;