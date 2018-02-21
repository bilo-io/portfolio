import { SET_HEADING } from './actions'

const initialState = {
    data: undefined
}

const markdownReaderReducer = (state = initialState, {
    type,
    ...action
}) => {
    switch (type) {
        case SET_HEADING:
            return {
                ...state,
                heading: action.heading
            }
        default: return state;
    }
}

export default markdownReaderReducer;