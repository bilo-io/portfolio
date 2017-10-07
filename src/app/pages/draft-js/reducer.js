import { MY_ACTION } from './actions'

const initialState = {
    title: 'DraftJS'
}

const draftjsReducer = (state = initialState, {
    type,
    ...action
}) => {
    switch (type) {
        case MY_ACTION:
            return {
                ...state,
                data: action.data
            }
        default: return state;
    }
}

export default draftjsReducer;