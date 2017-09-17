import {
    UPDATE_TEXT,
    SAVE_TEXT,
    updateText,
    saveText
} from './actions';

const initialState = {
    pageTitle: 'Demo',
    text: 'Something',
    items: ['Hello']
}

const demoReducer = (state = initialState, { type, ...action }) => {
    switch (type) {
        case UPDATE_TEXT:
            return {
                ...state,
                text: action.payload
            }
        case SAVE_TEXT:
            return {
                ...state,
                items: [...state.items, action.payload],
                text: ''
            }
        default: return state;
    }    
    
}

export default demoReducer;