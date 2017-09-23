import {SEARCH_GOOGLE, SEARCH_GOOGLE_SUCCESS, SEARCH_GOOGLE_ERROR, SELECT_PLACE} from './actions';

const initialState = {
    query: 'Cape Town',
    searchResults: [],
    searchSelections: {}
}

export const placesReducer = (state = initialState, {
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
            return {
                ...state,
                searchResults: action.searchResults
            }
        case SEARCH_GOOGLE_ERROR:
            return {
                ...state,
                error: action.error
            }
        case SELECT_PLACE:
            let searchSelections = { ...state.searchSelections };
            searchSelections[action.searchKey] = action.place;
            return {
                ...state,
                searchSelections,
                searchResults: []
            }
        default:
            return state;
    }
}

export default placesReducer;