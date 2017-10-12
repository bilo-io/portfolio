import { MY_ACTION } from './actions'

const initialState = {
    data: undefined
}

const wordcloudReducer = (state = initialState, {
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

export default wordcloudReducer;