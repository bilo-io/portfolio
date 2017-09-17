// Action Types:
// *************
export const UPDATE_QUERY = 'UPDATE_QUERY';
export const SEARCH_RESULTS = 'SEARCH_RESULTS';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_ERROR = 'SEARCH_ERROR';
// Actions:
// ********
export const updateQuery = (query) => {
    return {
        type: UPDATE_QUERY,
        query
    }
}

export const searchResults = (query) => {
    return {
        type: SEARCH_RESULTS,
        loading: true,
        query,
        results: []
    }
}

export const searchSuccess = (json) => {
    return {
        type: SEARCH_SUCCESS,
        loading: false,
        results: json
    }
}

export const searchError = (error) => {
    console.log({ error });
    return {
        type: SEARCH_ERROR,
        loading: false,
        results: []
    }
}