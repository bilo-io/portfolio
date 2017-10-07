// ActionTypes
export const ES_SEARCH = 'ES_SEARCH';
// ActionCreators
export const esSearch = (data) => {
    return {
        type: ES_SEARCH,
        data
    }
}