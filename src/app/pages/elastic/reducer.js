import { ES_SEARCH } from './actions'

const initialState = {
    query: undefined,
    results: {}
}

const elasticReducer = (state = initialState, {
    type,
    ...action
}) => {
    switch (type) {
        case ES_SEARCH:
            return {
                ...state,
                data: action.data
            }
        default: return state;
    }
}

export default elasticReducer;