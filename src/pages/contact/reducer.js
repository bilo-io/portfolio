import { SEND_EMAIL } from './actions'

const initialState = {
    mailObject: undefined
}
const contactReducer = (state = initialState, {
    type,
    ...action
}) => {
    switch (type) {
        case SEND_EMAIL:
            return {
                ...state,
                mailObject: action.mailObject
            }
        default: return state;
    }
}

export default contactReducer;