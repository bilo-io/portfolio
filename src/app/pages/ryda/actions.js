import { fromGoogle } from '../../util/place';

export const SEARCH_GOOGLE = 'SEARCH_GOOGLE';
export const SEARCH_GOOGLE_SUCCESS = 'SEARCH_GOOGLE_SUCCESS';
export const SEARCH_GOOGLE_ERROR = 'SEARCH_GOOGLE_ERROR';
export const SELECT_PLACE = 'SELECT_PLACE';
export const FETCH_JOURNEYS = 'FETCH_JOURNEYS';
export const FETCH_JOURNEYS_SUCCESS = 'FETCH_JOURNEYS_SUCCESS';
export const FETCH_JOURNEYS_ERROR = 'FETCH_JOURNEYS_ERROR';

export const selectPlace = (searchTag, place) => {
    return {type: SELECT_PLACE, searchTag, place}
}

export const searchGoogleError = (error) => {
    return {type: REQUEST_POSTS, error}
}
export const searchGoogleSuccess = (searchTag, json) => {
    const searchResults = json.results.map(result => fromGoogle(result))
    return {
        type: SEARCH_GOOGLE_SUCCESS,
        searchResults,
        searchTag,
        receivedAt: Date.now()
    }
}
export const searchGoogle = (searchTag, query) => {
    return {type: SEARCH_GOOGLE, query}
}

export const searchPlaces = (searchTag, query) => {
    console.log({searchTag, query})
    return (dispatch) => {
        dispatch(searchGoogle(searchTag, query))
        if (query && query.length > 0) {
            return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${query}`)
                .then(response => response.json(), error => console.log('An error occured.', { error }))
                .then(json => {
                    dispatch(searchGoogleSuccess(searchTag, json))
                })
        }
    }
}

export const fetchJourneys = (requestObj) => {
    console.log({requestObj})
    return (dispatch) => {
        dispatch({
            type: FETCH_JOURNEYS
        })
        
    }    
}
