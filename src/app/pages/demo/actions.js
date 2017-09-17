export const UPDATE_TEXT = 'UPDATE_TEXT';
export const SAVE_TEXT = 'SAVE_TEXT';

export const updateText = (text) => {
    return {
        type: UPDATE_TEXT,
        payload: text
    }
}

export const saveText = (text) => {
    return {
        type: SAVE_TEXT,
        payload: text
    }
}

