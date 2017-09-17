export const SEARCH_GOOGLE = 'SEARCH_GOOGLE';
export const SEARCH_GOOGLE_SUCCESS = 'SEARCH_GOOGLE_SUCCESS';
export const SEARCH_GOOGLE_ERROR = 'SEARCH_GOOGLE_ERROR';
export const SELECT_RESULT = 'SELECT_RESULT';

export const selectResult = (query) => {
    return {type: SELECT_RESULT, query}
}

export const searchGoogleError = (error) => {
    return {type: REQUEST_POSTS, error}
}

export const searchGoogleSuccess = (json) => {
    console.log({json})
    return {
        type: SEARCH_GOOGLE_SUCCESS,
        results: json.results,
        receivedAt: Date.now()
    }
}

export const searchGoogle = (query) => {
    return {type: SEARCH_GOOGLE, query}
}
export const searchPlaces = (query) => {
    return (dispatch) => {
        dispatch(searchGoogle(query))
        if (query && query.length > 0) {
            return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${query}`)
                .then(response => response.json(), error => console.log('An error occured.', { error }))
                .then(json => {
                    dispatch(searchGoogleSuccess(json))
                })
        }
    }
}
