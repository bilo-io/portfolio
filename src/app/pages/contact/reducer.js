import { MY_ACTION } from './actions'

const homeReducer = (state = initialState, {
    type,
    ...action
}) => {
    switch (type) {
        case SEND_EMAIL:
            return {
                ...state,
                email: action.email
            }
        default: return state;
    }
}