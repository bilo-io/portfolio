// ActionTypes
export const SET_HEADING = 'SET_HEADING';
// ActionCreators
export const setHeading = (heading) => {
    return {
        type: SET_HEADING,
        heading
    }
}