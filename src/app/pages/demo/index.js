import { connect } from 'react-redux';
import Demo from './component';
import {
    updateText,
    saveText
} from './actions';

const mapStateToProps = (state, ownProps) => {
    let _state = state.demo;
    return {
        text: _state.text,
        items: _state.items
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateText: (val) => dispatch(updateText(val)),
        saveText: (val) => dispatch(saveText(val))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Demo);