import { connect } from 'react-redux';
import Contact from './component';
import {
} from './actions';

const mapStateToProps = (state) => {
    let _state = state.contact;
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Contact);