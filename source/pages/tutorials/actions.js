// ActionTypes
export const OPEN_TUTORIAL = 'OPEN_TUTORIAL';
export const UPDATE_QUERY = 'UPDATE_QUERY';
// ActionCreators
export const openTutorial = (tutorial) => {
    return {
        type: OPEN_TUTORIAL,
        tutorial
    }
}
export const updateQuery = (query) => {
    return {
        type: UPDATE_QUERY,
        query
    }
}