// ActionTypes
const SEND_EMAIL = 'SEND_EMAIL';
// ActionCreators
export const sendEmail = (data) => {
    return {
        type: SEND_EMAIL,
        data
    }
}