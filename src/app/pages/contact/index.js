import { connect } from 'react-redux';
import Contact from './component';
import {
    sendEmail
} from './actions';

const mapStateToProps = (state) => {
    let _state = state.contact;
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendEmail: (mailObj) => dispatch(sendEmail(mailObj))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Contact);