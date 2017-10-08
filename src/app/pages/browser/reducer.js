import { MY_ACTION } from './actions'

const initialState = {
    iframeUrl: 'http://127.0.0.1:8080'
}

const browserReducer = (state = initialState, {
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

export default browserReducer;