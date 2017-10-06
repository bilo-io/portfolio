import { connect } from 'react-redux';
import Playground from './component'

import {
    myAction
} from './actions';

const mapStateToProps = (state, ownProps) => {
    let _state = state.playground;
    return {
        myProps: _state.myProps
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        myAction: () => dispatch(myAction())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Playground)

